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
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace Backend.Controllers {
        [ApiController]
        [Route ("api/[controller]")]
        [EnableCors ("AllowOrigin")]
        public class AuthController : ControllerBase {

            private SmsPanelDbContext _context;
            private AppAuth _appAuth;
            public AuthController (SmsPanelDbContext context,
                IOptions<AppAuth> appAuth) {
                _context = context;
                _appAuth = appAuth.Value;
            }

            [HttpGet]
            [Authorize]
            public IActionResult Get () {
                try {
                    var usernameClaim = User.Claims.FirstOrDefault (a => a.Type == "username");
                    if (usernameClaim == null)
                        return Unauthorized ();
                    var userModel = new UserModel ();
                    var username = usernameClaim.Value;
                    var accInfo = _context.AccountInfo.FirstOrDefault (a => a.Username == username);
                    if (accInfo == null)
                        return Unauthorized ();
                    userModel.AccountInfo = accInfo.ToModel ();
                    var addInfo = _context.AdditionalInfo.FirstOrDefault (a => a.UserId == accInfo.Id);
                    if (addInfo != null)
                        userModel.AdditionalInfo = addInfo.ToModel ();
                    var AdrsInfo = _context.AddressInfo.FirstOrDefault (a => a.UserId == accInfo.Id);
                    if (AdrsInfo != null)
                        userModel.AddressInfo = AdrsInfo.ToModel ();
                    var prsInfo = _context.PersonalInfo.FirstOrDefault (a => a.UserId == accInfo.Id);
                    if (prsInfo != null)
                        userModel.PersonalInfo = prsInfo.ToModel ();
                    var roleIds = _context.UserRoles.Where (a => a.UserId == accInfo.Id)
                        .Select (a => a.RoleId)
                        .ToList ();
                    userModel.Roles = roleIds;
                    if (accInfo != null) {
                        return Ok (new ResponseModel {
                            Status = new List<ResponseStatusModel> {
                                    new ResponseStatusModel (ResponseStatus.ok)
                                },
                                TotalCount = 1,
                                Result = userModel
                        });
                    }
                    return Unauthorized ();
                } catch {
                    return BadRequest ();
                }
            }

            [HttpPost]
            public IActionResult Post ([FromBody] LoginModel loginModel) {
                try {
                    if (loginModel == null || loginModel.Username == null || loginModel.Password == null) {
                        return Ok (new ResponseModel {
                            Status = new List<ResponseStatusModel> {
                                new ResponseStatusModel (ResponseStatus.badRequest)
                            }
                        });
                    }
                    var hashPass = Helpers.CryptoService.MD5Hash (loginModel.Password);
                    var user = _context.AccountInfo.Where (a => a.Username.ToLower () == loginModel.Username.ToLower() && a.Password == hashPass)
                        .Include (a => a.UserRoles)
                        .ThenInclude (a => a.Role)
                        .ThenInclude (a => a.RolePermissions)
                        .ThenInclude (a => a.Permission)
                        .FirstOrDefault ();
                        if (user == null) {
                            return Ok (new ResponseModel {
                                Status = new List<ResponseStatusModel> {
                                    new ResponseStatusModel (ResponseStatus.wrongUsernameOrPassword)
                                }
                            });
                        }
                        user.LastLogin = DateTime.UtcNow; _context.AccountInfo.Update (user); _context.SaveChanges (); var userPermissions = user.UserRoles
                            .Select (a => a.Role.RolePermissions
                                .Select (b => b.Permission))
                            .SelectMany (a => a)
                            .ToList ();
                        if (!AuthService.HasPermission (userPermissions, AppPermissions.NormalUserLogin)) {
                            return Ok (new ResponseModel {
                                Status = new List<ResponseStatusModel> {
                                    new ResponseStatusModel (ResponseStatus.unauthorized)
                                }
                            });
                        }
                        // TODO LOG
                        var tokenDesc = new SecurityTokenDescriptor {
                            Subject = new System.Security.Claims.ClaimsIdentity (new System.Security.Claims.Claim[] {
                            new System.Security.Claims.Claim ("username", user.Username),
                            }),
                            Expires = DateTime.UtcNow.AddDays (30),
                            SigningCredentials = new SigningCredentials (
                            new SymmetricSecurityKey (System.Text.Encoding.UTF8.GetBytes (_appAuth.Secret)),
                            SecurityAlgorithms.HmacSha256Signature
                            )
                        }; var tokenHandler = new JwtSecurityTokenHandler (); var securityToken = tokenHandler.CreateToken (tokenDesc); var token = tokenHandler.WriteToken (securityToken);
                        return Ok (
                            new ResponseModel {
                                Status = new List<ResponseStatusModel> {
                                        new ResponseStatusModel (ResponseStatus.ok)
                                    },
                                    Result = token,
                                    TotalCount = 1
                            }
                        );

                    }
                    catch {
                        return BadRequest ();
                    }
                }
            }
        }