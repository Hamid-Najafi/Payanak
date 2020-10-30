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
    public class UserScheduleDetailController : ControllerBase
    {
        private readonly IWebHostEnvironment _hostingEnvironment;
        private SmsPanelDbContext _context;
        private AppAuth _appAuth;
        private AppPath _appPath;
        public UserScheduleDetailController(SmsPanelDbContext context,
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
        public IActionResult Get([FromQuery] string userId, [FromQuery]  string ssiId)
        {
            try
            {
                var usernameClaim = User.Claims.FirstOrDefault(a => a.Type == "username");
                if (usernameClaim == null)
                    return Unauthorized();
                var username = usernameClaim.Value;
                var user = _context.VwContact.FirstOrDefault(a => a.Username == username);
                if (user != null)
                {
                    var ssi = _context.VwScheduleSmsInfo.Where(a => a.UserId == user.Id); // TODO Permissions
                    if (!long.TryParse(userId, out long UserId) || !long.TryParse(ssiId, out long SSIId))
                    {
                        return Ok(
                                new ResponseModel
                                {
                                    Status = new List<ResponseStatusModel>{
                                            new ResponseStatusModel(ResponseStatus.badRequest)
                                        }
                                });
                    }
                    var ssd = _context.VwScheduleSms.FirstOrDefault(a => a.ParentId == SSIId && a.UserId == UserId);

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
                        Result = ssd == null ? null : ssd.ToModel(),
                        TotalCount = ssd == null ? 0 : 1
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
                return Unauthorized();
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpGet("{id}")]
        [Authorize]
        public IActionResult Get(int id)
        {
            try
            {
                var usernameClaim = User.Claims.FirstOrDefault(a => a.Type == "username");
                if (usernameClaim == null)
                    return Unauthorized();
                var username = usernameClaim.Value;
                var user = _context.AccountInfo.FirstOrDefault(a => a.Username == username);
                if (user == null)
                    return Unauthorized();
                var group = _context.Group.FirstOrDefault(a => a.Id == id &&
                                                    a.Owner == user.Id); // TODO Get result for permissions
                if (group == null)
                {
                    return Ok(
                    new ResponseModel
                    {
                        Status = new List<ResponseStatusModel>{
                                new ResponseStatusModel(ResponseStatus.unauthorized)
                            }
                    });
                }
                var res = Newtonsoft.Json.JsonConvert.SerializeObject(new ResponseModel
                {
                    Status = new List<ResponseStatusModel>{
                                new ResponseStatusModel(ResponseStatus.ok)
                            },
                    Result = group,
                    TotalCount = 1
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
        public ActionResult Post([FromBody]ScheduleDetailModel model)
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
                    model.Parent == null || 
                    model.Parent.Id == -1 ||
                    model.User == null || model.User.Id == -1 || model.Date == -1)
                    return Ok(new ResponseModel
                    {
                        Status = new List<ResponseStatusModel>{
                            new ResponseStatusModel(ResponseStatus.badRequest)
                        }
                    });
                if(!_context.ScheduleSmsInfo.Any(a=>a.Id == model.Parent.Id && 
                                            (a.UserId == user.Id ||  hasAdminPermission )))
                                            {
                                                return Ok(new ResponseModel
                                                {
                                                    Status = new List<ResponseStatusModel>{
                                                        new ResponseStatusModel(ResponseStatus.unauthorized)
                                                    }
                                                }); 
                                            }
                var ssd = _context.ScheduleSmsDetail.FirstOrDefault(a => a.UserId == model.User.Id && a.ParentId == model.Parent.Id);
                if (ssd == null)
                {
                    ssd = new ScheduleSmsDetail
                    {
                        Counter = 0,
                        Date = DateTime.UtcNow,
                        ParentId = model.Parent.Id,
                        UpdatedDate = DateTime.UtcNow,
                        UserId = model.User.Id
                    };
                    _context.ScheduleSmsDetail.Add(ssd);
                    _context.SaveChanges();
                }
                else if (model.Date != ssd.Date.Value.Date.Ticks && model.Date != ssd.Date.Value.Date.Ticks)
                {
                    ssd.Date = new DateTime(model.Date);
                    ssd.UpdatedDate = new DateTime(model.Date);
                    ssd.Counter = 0;
                    _context.ScheduleSmsDetail.Update(ssd);
                    _context.SaveChanges();
                }

                var result = _context.VwScheduleSms.FirstOrDefault(a => a.Id == ssd.Id);
                return Ok(new ResponseModel
                {
                    Status = new List<ResponseStatusModel>{
                        new ResponseStatusModel(ResponseStatus.ok)
                    },
                    Result = result.ToModel(),
                    TotalCount = 1
                });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPut]
        [Authorize]
        public ActionResult Put([FromBody]ScheduleSmsInfoModel model)
        {
            try
            {
                var usernameClaim = User.Claims.FirstOrDefault(a => a.Type == "username");
                if (usernameClaim == null)
                    return Unauthorized();
                var username = usernameClaim.Value;
                var user = _context.VwContact.FirstOrDefault(a => a.Username == username);
                if (user != null)
                {
                    if (model == null || model.Template == null || model.Template.Id == -1 ||
                    string.IsNullOrEmpty(model.Name))
                        return Ok(new ResponseModel
                        {
                            Status = new List<ResponseStatusModel>{
                            new ResponseStatusModel(ResponseStatus.badRequest)
                        }
                        });
                    var res = _context.ScheduleSmsInfo.FirstOrDefault(a => a.Id == model.Id); // Permissions
                    if (res == null)
                        return Ok(new ResponseModel
                        {
                            Status = new List<ResponseStatusModel>{
                            new ResponseStatusModel(ResponseStatus.badRequest)
                        }
                        });
                    using (var _transaction = _context.Database.BeginTransaction())
                    {
                        res.Name = model.Name;
                        res.AddedYear = model.AddedYear;
                        res.AddedMonth = model.AddedMonth;
                        res.AddedDay = model.AddedDay;
                        res.Code = model.Code;
                        res.Status = model.Status;
                        res.TemplateId = model.Template.Id;
                        _context.ScheduleSmsInfo.Update(res);
                        _context.SaveChanges();
                        _transaction.Commit();
                    }
                    var result = _context.VwScheduleSmsInfo.FirstOrDefault(a => a.Id == res.Id);
                    return Ok(new ResponseModel
                    {
                        Status = new List<ResponseStatusModel>{
                        new ResponseStatusModel(ResponseStatus.ok)
                    },
                        Result = result.ToModel(),
                        TotalCount = 1
                    });
                }
                return Unauthorized();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        [Authorize]
        public IActionResult Delete(long id)
        {
            try
            {
                var usernameClaim = User.Claims.FirstOrDefault(a => a.Type == "username");
                if (usernameClaim == null)
                    return Unauthorized();
                var username = usernameClaim.Value;
                var user = _context.VwContact.FirstOrDefault(a => a.Username == username);
                if (user == null)
                    return Unauthorized();
                using (var transaction = _context.Database.BeginTransaction())
                {
                    var ssd = _context.ScheduleSmsDetail.FirstOrDefault(a => a.Id == id); // TODO permissions
                    if (ssd == null)
                    {
                        return Ok(new ResponseModel
                        {
                            Status = new List<ResponseStatusModel>{
                               new ResponseStatusModel(ResponseStatus.badRequest)
                           }
                        });
                    }
                    _context.ScheduleSmsDetail.Remove(ssd);
                    _context.SaveChanges();
                    transaction.Commit();
                }
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
