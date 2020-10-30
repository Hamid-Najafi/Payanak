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
    public class SendSmsController : ControllerBase
    {
        private readonly IWebHostEnvironment _hostingEnvironment;
        private SmsPanelDbContext _context;
        private AppAuth _appAuth;
        private AppPath _appPath;
        public SendSmsController(SmsPanelDbContext context,
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
                var pms = _context.SentInfo.OrderByDescending(a => a.SentDate)
                                            .Where(a => a.UserId == user.Id);
                if (!string.IsNullOrEmpty(qp.Filter))
                { // اعمال فیلتر سرچ شده
                    qp.Filter = qp.Filter.ToLower().Trim();
                    pms = pms.Where(
                                    a => a.Body.ToLower().Contains(qp.Filter) ||
                                        a.Header.ToLower().Contains(qp.Filter) ||
                                        a.SendNumber.ToLower().Contains(qp.Filter)
                                    );
                }
                if (!string.IsNullOrEmpty(qp.SortField) && qp.SortOrder.ToLower() == "asc") // اعمال ترتیب افزایشی
                    pms = pms.OrderByStr(qp.SortField);
                if (!string.IsNullOrEmpty(qp.SortField) && qp.SortOrder.ToLower() == "desc")// اعمال ترتیب کاهشی
                    pms = pms.OrderByStrDescending(qp.SortField);
                var TotalCount = pms.Count();
                var skip = (qp.PageNumber - 1) * qp.PageSize;
                if (TotalCount > qp.PageSize)
                    pms = pms.Skip(skip).Take(qp.PageSize);
                var pmList = pms.Select(a => a.ToModel()).ToList();
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
                    Result = pmList,
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
        public ActionResult Post([FromBody]ComposeSMSModel smsModel)
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
                if (!AuthService.HasPermission(userPermissions, AppPermissions.NormalUserSend))
                {
                    return Ok(new ResponseModel
                    {
                        Status = new List<ResponseStatusModel>{
                            new ResponseStatusModel(ResponseStatus.unauthorized)
                        }
                    });
                }
                if (smsModel == null ||
                !smsModel.SendNumber.HasValue ||
                (string.IsNullOrEmpty(smsModel.Body) && !smsModel.TemplateId.HasValue) ||
                ((smsModel.Numbers != null && smsModel.Numbers.Count == 0) &&
                 (smsModel.GroupIds != null && smsModel.GroupIds.Count == 0)))
                    return Ok(new ResponseModel
                    {
                        Status = new List<ResponseStatusModel>{
                            new ResponseStatusModel(ResponseStatus.badRequest)
                        }
                    });
                // SEND TO Number List
                var sendNumber = _context.NumberInfo.FirstOrDefault(a => a.Id == smsModel.SendNumber
                                        && ((a.IsShared.HasValue && a.IsShared.Value) || a.Owner == user.Id)
                                        && (!a.IsBlocked.HasValue || !a.IsBlocked.Value));
                if (sendNumber == null)
                {
                    return Ok(new ResponseModel
                    {
                        Status = new List<ResponseStatusModel>{
                            new ResponseStatusModel(ResponseStatus.unauthorized)
                        }
                    });
                }
                if (string.IsNullOrEmpty(smsModel.Body))
                {
                    var template = _context.PersonalTemplate.FirstOrDefault(a => a.Id == smsModel.TemplateId.Value && a.UserId == user.Id);
                    if (template == null)
                    {
                        return Ok(new ResponseModel
                        {
                            Status = new List<ResponseStatusModel>{
                            new ResponseStatusModel(ResponseStatus.badRequest)
                        }
                        });
                    }
                    smsModel.Body = template.Body;
                }
                var guid = TaskHelper.AddTask();

                Task.Factory.StartNew(async () =>
                {
                    if (smsModel.Numbers != null && smsModel.Numbers.Count > 0)
                    {
                        var rectIds = await SmsService.sendSmsToNumbers(
                                        sendNumber.Username,
                                        sendNumber.Password,
                                        sendNumber.Number,
                                        smsModel.Numbers,
                                        smsModel.Body,
                                        smsModel.Header,
                                        guid,
                                        user);
                        return;
                    }
                    else if (smsModel.GroupIds != null && smsModel.GroupIds.Count > 0)
                    {
                        var rectIds = await SmsService.sendSmsToGroups(
                                        sendNumber.Username,
                                        sendNumber.Password,
                                        sendNumber.Number,
                                        smsModel.GroupIds,
                                        smsModel.Body,
                                        smsModel.Header,
                                        guid,
                                        user);
                        return;
                    }
                    else
                    {
                        var taskRes = new TaskResultModel();
                        taskRes.Status.Add(new ResponseStatusModel(ResponseStatus.noNumberOrGroup));
                        taskRes.Header = "فرآیند ارسال پیام به لیست شماره با عنوان \'" + smsModel.Header + "\'";
                        TaskHelper.SetResult(guid, taskRes);
                        _context.TaskInfo.Add(new TaskInfo
                        {
                            Guid = guid.ToString(),
                            Message = taskRes.Status[0].Message,
                            Status = (short)taskRes.Status[0].Status,
                            Percent = 100,
                            UserId = user.Id
                        });
                        TaskHelper.RemoveTask(guid);
                        _context.SaveChanges();
                    }
                    return;
                });
                ///////////////////////////
                return Ok(new ResponseModel
                {
                    Status = new List<ResponseStatusModel>{
                        new ResponseStatusModel(ResponseStatus.ok)
                    },
                    Result = guid,
                    TotalCount = 1
                });
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
