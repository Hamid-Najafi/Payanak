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
    public class AdminRoleController : ControllerBase
    {
        private readonly IWebHostEnvironment _hostingEnvironment;
        private SmsPanelDbContext _context;
        private AppAuth _appAuth;
        private AppPath _appPath;
        public AdminRoleController(SmsPanelDbContext context,
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
        public IActionResult Get([FromQuery] string queryParam)
        {
            try
            {
                if (queryParam != null)
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
                    if (!hasAdminPermission)
                    {
                        return Ok(
                        new ResponseModel
                        {
                            Status = new List<ResponseStatusModel>{
                                new ResponseStatusModel(ResponseStatus.unauthorized)
                                }
                        });
                    }
                    var roles = _context.Roles.Where(a => true);
                    var TotalCount = 0;
                    if (qp != null)
                    {
                        if (!string.IsNullOrEmpty(qp.Filter))
                        { // اعمال فیلتر سرچ شده
                            qp.Filter = qp.Filter.ToLower().Trim();
                            roles = roles.Where(
                                            a => a.Title.ToLower().Contains(qp.Filter) ||
                                            a.Name.ToLower().Contains(qp.Filter)
                                            );
                        }
                        if (!string.IsNullOrEmpty(qp.SortField) && qp.SortOrder.ToLower() == "asc") // اعمال ترتیب افزایشی
                            roles = roles.OrderByStr(qp.SortField);
                        if (!string.IsNullOrEmpty(qp.SortField) && qp.SortOrder.ToLower() == "desc")// اعمال ترتیب کاهشی
                            roles = roles.OrderByStrDescending(qp.SortField);
                        TotalCount = roles.Count();
                        var skip = (qp.PageNumber - 1) * qp.PageSize;
                        if (TotalCount > qp.PageSize)
                            roles = roles.Skip(skip).Take(qp.PageSize);
                    }
                    roles = roles.Include(a => a.RolePermissions);
                    var rolesList = roles.Select(a => a.ToModel()).ToList();
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
                        Result = rolesList,
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
                else
                {
                    var roles = _context.Roles.Where(a => true).Include(a => a.RolePermissions);
                    var TotalCount = roles.Count();
                    var rolesList = roles.Select(a => a.ToModel()).ToList();
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
                        Result = rolesList,
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
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPost]
        [Authorize]
        public ActionResult Post([FromBody]RoleModel roleModel)
        {
            try
            {
                var usernameClaim = User.Claims.FirstOrDefault(a => a.Type == "username");
                if (usernameClaim == null)
                    return Unauthorized();
                var username = usernameClaim.Value;
                var user = _context.AccountInfo.FirstOrDefault(a => a.Username == username);
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
                if (!hasAdminPermission)
                {
                    return Ok(
                    new ResponseModel
                    {
                        Status = new List<ResponseStatusModel>{
                                new ResponseStatusModel(ResponseStatus.unauthorized)
                            }
                    });
                }

                if (roleModel == null ||
                string.IsNullOrEmpty(roleModel.Name) ||
                string.IsNullOrEmpty(roleModel.Title))

                    return Ok(new ResponseModel
                    {
                        Status = new List<ResponseStatusModel>{
                            new ResponseStatusModel(ResponseStatus.badRequest)
                        }
                    });
                var res = new Roles();
                using (var _transaction = _context.Database.BeginTransaction())
                {
                    res = new Roles()
                    {
                        Name = roleModel.Name,
                        Title = roleModel.Title,
                        CanDelete = true,
                        CanEdit = true,
                    };
                    _context.Roles.Add(res);
                    _context.SaveChanges();
                    if (roleModel.Permissions != null)
                    {
                        foreach (var item in roleModel.Permissions)
                        {
                            _context.RolePermissions.Add(new RolePermissions
                            {
                                PermissionId = item,
                                RoleId = res.Id
                            });
                        }
                    }
                    _context.SaveChanges();
                    _transaction.Commit();
                }
                return Ok(new ResponseModel
                {
                    Status = new List<ResponseStatusModel>{
                        new ResponseStatusModel(ResponseStatus.ok)
                    },
                    Result = res.ToModel(),
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
        public ActionResult Put([FromBody]RoleModel roleModel)
        {
            try
            {
                var usernameClaim = User.Claims.FirstOrDefault(a => a.Type == "username");
                if (usernameClaim == null)
                    return Unauthorized();
                var username = usernameClaim.Value;
                var user = _context.AccountInfo.FirstOrDefault(a => a.Username == username);
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
                if (!hasAdminPermission)
                {
                    return Ok(
                    new ResponseModel
                    {
                        Status = new List<ResponseStatusModel>{
                                new ResponseStatusModel(ResponseStatus.unauthorized)
                            }
                    });
                }
                if (roleModel == null ||
                string.IsNullOrEmpty(roleModel.Name) ||
                string.IsNullOrEmpty(roleModel.Title))

                    return Ok(new ResponseModel
                    {
                        Status = new List<ResponseStatusModel>{
                            new ResponseStatusModel(ResponseStatus.badRequest)
                        }
                    });
                var res = _context.Roles.FirstOrDefault(a => a.Id == roleModel.Id);
                if (res == null || (res.CanEdit.HasValue && !res.CanEdit.Value))
                    return Ok(new ResponseModel
                    {
                        Status = new List<ResponseStatusModel>{
                            new ResponseStatusModel(ResponseStatus.cantEdit)
                        }
                    });
                using (var _transaction = _context.Database.BeginTransaction())
                {
                    res.Name = roleModel.Name;
                    res.Title = roleModel.Title;
                    _context.Roles.Update(res);
                    var perms = _context.RolePermissions.Where(a => a.RoleId == res.Id);
                    _context.RolePermissions.RemoveRange(perms);
                    _context.SaveChanges();
                    if (roleModel.Permissions != null)
                    {
                        foreach (var item in roleModel.Permissions.Distinct())
                        {
                            _context.RolePermissions.Add(new RolePermissions
                            {
                                PermissionId = item,
                                RoleId = res.Id
                            });
                        }
                    }
                    _context.SaveChanges();
                    _transaction.Commit();
                }
                return Ok(new ResponseModel
                {
                    Status = new List<ResponseStatusModel>{
                        new ResponseStatusModel(ResponseStatus.ok)
                    },
                    Result = res.ToModel(),
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
                var user = _context.AccountInfo.FirstOrDefault(a => a.Username == username);
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
                if (!hasAdminPermission)
                {
                    return Ok(
                    new ResponseModel
                    {
                        Status = new List<ResponseStatusModel>{
                                new ResponseStatusModel(ResponseStatus.unauthorized)
                            }
                    });
                }
                using (var transaction = _context.Database.BeginTransaction())
                {
                    var role = _context.Roles.FirstOrDefault(a => a.Id == id);
                    if (role == null || (role.CanDelete.HasValue && !role.CanDelete.Value))
                    {
                        return Ok(new ResponseModel
                        {
                            Status = new List<ResponseStatusModel>{
                               new ResponseStatusModel(ResponseStatus.cantDelete)
                           }
                        });
                    }
                    var rolePermissions = _context.RolePermissions.Where(a => a.RoleId == id);
                    _context.RolePermissions.RemoveRange(rolePermissions);
                    _context.Roles.Remove(role);
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
        public string getImagePath(string src)
        {
            var time = DateTime.UtcNow;
            var guid = Guid.NewGuid();
            if (src.Substring(0, 20).ToLower().StartsWith("data:image")
                            || src.Length > 1000)// باید تصویر ذخیره شود
            {
                var img = ImageHelper.LoadImage(src);
                var tmpIndex = src.IndexOf(';');
                var extension = src.Substring(11, tmpIndex - 11).ToLower();
                var folder = "Images/" + String.Format("{0:MM_dd_yyyy}", time);
                if (!System.IO.Directory.Exists(_hostingEnvironment.ContentRootPath + "/" + folder))
                    System.IO.Directory.CreateDirectory(_hostingEnvironment.ContentRootPath + "/" + folder);
                var path = folder + "/" + guid.ToString() + '.' + extension;
                ImageHelper.SaveImage(img, _hostingEnvironment.ContentRootPath + "/" + path, extension);
                return "~/" + path;
            }
            return src;
        }
        [Route("[action]/{id}")]
        [HttpPost("{id}")]
        [Authorize]
        public ActionResult CreateGroupForUser(long id, [FromBody]GroupModel groupModel)
        {
            try
            {
                // GroupModel groupModel = data.groupModel;
                // long id = data.id;
                var usernameClaim = User.Claims.FirstOrDefault(a => a.Type == "username");
                if (usernameClaim == null)
                    return Unauthorized();
                var username = usernameClaim.Value;
                var user = _context.AccountInfo.FirstOrDefault(a => a.Username == username);
                if (user != null)
                {
                    if (groupModel == null ||
                    string.IsNullOrEmpty(groupModel.Name) ||
                    string.IsNullOrEmpty(groupModel.Title) ||
                    id == 0)

                        return Ok(new ResponseModel
                        {
                            Status = new List<ResponseStatusModel>{
                            new ResponseStatusModel(ResponseStatus.badRequest)
                        }
                        });
                    var res = new Group();
                    using (var _transaction = _context.Database.BeginTransaction())
                    {
                        res = new Group()
                        {
                            Name = groupModel.Name,
                            Title = groupModel.Title,
                            Descriptions = groupModel.Descriptions,
                            Status = 1,
                            Owner = id,
                            Picture = string.IsNullOrEmpty(groupModel.Picture) ?
                            ("assets/img/portrait/avatars/avatar-08.png") :
                            (getImagePath(groupModel.Picture)),
                        };
                        _context.Group.Add(res);
                        _context.SaveChanges();
                        _transaction.Commit();
                    }
                    return Ok(new ResponseModel
                    {
                        Status = new List<ResponseStatusModel>{
                        new ResponseStatusModel(ResponseStatus.ok)
                    },
                        Result = res.ToModel(),
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
    }
}
