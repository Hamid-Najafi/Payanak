using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;
using Backend.ClientModels;
using Backend.Helpers;
using Backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using DeviceDetectorNET;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [EnableCors("AllowOrigin")]
    public class UserTicketController : ControllerBase
    {
        private readonly IWebHostEnvironment _hostingEnvironment;
        private SmsPanelDbContext _context;
        private AppAuth _appAuth;
        private AppPath _appPath;
        public UserTicketController(SmsPanelDbContext context,
        IOptions<AppAuth> appAuth,
        IOptions<AppPath> appPath,
        IWebHostEnvironment hostingEnvironment)
        {
            _context = context;
            _appAuth = appAuth.Value;
            _appPath = appPath.Value;
            _hostingEnvironment = hostingEnvironment;
        }

        [HttpGet]
        [Authorize]
        public IActionResult Get([FromQuery] string queryParam)
        {
            try
            {
                var qp = Newtonsoft.Json.JsonConvert.DeserializeObject<QueryParamModel>(queryParam);
                
                var usernameClaim = User.Claims.FirstOrDefault(a => a.Type == "username");
                if (usernameClaim == null)
                    return Unauthorized();
                var username = usernameClaim.Value;
                var user = _context.VwContact.FirstOrDefault(a => a.Username == username);
                if (user == null)
                {
                    return Unauthorized();
                }
                var tickets = _context.VwTicket.Where(a => (a.UserId == user.Id) && a.Status < 4);
                if (!string.IsNullOrEmpty(qp.Filter))
                { // اعمال فیلتر سرچ شده
                    qp.Filter = qp.Filter.ToLower().Trim();
                    tickets = tickets.Where(
                                    a => a.ResponderEmail.ToLower().Contains(qp.Filter) ||
                                        a.ResponderFirstName.ToLower().Contains(qp.Filter) ||
                                        a.ResponderLastName.ToLower().Contains(qp.Filter) ||
                                        a.ResponderUsername.ToLower().Contains(qp.Filter) ||
                                        a.Header.ToLower().Contains(qp.Filter)
                                    );
                }
                if (!string.IsNullOrEmpty(qp.SortField) && qp.SortOrder.ToLower() == "asc") // اعمال ترتیب افزایشی
                    tickets = tickets.OrderByStr(qp.SortField);
                if (!string.IsNullOrEmpty(qp.SortField) && qp.SortOrder.ToLower() == "desc")// اعمال ترتیب کاهشی
                    tickets = tickets.OrderByStrDescending(qp.SortField);
                var TotalCount = tickets.Count();
                var skip = (qp.PageNumber - 1) * qp.PageSize;
                if (TotalCount > qp.PageSize)
                    tickets = tickets.Skip(skip).Take(qp.PageSize);
                var ticketsList = tickets.Select(a => a.ToModel()).ToList();
                var tikectIds = ticketsList.Select(a => a.Id);
                var lasts = _context.VwTicketLastMessage.Where(a => tikectIds.Contains(a.TicketId.Value))
                                                    .Select(a => a.ToModel(user))
                                                    .ToList();
                var options = new JsonSerializerOptions
                {
                    MaxDepth = 50,
                    WriteIndented = true
                };
                var res = Newtonsoft.Json.JsonConvert.SerializeObject(new ResponseModel
                {
                    Status = new List<ResponseStatusModel>{
                                new ResponseStatusModel(ResponseStatus.ok)
                            },
                    Result = lasts,
                    TotalCount = TotalCount
                }, new JsonSerializerSettings()
                {
                    PreserveReferencesHandling = PreserveReferencesHandling.Objects,
                    Formatting = Formatting.Indented,
                    ContractResolver = new CamelCasePropertyNamesContractResolver()
                });
                return Ok(
                    res
                );
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpGet("{id}")]
        [Authorize]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var usernameClaim = User.Claims.FirstOrDefault(a => a.Type == "username");
                if (usernameClaim == null)
                    return Unauthorized();
                var username = usernameClaim.Value;
                var user = _context.VwContact.FirstOrDefault(a => a.Username == username);
                if (user == null)
                {
                    return Unauthorized();
                }
                var userAcc = _context.AccountInfo.Where(a => a.Username == username)
                                .Include(a => a.UserRoles)
                                    .ThenInclude(a => a.Role)
                                        .ThenInclude(a => a.RolePermissions)
                                            .ThenInclude(a => a.Permission)
                                .FirstOrDefault();
                var userPermissions = userAcc.UserRoles
                                            .Select(a => a.Role.RolePermissions
                                                        .Select(b => b.Permission))
                                            .SelectMany(a => a)
                                            .ToList();
                var hasAdminPermission = AuthService.HasPermission(userPermissions, AppPermissions.UserManagementRead);
                if (!_context.VwTicket.Any(a => a.Id == id && (a.UserId == user.Id || hasAdminPermission)))
                {
                    return Ok(new ResponseModel
                    {
                        Status = new List<ResponseStatusModel>{
                                new ResponseStatusModel(ResponseStatus.unauthorized)
                            },
                        Result = null,
                        TotalCount = 0
                    });
                }
                var td = _context.VwTicketDetail.Where(a => a.TicketId == id).OrderBy(a => a.SendDate).ToList();
                var tdd = _context.TicketDetail.Where(a => a.TicketId == id);
                await tdd.ForEachAsync(a => a.Status = 2);
                await _context.SaveChangesAsync();
                var result = new List<ChatModel>();
                foreach (var item in td)
                {
                    if (result.Count > 0 &&
                    ((item.SenderUsername == item.OwnerUsername && result.Last().Avatar == "left") ||
                        (item.SenderUsername != item.OwnerUsername && result.Last().Avatar == "right")))
                    {
                        result[result.Count - 1].Messages.Add(item.Body);
                        continue;
                    }
                    result.Add(new ChatModel
                    {
                        Avatar = item.SenderUsername == item.OwnerUsername ? "left" : "right",
                        ChatClass = item.SenderUsername == item.OwnerUsername ? "chat chat-left" : "chat",
                        ImagePath = item.SenderUsername == item.OwnerUsername ? item.SenderPicture : item.OwnerPicture,
                        Messages = new List<string>{
                            item.Body
                        },
                        MessageType = "text",
                        Time = "",
                        TicketId = item.TicketId.Value
                    });
                }
                var res = Newtonsoft.Json.JsonConvert.SerializeObject(new ResponseModel
                {
                    Status = new List<ResponseStatusModel>{
                                new ResponseStatusModel(ResponseStatus.ok)
                            },
                    Result = result,
                    TotalCount = result.Count
                }, new JsonSerializerSettings()
                {
                    PreserveReferencesHandling = PreserveReferencesHandling.Objects,
                    Formatting = Formatting.Indented,
                    ContractResolver = new CamelCasePropertyNamesContractResolver()
                });
                return Ok(
                    res
                );
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPost]
        [Authorize]
        public ActionResult Post([FromBody] TicketModel model)
        {
            try
            {
                var usernameClaim = User.Claims.FirstOrDefault(a => a.Type == "username");
                if (usernameClaim == null)
                    return Unauthorized();
                var username = usernameClaim.Value;
                var user = _context.VwContact.FirstOrDefault(a => a.Username == username);
                if (user == null)
                {
                    return Unauthorized();
                }

                if (model == null ||
                string.IsNullOrEmpty(model.Header))

                    return Ok(new ResponseModel
                    {
                        Status = new List<ResponseStatusModel>{
                            new ResponseStatusModel(ResponseStatus.badRequest)
                        }
                    });
                var ticket = new Ticket();
                using (var _transaction = _context.Database.BeginTransaction())
                {
                    ticket = new Ticket
                    {
                        CreateDate = DateTime.UtcNow,
                        Header = model.Header,
                        Status = 1,
                        UserId = user.Id.Value
                    };
                    _context.Ticket.Add(ticket);
                    _context.SaveChanges();
                    _transaction.Commit();
                }
                var result = _context.VwTicket.FirstOrDefault(a => a.Id == ticket.Id);
                return Ok(new ResponseModel
                {
                    Status = new List<ResponseStatusModel>{
                        new ResponseStatusModel(ResponseStatus.ok)
                    },
                    Result = result.ToModel(),
                    TotalCount = 1
                });

            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPut]
        [Authorize]
        public ActionResult Put([FromBody]ChatModel model)
        {
            try
            {
                var usernameClaim = User.Claims.FirstOrDefault(a => a.Type == "username");
                if (usernameClaim == null)
                    return Unauthorized();
                var username = usernameClaim.Value;
                var user = _context.VwContact.FirstOrDefault(a => a.Username == username);
                if (user == null)
                {
                    return Unauthorized();
                }
                var userAcc = _context.AccountInfo.Where(a => a.Username == username)
                                .Include(a => a.UserRoles)
                                    .ThenInclude(a => a.Role)
                                        .ThenInclude(a => a.RolePermissions)
                                            .ThenInclude(a => a.Permission)
                                .FirstOrDefault();
                var userPermissions = userAcc.UserRoles
                                            .Select(a => a.Role.RolePermissions
                                                        .Select(b => b.Permission))
                                            .SelectMany(a => a)
                                            .ToList();
                var hasAdminPermission = AuthService.HasPermission(userPermissions, AppPermissions.UserManagementWrite);

                if (model == null ||
                    model.TicketId == -1 ||
                    model.Messages == null ||
                    model.Messages.Count == 0 ||
                string.IsNullOrEmpty(model.Messages[0]))
                {
                    return Ok(new ResponseModel
                    {
                        Status = new List<ResponseStatusModel>{
                                new ResponseStatusModel(ResponseStatus.badRequest)
                            }
                    });
                }
                var td = new TicketDetail();
                var tik = _context.Ticket.FirstOrDefault(a => a.Id == model.TicketId
                                                    && (a.UserId == user.Id || hasAdminPermission));
                if (tik == null)
                {
                    return Ok(new ResponseModel
                    {
                        Status = new List<ResponseStatusModel>{
                                new ResponseStatusModel(ResponseStatus.unauthorized)
                            }
                    });
                }
                using (var _transaction = _context.Database.BeginTransaction())
                {
                    td = new TicketDetail
                    {
                        Body = model.Messages[0],
                        SendDate = DateTime.UtcNow,
                        SenderId = user.Id.Value,
                        TicketId = model.TicketId,
                        Status = 1
                    };
                    if (tik.Status == 1)
                    {
                        _context.TicketDetail.Add(td);
                        _context.SaveChanges();
                        _transaction.Commit();
                    }
                    else
                    {
                        return Ok(new ResponseModel
                        {
                            Status = new List<ResponseStatusModel>{
                            new ResponseStatusModel(ResponseStatus.ticketCompelted)
                        }
                        });
                    }
                }
                var result = _context.VwTicketDetail.FirstOrDefault(a => a.Id == td.Id);
                return Ok(new ResponseModel
                {
                    Status = new List<ResponseStatusModel>{
                        new ResponseStatusModel(ResponseStatus.ok)
                    },
                    Result = new ChatModel
                    {
                        Avatar = result.SenderUsername == result.OwnerUsername ? "left" : "right",
                        ChatClass = result.SenderUsername == result.OwnerUsername ? "chat chat-left" : "chat",
                        ImagePath = result.SenderUsername == result.OwnerUsername ? result.SenderPicture : result.OwnerPicture,
                        Messages = new List<string>{
                            result.Body
                        },
                        MessageType = "text",
                        Time = "",
                        TicketId = result.TicketId.Value
                    },
                    TotalCount = 1
                });

            }
            catch
            {
                return BadRequest();
            }
        }

        [Route("[action]/{id}")]
        [HttpDelete("{id}")]
        [Authorize]
        public IActionResult Deactive(long id)
        {
            try
            {
                var usernameClaim = User.Claims.FirstOrDefault(a => a.Type == "username");
                if (usernameClaim == null)
                    return Unauthorized();
                var username = usernameClaim.Value;
                var user = _context.VwContact.FirstOrDefault(a => a.Username == username);
                if (user == null)
                {
                    return Unauthorized();
                }
                var userAcc = _context.AccountInfo.Where(a => a.Username == username)
                            .Include(a => a.UserRoles)
                                .ThenInclude(a => a.Role)
                                    .ThenInclude(a => a.RolePermissions)
                                        .ThenInclude(a => a.Permission)
                            .FirstOrDefault();
                var userPermissions = userAcc.UserRoles
                                            .Select(a => a.Role.RolePermissions
                                                        .Select(b => b.Permission))
                                            .SelectMany(a => a)
                                            .ToList();
                var hasAdminPermission = AuthService.HasPermission(userPermissions, AppPermissions.UserManagementWrite);
                var ticket = _context.Ticket.FirstOrDefault(a => a.Id == id &&
                                        (a.UserId == user.Id || hasAdminPermission));
                if (ticket == null)
                {
                    return Ok(new ResponseModel
                    {
                        Status = new List<ResponseStatusModel>{
                               new ResponseStatusModel(ResponseStatus.unauthorized)
                           }
                    });
                }
                ticket.Status = 2;
                _context.Ticket.Update(ticket);
                _context.SaveChanges();
                return Ok(new ResponseModel
                {
                    Status = new List<ResponseStatusModel>{
                               new ResponseStatusModel(ResponseStatus.ok)
                           }
                });
            }
            catch
            {
                return BadRequest();
            }

        }

        [Route("[action]/{id}")]
        [HttpDelete("{id}")]
        [Authorize]
        public ActionResult DeleteTicket(long id)
        {
            try
            {
                var usernameClaim = User.Claims.FirstOrDefault(a => a.Type == "username");
                if (usernameClaim == null)
                    return Unauthorized();
                var username = usernameClaim.Value;
                var user = _context.VwContact.FirstOrDefault(a => a.Username == username);
                if (user == null)
                {
                    return Unauthorized();
                }
                var userAcc = _context.AccountInfo.Where(a => a.Username == username)
                        .Include(a => a.UserRoles)
                            .ThenInclude(a => a.Role)
                                .ThenInclude(a => a.RolePermissions)
                                    .ThenInclude(a => a.Permission)
                        .FirstOrDefault();
                var userPermissions = userAcc.UserRoles
                                            .Select(a => a.Role.RolePermissions
                                                        .Select(b => b.Permission))
                                            .SelectMany(a => a)
                                            .ToList();
                var hasAdminPermission = AuthService.HasPermission(userPermissions, AppPermissions.UserManagementDelete);
                var ticket = _context.Ticket.FirstOrDefault(a => a.Id == id &&
                                        (a.UserId == user.Id || hasAdminPermission));
                if (ticket == null)
                {
                    return Ok(new ResponseModel
                    {
                        Status = new List<ResponseStatusModel>{
                               new ResponseStatusModel(ResponseStatus.unauthorized)
                           }
                    });
                }
                ticket.Status = 4;
                _context.Ticket.Update(ticket);
                _context.SaveChanges();
                return Ok(new ResponseModel
                {
                    Status = new List<ResponseStatusModel>{
                               new ResponseStatusModel(ResponseStatus.ok)
                           }
                });
            }
            catch
            {
                return BadRequest();
            }
        }


    }
}
