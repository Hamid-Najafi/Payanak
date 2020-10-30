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
    public class AdminBusinessCardController : ControllerBase {
        private readonly IWebHostEnvironment _hostingEnvironment;
        private SmsPanelDbContext _context;
        private AppAuth _appAuth;
        private AppPath _appPath;
        public AdminBusinessCardController (SmsPanelDbContext context,
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
                var businessCards = _context.VwBusinessCard.Where (a => true);
                if (!string.IsNullOrEmpty (qp.Filter)) { // اعمال فیلتر سرچ شده
                    qp.Filter = qp.Filter.ToLower ().Trim ();
                    businessCards = businessCards.Where (
                        a => a.NumberSend.ToLower ().Contains (qp.Filter) ||
                        a.GroupName.ToLower ().Contains (qp.Filter) ||
                        a.GroupTitle.ToLower ().Contains (qp.Filter) ||
                        a.TemplateName.ToLower ().Contains (qp.Filter) ||
                        a.Key.ToLower ().Contains (qp.Filter) ||
                        a.FirstName.ToLower ().Contains (qp.Filter) ||
                        a.LastName.ToLower ().Contains (qp.Filter) ||
                        a.Username.ToLower ().Contains (qp.Filter)
                    );
                }
                if (!string.IsNullOrEmpty (qp.SortField) && qp.SortOrder.ToLower () == "asc") // اعمال ترتیب افزایشی
                    businessCards = businessCards.OrderByStr (qp.SortField);
                if (!string.IsNullOrEmpty (qp.SortField) && qp.SortOrder.ToLower () == "desc") // اعمال ترتیب کاهشی
                    businessCards = businessCards.OrderByStrDescending (qp.SortField);
                var TotalCount = businessCards.Count ();
                var skip = (qp.PageNumber - 1) * qp.PageSize;
                if (TotalCount > qp.PageSize)
                    businessCards = businessCards.Skip (skip).Take (qp.PageSize);
                var businessCardsList = businessCards.Select (a => a.ToModel ()).ToList ();
                var options = new JsonSerializerOptions {
                    MaxDepth = 50,
                    WriteIndented = true
                };
                var res = Newtonsoft.Json.JsonConvert.SerializeObject (new ResponseModel {
                    Status = new List<ResponseStatusModel> {
                            new ResponseStatusModel (ResponseStatus.ok)
                        },
                        Result = businessCardsList,
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
                var bc = _context.VwBusinessCard.FirstOrDefault (a => a.Id == id &&
                    (a.UserId == user.Id)); // TODO Get result for permissions
                if (bc == null) {
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
                        Result = bc.ToModel (),
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
        public ActionResult Post ([FromBody] BusinessCardModel model) {
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
                var hasAdminPermission = AuthService.HasPermission (userPermissions, AppPermissions.UserManagementWrite);
                if (!hasAdminPermission) {
                    return Ok (
                        new ResponseModel {
                            Status = new List<ResponseStatusModel> {
                                new ResponseStatusModel (ResponseStatus.unauthorized)
                            }
                        });
                }
                if (model == null ||
                    string.IsNullOrEmpty (model.Key) ||
                    model.Number == null || model.Number.Id == -1 ||
                    model.Template == null || model.Template.Id == -1 ||
                    model.User == null || model.User.Id == -1)
                    return Ok (new ResponseModel {
                        Status = new List<ResponseStatusModel> {
                            new ResponseStatusModel (ResponseStatus.badRequest)
                        }
                    });
                if (_context.BusinessCard.Any (a => a.Key == model.Key)) {
                    return Ok (new ResponseModel {
                        Status = new List<ResponseStatusModel> {
                            new ResponseStatusModel (ResponseStatus.keyExist)
                        }
                    });
                }
                var res = new BusinessCard ();
                using (var _transaction = _context.Database.BeginTransaction ()) {
                    res = new BusinessCard () {
                    CreateDate = DateTime.UtcNow,
                    GroupId = model.Group != null && model.Group.Id != -1 ?
                    model.Group.Id : (long?) null,
                    IsBlocked = false,
                    Status = 1,
                    UserId = model.User.Id,
                    NumberId = model.Number.Id,
                    TemplateId = model.Template.Id,
                    Key = model.Key.Trim (),
                    };
                    _context.BusinessCard.Add (res);
                    _context.SaveChanges ();
                    _transaction.Commit ();
                }
                var result = _context.VwBusinessCard.FirstOrDefault (a => a.Id == res.Id);
                return Ok (new ResponseModel {
                    Status = new List<ResponseStatusModel> {
                            new ResponseStatusModel (ResponseStatus.ok)
                        },
                        Result = result.ToModel (),
                        TotalCount = 1
                });
            } catch (Exception ex) {
                return BadRequest (ex.Message);
            }
        }

        [HttpPut]
        [Authorize]
        public ActionResult put ([FromBody] BusinessCardModel model) {
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
                var hasAdminPermission = AuthService.HasPermission (userPermissions, AppPermissions.UserManagementWrite);
                if (!hasAdminPermission) {
                    return Ok (
                        new ResponseModel {
                            Status = new List<ResponseStatusModel> {
                                new ResponseStatusModel (ResponseStatus.unauthorized)
                            }
                        });
                }
                if (model == null)
                    return Ok (new ResponseModel {
                        Status = new List<ResponseStatusModel> {
                            new ResponseStatusModel (ResponseStatus.badRequest)
                        }
                    });
                var res = _context.BusinessCard.FirstOrDefault (a => a.Id == model.Id);
                if (res == null) {
                    return Ok (new ResponseModel {
                        Status = new List<ResponseStatusModel> {
                            new ResponseStatusModel (ResponseStatus.badRequest)
                        }
                    });
                }
                using (var _transaction = _context.Database.BeginTransaction ()) {
                    res.IsBlocked = !res.IsBlocked;
                    _context.BusinessCard.Update (res);
                    _context.SaveChanges ();
                    _transaction.Commit ();
                }
                var panel = _context.VwBusinessCard.FirstOrDefault (a => a.Id == res.Id);
                return Ok (new ResponseModel {
                    Status = new List<ResponseStatusModel> {
                            new ResponseStatusModel (ResponseStatus.ok)
                        },
                        Result = panel.ToModel (),
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
                    var bc = _context.BusinessCard.FirstOrDefault (a => a.Id == id);
                    if (bc == null) {
                        return Ok (new ResponseModel {
                            Status = new List<ResponseStatusModel> {
                                new ResponseStatusModel (ResponseStatus.badRequest)
                            }
                        });
                    }
                    _context.BusinessCard.Remove (bc);
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

        [Route ("[action]")]
        [HttpGet]
        [Authorize]
        public IActionResult GetAllUsers () {
            try {
                var usernameClaim = User.Claims.FirstOrDefault (a => a.Type == "username");
                if (usernameClaim == null)
                    return Unauthorized ();
                var username = usernameClaim.Value;
                var user = _context.VwContact.FirstOrDefault (a => a.Username == username);
                if (user == null)
                    return Unauthorized ();
                var contactAcc = _context.AccountInfo.Where (a => a.UserRoles.Any (b => b.Role.RolePermissions.Any (c => c.PermissionId == 11))).Select (a => a.Id).ToList ();
                var contacts = _context.VwContact.Where (a => contactAcc.Contains (a.Id.Value)).Select (a => a.ToModel ()).ToList (); // TODO get for permissions
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

        [Route ("[action]/{id}")]
        [HttpGet ("{id}")]
        [Authorize]
        public IActionResult GetAllUserGroups (long id) {
            try {
                var usernameClaim = User.Claims.FirstOrDefault (a => a.Type == "username");
                if (usernameClaim == null)
                    return Unauthorized ();
                var username = usernameClaim.Value;
                var user = _context.VwContact.FirstOrDefault (a => a.Username == username);
                if (user == null)
                    return Unauthorized ();
                var groups = _context.Group.Where (a => a.Owner == id)
                    .Select (a => a.ToModel ()).ToList (); // TODO get for permissions

                var options = new JsonSerializerOptions {
                    MaxDepth = 50,
                    WriteIndented = true
                };
                var res = Newtonsoft.Json.JsonConvert.SerializeObject (new ResponseModel {
                    Status = new List<ResponseStatusModel> {
                            new ResponseStatusModel (ResponseStatus.ok)
                        },
                        Result = groups,
                        TotalCount = groups.Count
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

        [Route ("[action]/{id}")]
        [HttpGet ("{id}")]
        [Authorize]
        public IActionResult GetAllUserNumbers (long id) {
            try {
                var usernameClaim = User.Claims.FirstOrDefault (a => a.Type == "username");
                if (usernameClaim == null)
                    return Unauthorized ();
                var username = usernameClaim.Value;
                var user = _context.VwContact.FirstOrDefault (a => a.Username == username);
                if (user == null)
                    return Unauthorized ();
                var numbers = _context.NumberInfo.Where (a => (a.Owner == id || !a.IsShared.HasValue || a.IsShared.Value) &&
                        (!a.IsBlocked.HasValue || !a.IsBlocked.Value))
                    .Select (a => a.ToModel ()).ToList (); // TODO get for permissions

                var options = new JsonSerializerOptions {
                    MaxDepth = 50,
                    WriteIndented = true
                };
                var res = Newtonsoft.Json.JsonConvert.SerializeObject (new ResponseModel {
                    Status = new List<ResponseStatusModel> {
                            new ResponseStatusModel (ResponseStatus.ok)
                        },
                        Result = numbers,
                        TotalCount = numbers.Count
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

        [Route ("[action]/{id}")]
        [HttpGet ("{id}")]
        [Authorize]
        public IActionResult GetAllUserTemplates (long id) {
            try {
                var usernameClaim = User.Claims.FirstOrDefault (a => a.Type == "username");
                if (usernameClaim == null)
                    return Unauthorized ();
                var username = usernameClaim.Value;
                var user = _context.VwContact.FirstOrDefault (a => a.Username == username);
                if (user == null)
                    return Unauthorized ();
                var templates = _context.PersonalTemplate.Where (a => a.UserId == id)
                    .Select (a => a.ToModel ()).ToList (); // TODO get for permissions

                var options = new JsonSerializerOptions {
                    MaxDepth = 50,
                    WriteIndented = true
                };
                var res = Newtonsoft.Json.JsonConvert.SerializeObject (new ResponseModel {
                    Status = new List<ResponseStatusModel> {
                            new ResponseStatusModel (ResponseStatus.ok)
                        },
                        Result = templates,
                        TotalCount = templates.Count
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

        [Route ("[action]/{id}")]
        [HttpPost ("{id}")]
        [Authorize]
        public ActionResult CreateTemplateForUser (long id, [FromBody] TemplateModel templateModel) {
            try {
                var usernameClaim = User.Claims.FirstOrDefault (a => a.Type == "username");
                if (usernameClaim == null)
                    return Unauthorized ();
                var username = usernameClaim.Value;
                var user = _context.AccountInfo.FirstOrDefault (a => a.Username == username);
                if (user != null) {
                    if (templateModel == null ||
                        string.IsNullOrEmpty (templateModel.Body) ||
                        string.IsNullOrEmpty (templateModel.Title) ||
                        id == 0)

                        return Ok (new ResponseModel {
                            Status = new List<ResponseStatusModel> {
                                new ResponseStatusModel (ResponseStatus.badRequest)
                            }
                        });
                    var res = new PersonalTemplate ();
                    using (var _transaction = _context.Database.BeginTransaction ()) {
                        res = new PersonalTemplate () {
                        Name = templateModel.Title,
                        Body = templateModel.Body,
                        UserId = id

                        };
                        _context.PersonalTemplate.Add (res);
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
                }
                return Unauthorized ();
            } catch (Exception ex) {
                return BadRequest (ex.Message);
            }
        }
    }
}