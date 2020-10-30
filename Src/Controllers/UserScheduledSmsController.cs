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
    public class UserScheduledSmsController : ControllerBase
    {
        private readonly IWebHostEnvironment _hostingEnvironment;
        private SmsPanelDbContext _context;
        private AppAuth _appAuth;
        private AppPath _appPath;
        public UserScheduledSmsController(SmsPanelDbContext context,
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
                if (user != null)
                {
                    var ssi = _context.VwScheduleSmsInfo.Where(a => a.UserId == user.Id || hasAdminPermission);
                    if (!string.IsNullOrEmpty(qp.Filter))
                    { // اعمال فیلتر سرچ شده
                        qp.Filter = qp.Filter.ToLower().Trim();
                        ssi = ssi.Where(
                                        a => a.Name.ToLower().Contains(qp.Filter) ||
                                            a.Code.ToString().ToLower().Contains(qp.Filter)
                                        );
                    }
                    if (!string.IsNullOrEmpty(qp.SortField) && qp.SortOrder.ToLower() == "asc") // اعمال ترتیب افزایشی
                        ssi = ssi.OrderByStr(qp.SortField);
                    if (!string.IsNullOrEmpty(qp.SortField) && qp.SortOrder.ToLower() == "desc")// اعمال ترتیب کاهشی
                        ssi = ssi.OrderByStrDescending(qp.SortField);
                    var TotalCount = ssi.Count();
                    var skip = (qp.PageNumber - 1) * qp.PageSize;
                    if (TotalCount > qp.PageSize)
                        ssi = ssi.Skip(skip).Take(qp.PageSize);
                    var ssiList = ssi.Select(a => a.ToModel()).ToList();
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
                        Result = ssiList,
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
                return Unauthorized();
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPost]
        [Authorize]
        public ActionResult Post([FromBody]ScheduleSmsInfoModel model)
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
                if (model == null || model.Template == null || model.Template.Id == -1 ||
                string.IsNullOrEmpty(model.Name) || model.Number == null || model.Number.Id == -1)
                    return Ok(new ResponseModel
                    {
                        Status = new List<ResponseStatusModel>{
                            new ResponseStatusModel(ResponseStatus.badRequest)
                        }
                    });
                if (_context.VwScheduleSmsInfo.Any(a => a.Code == model.Code))
                    return Ok(new ResponseModel
                    {
                        Status = new List<ResponseStatusModel>{
                            new ResponseStatusModel(ResponseStatus.ssiCodeExist)
                        }
                    });
                var ssi = new ScheduleSmsInfo
                {
                    AddedDay = model.AddedDay,
                    AddedMonth = model.AddedMonth,
                    AddedYear = model.AddedYear,
                    Code = model.Code,
                    Name = model.Name,
                    Status = 1,
                    UserId = user.Id,
                    CreateDate = DateTime.UtcNow,
                    TemplateId = model.Template.Id,
                    NumberId = model.Number.Id
                };
                _context.ScheduleSmsInfo.Add(ssi);
                _context.SaveChanges();
                var result = _context.VwScheduleSmsInfo.FirstOrDefault(a => a.Id == ssi.Id);
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
        public ActionResult Put([FromBody]ScheduleSmsInfoModel model)
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

                if (model == null || model.Template == null || model.Template.Id == -1 ||
                string.IsNullOrEmpty(model.Name) || model.Number == null || model.Number.Id == -1)
                    return Ok(new ResponseModel
                    {
                        Status = new List<ResponseStatusModel>{
                            new ResponseStatusModel(ResponseStatus.badRequest)
                        }
                    });
                var res = _context.ScheduleSmsInfo.FirstOrDefault(a => a.Id == model.Id &&
                                                (a.UserId == user.Id || hasAdminPermission));
                if (res == null)
                    return Ok(new ResponseModel
                    {
                        Status = new List<ResponseStatusModel>{
                            new ResponseStatusModel(ResponseStatus.unauthorized)
                        }
                    });
                res.Name = model.Name;
                res.AddedYear = model.AddedYear;
                res.AddedMonth = model.AddedMonth;
                res.AddedDay = model.AddedDay;
                res.Code = model.Code;
                res.Status = model.Status;
                res.TemplateId = model.Template.Id;
                res.NumberId = model.Number.Id;
                _context.ScheduleSmsInfo.Update(res);
                _context.SaveChanges();
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
                var ssi = _context.ScheduleSmsInfo.FirstOrDefault(a => a.Id == id &&
                                                (a.UserId == user.Id || hasAdminPermission));
                if (ssi == null)
                {
                    return Ok(new ResponseModel
                    {
                        Status = new List<ResponseStatusModel>{
                               new ResponseStatusModel(ResponseStatus.unauthorized)
                           }
                    });
                }
                using (var transaction = _context.Database.BeginTransaction())
                {
                    var ssd = _context.ScheduleSmsDetail.Where(a => a.ParentId == id);
                    _context.ScheduleSmsDetail.RemoveRange(ssd);
                    _context.ScheduleSmsInfo.Remove(ssi);
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
