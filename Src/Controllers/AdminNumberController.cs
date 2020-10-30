using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Backend.ClientModels;
using Backend.Helpers;
using Backend.Models;
using DeviceDetectorNET;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Backend.Controllers {
    [ApiController]
    [Route ("api/[controller]")]
    [EnableCors ("AllowOrigin")]
    public class AdminNumberController : ControllerBase {
        private readonly IWebHostEnvironment _hostingEnvironment;
        private SmsPanelDbContext _context;
        private AppAuth _appAuth;
        private AppPath _appPath;
        public AdminNumberController (SmsPanelDbContext context,
            IOptions<AppAuth> appAuth,
            IOptions<AppPath> appPath,
            IWebHostEnvironment hostingEnvironment) {
            _context = context;
            _appAuth = appAuth.Value;
            _appPath = appPath.Value;
            _hostingEnvironment = hostingEnvironment;
        }

        [HttpGet]
        [Authorize]
        public IActionResult Get ([FromQuery] string queryParam) {
            try {
                var qp = Newtonsoft.Json.JsonConvert.DeserializeObject<QueryParamModel> (queryParam);
                var usernameClaim = User.Claims.FirstOrDefault (a => a.Type == "username");
                if (usernameClaim == null)
                    return Unauthorized ();
                var username = usernameClaim.Value;
                var user = _context.VwContact.FirstOrDefault (a => a.Username == username);
                if (user == null) {
                    return Unauthorized ();
                }
                var userAcc = _context.AccountInfo.Where (a => a.Username == username)
                    .Include (a => a.UserRoles)
                    .ThenInclude (a => a.Role)
                    .ThenInclude (a => a.RolePermissions)
                    .ThenInclude (a => a.Permission)
                    .FirstOrDefault ();
                var userPermissions = userAcc.UserRoles
                    .Select (a => a.Role.RolePermissions
                        .Select (b => b.Permission))
                    .SelectMany (a => a)
                    .ToList ();
                var hasAdminPermission = AuthService.HasPermission (userPermissions, AppPermissions.UserManagementRead);
                if (!hasAdminPermission) {
                    return Ok (
                        new ResponseModel {
                            Status = new List<ResponseStatusModel> {
                                new ResponseStatusModel (ResponseStatus.unauthorized)
                            }
                        });
                }
                var numbers = _context.NumberInfo.Where (a => true);
                if (!string.IsNullOrEmpty (qp.Filter)) { // اعمال فیلتر سرچ شده
                    qp.Filter = qp.Filter.ToLower ().Trim ();
                    numbers = numbers.Where (
                        a => a.Number.ToLower ().Contains (qp.Filter)
                    );
                }
                if (!string.IsNullOrEmpty (qp.SortField) && qp.SortOrder.ToLower () == "asc") // اعمال ترتیب افزایشی
                    numbers = numbers.OrderByStr (qp.SortField);
                if (!string.IsNullOrEmpty (qp.SortField) && qp.SortOrder.ToLower () == "desc") // اعمال ترتیب کاهشی
                    numbers = numbers.OrderByStrDescending (qp.SortField);
                var TotalCount = numbers.Count ();
                var skip = (qp.PageNumber - 1) * qp.PageSize;
                if (TotalCount > qp.PageSize)
                    numbers = numbers.Skip (skip).Take (qp.PageSize);
                var numberIds = numbers.Select (a => a.Id).ToList ();
                var numbersList = _context.VwNumber.Where (a => numberIds.Contains (a.Id.Value))
                    .Select (a => a.ToModel ())
                    .ToList ();
                var options = new JsonSerializerOptions {
                    MaxDepth = 50,
                    WriteIndented = true
                };
                var res = Newtonsoft.Json.JsonConvert.SerializeObject (new ResponseModel {
                    Status = new List<ResponseStatusModel> {
                            new ResponseStatusModel (ResponseStatus.ok)
                        },
                        Result = numbersList,
                        TotalCount = TotalCount
                }, new JsonSerializerSettings () {
                    PreserveReferencesHandling = PreserveReferencesHandling.Objects,
                        Formatting = Formatting.Indented,
                        ContractResolver = new CamelCasePropertyNamesContractResolver ()
                });
                return Ok (
                    res
                );
            } catch {
                return BadRequest ();
            }
        }

        [Route ("[action]")]
        [HttpGet]
        [Authorize]
        public IActionResult GetAllUsers () {
            try {
                var usernameClaim = User.Claims.FirstOrDefault (a => a.Type == "username");
                if (usernameClaim == null)
                    return Unauthorized ();
                var username = usernameClaim.Value;
                var user = _context.AccountInfo.FirstOrDefault (a => a.Username == username);
                if (user == null)
                    return Unauthorized ();
                var contactAcc = _context.AccountInfo.Where (a => a.UserRoles.Any (b => b.Role.RolePermissions.Any (c => c.PermissionId == 11))).Select (a => a.Id).ToList ();
                var contacts = _context.VwContact.Where (a => contactAcc.Contains (a.Id.Value)).Select (a => a.ToModel ()).ToList (); // TODO get for permissions                // TODO get for permissions

                var options = new JsonSerializerOptions {
                    MaxDepth = 50,
                    WriteIndented = true
                };
                var res = Newtonsoft.Json.JsonConvert.SerializeObject (new ResponseModel {
                    Status = new List<ResponseStatusModel> {
                            new ResponseStatusModel (ResponseStatus.ok)
                        },
                        Result = contacts,
                        TotalCount = contacts.Count
                }, new JsonSerializerSettings () {
                    PreserveReferencesHandling = PreserveReferencesHandling.Objects,
                        Formatting = Formatting.Indented,
                        ContractResolver = new CamelCasePropertyNamesContractResolver ()
                });
                return Ok (
                    res
                );
            } catch {
                return BadRequest ();
            }
        }

        [HttpGet ("{id}")]
        [Authorize]
        public IActionResult Get (int id) {
            try {
                var usernameClaim = User.Claims.FirstOrDefault (a => a.Type == "username");
                if (usernameClaim == null)
                    return Unauthorized ();
                var username = usernameClaim.Value;
                var user = _context.AccountInfo.FirstOrDefault (a => a.Username == username);
                if (user == null)
                    return Unauthorized ();
                var number = _context.VwNumber.FirstOrDefault (a => a.Id == id); // TODO Get result for permissions
                if (number == null) {
                    return Ok (
                        new ResponseModel {
                            Status = new List<ResponseStatusModel> {
                                new ResponseStatusModel (ResponseStatus.unauthorized)
                            }
                        });
                }
                var res = Newtonsoft.Json.JsonConvert.SerializeObject (new ResponseModel {
                    Status = new List<ResponseStatusModel> {
                            new ResponseStatusModel (ResponseStatus.ok)
                        },
                        Result = number,
                        TotalCount = 1
                }, new JsonSerializerSettings () {
                    PreserveReferencesHandling = PreserveReferencesHandling.Objects,
                        Formatting = Formatting.Indented,
                        ContractResolver = new CamelCasePropertyNamesContractResolver ()
                });
                return Ok (
                    res
                );
            } catch {
                return BadRequest ();
            }
        }

        [HttpPost]
        [Authorize]
        public ActionResult Post ([FromBody] NumberModel numberModel) {
            try {
                var usernameClaim = User.Claims.FirstOrDefault (a => a.Type == "username");
                if (usernameClaim == null)
                    return Unauthorized ();
                var username = usernameClaim.Value;
                var user = _context.VwContact.FirstOrDefault (a => a.Username == username);
                if (user == null) {
                    return Unauthorized ();
                }
                var userAcc = _context.AccountInfo.Where (a => a.Username == username)
                    .Include (a => a.UserRoles)
                    .ThenInclude (a => a.Role)
                    .ThenInclude (a => a.RolePermissions)
                    .ThenInclude (a => a.Permission)
                    .FirstOrDefault ();
                var userPermissions = userAcc.UserRoles
                    .Select (a => a.Role.RolePermissions
                        .Select (b => b.Permission))
                    .SelectMany (a => a)
                    .ToList ();
                var hasAdminPermission = AuthService.HasPermission (userPermissions, AppPermissions.UserManagementWrite);
                if (!hasAdminPermission) {
                    return Ok (
                        new ResponseModel {
                            Status = new List<ResponseStatusModel> {
                                new ResponseStatusModel (ResponseStatus.unauthorized)
                            }
                        });
                }
                if (numberModel == null ||
                    string.IsNullOrEmpty (numberModel.Number) ||
                    string.IsNullOrEmpty (numberModel.Username) ||
                    string.IsNullOrEmpty (numberModel.Password))
                    return Ok (new ResponseModel {
                        Status = new List<ResponseStatusModel> {
                            new ResponseStatusModel (ResponseStatus.badRequest)
                        }
                    });
                var res = new NumberInfo ();
                var isShared = !numberModel.Owner.HasValue || numberModel.Owner.Value == -1;
                using (var _transaction = _context.Database.BeginTransaction ()) {
                    res = new NumberInfo () {
                    IsBlocked = false,
                    CreateDate = DateTime.UtcNow,
                    IsShared = isShared || numberModel.IsShared,
                    Number = numberModel.Number,
                    Owner = numberModel.Owner == -1 ? user.Id : numberModel.Owner,
                    Password = numberModel.Password,
                    Type = (numberModel.Type >= 0 && numberModel.Type <= 1) ? numberModel.Type : (short) 1,
                    Username = numberModel.Username
                    };
                    _context.NumberInfo.Add (res);
                    _context.SaveChanges ();
                    _transaction.Commit ();
                }
                return Ok (new ResponseModel {
                    Status = new List<ResponseStatusModel> {
                            new ResponseStatusModel (ResponseStatus.ok)
                        },
                        Result = res.ToModel (),
                        TotalCount = 1
                });
            } catch (Exception ex) {
                return BadRequest (ex.Message);
            }
        }

        [HttpPut]
        [Authorize]
        public ActionResult Put ([FromBody] NumberModel numberModel) {
            try {
                var usernameClaim = User.Claims.FirstOrDefault (a => a.Type == "username");
                if (usernameClaim == null)
                    return Unauthorized ();
                var username = usernameClaim.Value;
                var user = _context.VwContact.FirstOrDefault (a => a.Username == username);
                if (user == null) {
                    return Unauthorized ();
                }
                var userAcc = _context.AccountInfo.Where (a => a.Username == username)
                    .Include (a => a.UserRoles)
                    .ThenInclude (a => a.Role)
                    .ThenInclude (a => a.RolePermissions)
                    .ThenInclude (a => a.Permission)
                    .FirstOrDefault ();
                var userPermissions = userAcc.UserRoles
                    .Select (a => a.Role.RolePermissions
                        .Select (b => b.Permission))
                    .SelectMany (a => a)
                    .ToList ();
                var hasAdminPermission = AuthService.HasPermission (userPermissions, AppPermissions.UserManagementWrite);
                if (!hasAdminPermission) {
                    return Ok (
                        new ResponseModel {
                            Status = new List<ResponseStatusModel> {
                                new ResponseStatusModel (ResponseStatus.unauthorized)
                            }
                        });
                }
                if (numberModel == null)
                    return Ok (new ResponseModel {
                        Status = new List<ResponseStatusModel> {
                            new ResponseStatusModel (ResponseStatus.badRequest)
                        }
                    });
                var res = _context.NumberInfo.FirstOrDefault (a => a.Id == numberModel.Id);
                if (res == null)
                    return Ok (new ResponseModel {
                        Status = new List<ResponseStatusModel> {
                            new ResponseStatusModel (ResponseStatus.badRequest)
                        }
                    });
                var isShared = !numberModel.Owner.HasValue || numberModel.Owner.Value == -1;
                using (var _transaction = _context.Database.BeginTransaction ()) {
                    res.IsBlocked = numberModel.IsBlocked;
                    res.Password = string.IsNullOrEmpty (numberModel.Password) ? res.Password : numberModel.Password;
                    res.Username = numberModel.Username;
                    res.Owner = numberModel.Owner != -1 ? numberModel.Owner : null;
                    res.IsShared = isShared || numberModel.IsShared;
                    _context.NumberInfo.Update (res);
                    _context.SaveChanges ();
                    _transaction.Commit ();
                }
                return Ok (new ResponseModel {
                    Status = new List<ResponseStatusModel> {
                            new ResponseStatusModel (ResponseStatus.ok)
                        },
                        Result = res.ToModel (),
                        TotalCount = 1
                });
            } catch {
                return BadRequest ();
            }
        }

        [HttpDelete ("{id}")]
        [Authorize]
        public IActionResult Delete (long id) {
            try {
                var usernameClaim = User.Claims.FirstOrDefault (a => a.Type == "username");
                if (usernameClaim == null)
                    return Unauthorized ();
                var username = usernameClaim.Value;
                var user = _context.AccountInfo.FirstOrDefault (a => a.Username == username);
                if (user == null) {
                    return Unauthorized ();
                }
                var userAcc = _context.AccountInfo.Where (a => a.Username == username)
                    .Include (a => a.UserRoles)
                    .ThenInclude (a => a.Role)
                    .ThenInclude (a => a.RolePermissions)
                    .ThenInclude (a => a.Permission)
                    .FirstOrDefault ();
                var userPermissions = userAcc.UserRoles
                    .Select (a => a.Role.RolePermissions
                        .Select (b => b.Permission))
                    .SelectMany (a => a)
                    .ToList ();
                var hasAdminPermission = AuthService.HasPermission (userPermissions, AppPermissions.UserManagementDelete);
                if (!hasAdminPermission) {
                    return Ok (
                        new ResponseModel {
                            Status = new List<ResponseStatusModel> {
                                new ResponseStatusModel (ResponseStatus.unauthorized)
                            }
                        });
                }
                using (var transaction = _context.Database.BeginTransaction ()) {
                    var numberInfo = _context.NumberInfo.FirstOrDefault (a => a.Id == id);
                    if (numberInfo == null) {
                        return Ok (new ResponseModel {
                            Status = new List<ResponseStatusModel> {
                                new ResponseStatusModel (ResponseStatus.badRequest)
                            }
                        });
                    }
                    _context.NumberInfo.Remove (numberInfo);
                    _context.SaveChanges ();
                    transaction.Commit ();
                }
                return Ok (new ResponseModel {
                    Status = new List<ResponseStatusModel> {
                        new ResponseStatusModel (ResponseStatus.ok)
                    }
                });
            } catch {
                return BadRequest ();
            }

        }
        public string getImagePath (string src) {
            var time = DateTime.UtcNow;
            var guid = Guid.NewGuid ();
            if (src.Substring (0, 20).ToLower ().StartsWith ("data:image") ||
                src.Length > 1000) // باید تصویر ذخیره شود
            {
                var img = ImageHelper.LoadImage (src);
                var tmpIndex = src.IndexOf (';');
                var extension = src.Substring (11, tmpIndex - 11).ToLower ();
                var folder = "Images/" + String.Format ("{0:MM_dd_yyyy}", time);
                if (!System.IO.Directory.Exists (_hostingEnvironment.ContentRootPath + "/" + folder))
                    System.IO.Directory.CreateDirectory (_hostingEnvironment.ContentRootPath + "/" + folder);
                var path = folder + "/" + guid.ToString () + '.' + extension;
                ImageHelper.SaveImage (img, _hostingEnvironment.ContentRootPath + "/" + path, extension);
                return "~/" + path;
            }
            return src;
        }
    }
}