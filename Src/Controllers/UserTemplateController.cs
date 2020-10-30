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
    public class UserTemplateController : ControllerBase
    {
        private readonly IWebHostEnvironment _hostingEnvironment;
        private SmsPanelDbContext _context;
        private AppAuth _appAuth;
        private AppPath _appPath;
        public UserTemplateController(SmsPanelDbContext context,
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
                var templates = _context.PersonalTemplate.Where(a => a.UserId == user.Id);
                if (!string.IsNullOrEmpty(qp.Filter))
                { // اعمال فیلتر سرچ شده
                    qp.Filter = qp.Filter.ToLower().Trim();
                    templates = templates.Where(
                                    a => a.Name.ToLower().Contains(qp.Filter) ||
                                        a.Body.ToLower().Contains(qp.Filter)
                                    );
                }
                if (!string.IsNullOrEmpty(qp.SortField) && qp.SortOrder.ToLower() == "asc") // اعمال ترتیب افزایشی
                    templates = templates.OrderByStr(qp.SortField);
                if (!string.IsNullOrEmpty(qp.SortField) && qp.SortOrder.ToLower() == "desc")// اعمال ترتیب کاهشی
                    templates = templates.OrderByStrDescending(qp.SortField);
                var TotalCount = templates.Count();
                var skip = (qp.PageNumber - 1) * qp.PageSize;
                if (TotalCount > qp.PageSize)
                    templates = templates.Skip(skip).Take(qp.PageSize);
                var templatesList = templates.Select(a => a.ToModel()).ToList();
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
                    Result = templatesList,
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
                var user = _context.VwContact.FirstOrDefault(a => a.Username == username);
                if (user == null)
                    return Unauthorized();
                var template = _context.PersonalTemplate.FirstOrDefault(a => a.Id == id &&
                                                    a.UserId == user.Id); // TODO Get result for permissions
                if (template == null)
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
                    Result = template,
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
        public ActionResult Post([FromBody]TemplateModel templateModel)
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
                if (templateModel == null ||
                string.IsNullOrEmpty(templateModel.Body) ||
                string.IsNullOrEmpty(templateModel.Title))
                    return Ok(new ResponseModel
                    {
                        Status = new List<ResponseStatusModel>{
                            new ResponseStatusModel(ResponseStatus.badRequest)
                        }
                    });
                var res = new PersonalTemplate();
                res = new PersonalTemplate()
                {
                    Name = templateModel.Title,
                    Body = templateModel.Body,
                    UserId = user.Id
                };
                _context.PersonalTemplate.Add(res);
                _context.SaveChanges();
                return Ok(new ResponseModel
                {
                    Status = new List<ResponseStatusModel>{
                        new ResponseStatusModel(ResponseStatus.ok)
                    },
                    Result = res.ToModel(),
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
        public ActionResult Put([FromBody]TemplateModel templateModel)
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
                if (templateModel == null ||
                string.IsNullOrEmpty(templateModel.Body) ||
                string.IsNullOrEmpty(templateModel.Title))
                    return Ok(new ResponseModel
                    {
                        Status = new List<ResponseStatusModel>{
                            new ResponseStatusModel(ResponseStatus.badRequest)
                        }
                    });
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

                var res = _context.PersonalTemplate.FirstOrDefault(a => a.Id == templateModel.Id
                                                        && (a.UserId == templateModel.UserId || hasAdminPermission));
                if (res == null)
                    return Ok(new ResponseModel
                    {
                        Status = new List<ResponseStatusModel>{
                            new ResponseStatusModel(ResponseStatus.unauthorized)
                        }
                    });
                res.Name = templateModel.Title;
                res.Body = templateModel.Body;
                _context.PersonalTemplate.Update(res);
                _context.SaveChanges();
                return Ok(new ResponseModel
                {
                    Status = new List<ResponseStatusModel>{
                        new ResponseStatusModel(ResponseStatus.ok)
                    },
                    Result = res.ToModel(),
                    TotalCount = 1
                });
            }
            catch
            {
                return BadRequest();
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

                var template = _context.PersonalTemplate.FirstOrDefault(a => a.Id == id &&
                                         (a.UserId == user.Id || hasAdminPermission));
                if (template == null)
                {
                    return Ok(new ResponseModel
                    {
                        Status = new List<ResponseStatusModel>{
                               new ResponseStatusModel(ResponseStatus.unauthorized)
                           }
                    });
                }
                _context.PersonalTemplate.Remove(template);
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
