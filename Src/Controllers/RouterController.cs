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

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [EnableCors("AllowOrigin")]
    public class RouterController : ControllerBase
    {
        private readonly IWebHostEnvironment _hostingEnvironment;
        private SmsPanelDbContext _context;
        private AppAuth _appAuth;
        private AppPath _appPath;
        public RouterController(SmsPanelDbContext context,
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
        public IActionResult Get()
        {
            try
            {
                var usernameClaim = User.Claims.FirstOrDefault(a => a.Type == "username");
                if (usernameClaim == null)
                    return Unauthorized();
                var username = usernameClaim.Value;
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
                var hasNormalUserSendPermission = AuthService.HasPermission(userPermissions, AppPermissions.NormalUserSend);
                var hasPanelPermission = AuthService.HasPermission(userPermissions, AppPermissions.PanelUserRead);

                var res = new List<RouteInfo>();
                // Dashboard //////////////////////////
                var dashboard = new RouteInfo()
                {
                    Path = "/dashboard/dashboard1",
                    Icon = "ft-home",
                    Title = "داشبورد",
                    Badge = "",
                    BadgeClass = "",
                    Class = "",
                    IsExternalLink = false
                };
                res.Add(dashboard);
                // cartable //////////////////////////
                if (hasAdminPermission || hasPanelPermission)
                {
                    var cartable = new RouteInfo()
                    {
                        Path = "/cartable",
                        Icon = "ft-clipboard",
                        Title = "کارتابل",
                        Badge = "",
                        BadgeClass = "",
                        Class = "has-sub",
                        IsExternalLink = false
                    };
                    res.Add(cartable);
                    {
                        { // پایانک
                            var payanak = new RouteInfo()
                            {
                                Path = "/cartable/payanak",
                                Icon = "ft-message-circle",
                                Title = "پایانک",
                                Badge = "",
                                BadgeClass = "",
                                Class = "has-sub",
                                IsExternalLink = false
                            };
                            cartable.Submenu.Add(payanak);
                            {
                                var userGroups = new RouteInfo()
                                {
                                    Path = "/cartable/payanak/addCredit",
                                    Icon = "ft-credit-card",
                                    Title = "افزایش اعتبار",
                                    Badge = "",
                                    BadgeClass = "",
                                    Class = "",
                                    IsExternalLink = false
                                };
                                payanak.Submenu.Add(userGroups);
                                var userTicket = new RouteInfo()
                                {
                                    Path = "/cartable/payanak/ticket",
                                    Icon = "fa fa-sticky-note",
                                    Title = "پیام ها",
                                    Badge = "",
                                    BadgeClass = "",
                                    Class = "",
                                    IsExternalLink = false
                                };
                                payanak.Submenu.Add(userTicket);
                            }
                        }
                        { // شخصی
                            var personal = new RouteInfo()
                            {
                                Path = "/cartable/personal",
                                Icon = "ft-user",
                                Title = "شخصی",
                                Badge = "",
                                BadgeClass = "",
                                Class = "has-sub",
                                IsExternalLink = false
                            };
                            cartable.Submenu.Add(personal);
                            {
                                var userOwnedGroups = new RouteInfo()
                                {
                                    Path = "/cartable/personal/myGroups",
                                    Icon = "ft-users",
                                    Title = "گروه های من",
                                    Badge = "",
                                    BadgeClass = "",
                                    Class = "",
                                    IsExternalLink = false
                                };
                                personal.Submenu.Add(userOwnedGroups);
                                var usertemplates = new RouteInfo()
                                {
                                    Path = "/cartable/personal/template",
                                    Icon = "ft-file-text",
                                    Title = "پیش نویس های من",
                                    Badge = "",
                                    BadgeClass = "",
                                    Class = "",
                                    IsExternalLink = false
                                };
                                personal.Submenu.Add(usertemplates);
                                var userNumbers = new RouteInfo()
                                {
                                    Path = "/cartable/personal/number",
                                    Icon = "ft-phone",
                                    Title = "شماره های من",
                                    Badge = "",
                                    BadgeClass = "",
                                    Class = "",
                                    IsExternalLink = false
                                };
                                personal.Submenu.Add(userNumbers);
                                var userPanels = new RouteInfo()
                                {
                                    Path = "/cartable/personal/panels",
                                    Icon = "ft-cpu",
                                    Title = "دستگاه های من",
                                    Badge = "",
                                    BadgeClass = "",
                                    Class = "",
                                    IsExternalLink = false
                                };
                                personal.Submenu.Add(userPanels);
                                var userbc = new RouteInfo()
                                {
                                    Path = "/cartable/personal/businessCard",
                                    Icon = "fa fa-address-card",
                                    Title = "کارت ویزیت های من",
                                    Badge = "",
                                    BadgeClass = "",
                                    Class = "",
                                    IsExternalLink = false
                                };
                                personal.Submenu.Add(userbc);
                                var userSS = new RouteInfo()
                                {
                                    Path = "/cartable/personal/scheduledSms",
                                    Icon = "ft-calendar",
                                    Title = "ارسال زماندار من",
                                    Badge = "",
                                    BadgeClass = "",
                                    Class = "",
                                    IsExternalLink = false
                                };
                                personal.Submenu.Add(userSS);
                            }
                        }

                    }
                }
                // SMS //////////////////////////
                if (hasNormalUserSendPermission ||
                    hasAdminPermission ||
                    hasPanelPermission)
                {
                    var sms = new RouteInfo()
                    {
                        Path = "/sms",
                        Icon = "ft-message-square",
                        Title = "مدیریت پیام",
                        Badge = "",
                        BadgeClass = "",
                        Class = "has-sub",
                        IsExternalLink = false
                    };
                    res.Add(sms);
                    {
                        var compose = new RouteInfo()
                        {
                            Path = "/sms/compose",
                            Icon = "fa fa-envelope",
                            Title = "ارسال",
                            Badge = "",
                            BadgeClass = "",
                            Class = "",
                            IsExternalLink = false
                        };
                        sms.Submenu.Add(compose);
                        var sent = new RouteInfo()
                        {
                            Path = "/sms/sent",
                            Icon = "fa fa-paper-plane",
                            Title = "پیام های ارسالی",
                            Badge = "",
                            BadgeClass = "",
                            Class = "",
                            IsExternalLink = false
                        };
                        sms.Submenu.Add(sent);
                        var received = new RouteInfo()
                        {
                            Path = "/sms/received",
                            Icon = "ft-inbox",
                            Title = "پیام های دریافتی",
                            Badge = "",
                            BadgeClass = "",
                            Class = "",
                            IsExternalLink = false
                        };
                        sms.Submenu.Add(received);
                    }
                }
                // number //////////////////////////
                if (hasAdminPermission)
                {
                    var number = new RouteInfo()
                    {
                        Path = "/number",
                        Icon = "fa fa-tty",
                        Title = "مدیریت شماره ها",
                        Badge = "",
                        BadgeClass = "",
                        Class = "has-sub",
                        IsExternalLink = false
                    };
                    res.Add(number);
                    {
                        var assign = new RouteInfo()
                        {
                            Path = "/number/assign",
                            Icon = "ft-list",
                            Title = "لیست شماره ها",
                            Badge = "",
                            BadgeClass = "",
                            Class = "",
                            IsExternalLink = false
                        };
                        number.Submenu.Add(assign);
                        // var numberList = new RouteInfo()
                        // {
                        //     Path = "/number/list",
                        //     Icon = "fa-comment-medical",
                        //     Title = "لیست شماره ها",
                        //     Badge = "",
                        //     BadgeClass = "",
                        //     Class = "",
                        //     IsExternalLink = false
                        // };
                        // number.Submenu.Add(numberList);
                    }
                    // user management //////////////////////////
                    var userManagements = new RouteInfo()
                    {
                        Path = "/userManagement",
                        Icon = "ft-users",
                        Title = "مدیریت کاربران",
                        Badge = "",
                        BadgeClass = "",
                        Class = "has-sub",
                        IsExternalLink = false
                    };
                    res.Add(userManagements);
                    {
                        var listUser = new RouteInfo()
                        {
                            Path = "/userManagement/listUser",
                            Icon = "fa fa-users",
                            Title = "لیست کاربران",
                            Badge = "",
                            BadgeClass = "",
                            Class = "",
                            IsExternalLink = false
                        };
                        userManagements.Submenu.Add(listUser);
                        var ticketList = new RouteInfo()
                        {
                            Path = "/userManagement/listTicket",
                            Icon = "fa fa-sticky-note",
                            Title = "لیست پیام ها",
                            Badge = "",
                            BadgeClass = "",
                            Class = "",
                            IsExternalLink = false
                        };
                        userManagements.Submenu.Add(ticketList);
                        var listRole = new RouteInfo()
                        {
                            Path = "/userManagement/listRole",
                            Icon = "ft-command",
                            Title = "نقش ها",
                            Badge = "",
                            BadgeClass = "",
                            Class = "",
                            IsExternalLink = false
                        };
                        userManagements.Submenu.Add(listRole);
                        // var addpanel = new RouteInfo()
                        // {
                        //     Path = "/userManagement/addPanel",
                        //     Icon = "ft-cpu",
                        //     Title = "انتصاب پنل",
                        //     Badge = "",
                        //     BadgeClass = "",
                        //     Class = "",
                        //     IsExternalLink = false
                        // };
                        // userManagements.Submenu.Add(addpanel);
                        var addBusinessCard = new RouteInfo()
                        {
                            Path = "/userManagement/addBusinessCard",
                            Icon = "fa fa-address-card",
                            Title = "لیست کارت ویزیت ها",
                            Badge = "",
                            BadgeClass = "",
                            Class = "",
                            IsExternalLink = false
                        };
                        userManagements.Submenu.Add(addBusinessCard);
                    }

                    // panel Management /////////////////////////
                    var panelManagements = new RouteInfo()
                    {
                        Path = "/panelManagement",
                        Icon = "ft-cpu",
                        Title = "مدیریت دستگاه",
                        Badge = "",
                        BadgeClass = "",
                        Class = "has-sub",
                        IsExternalLink = false
                    };
                    res.Add(panelManagements);
                    {
                        var listPanel = new RouteInfo()
                        {
                            Path = "/panelManagement/listPanel",
                            Icon = "ft-list",
                            Title = "لیست دستگاه ها",
                            Badge = "",
                            BadgeClass = "",
                            Class = "",
                            IsExternalLink = false
                        };
                        panelManagements.Submenu.Add(listPanel);
                        var panelVersion = new RouteInfo()
                        {
                            Path = "/panelManagement/panelVersion",
                            Icon = "fa fa-qrcode",
                            Title = "ورژن دستگاه ها",
                            Badge = "",
                            BadgeClass = "",
                            Class = "",
                            IsExternalLink = false
                        };
                        panelManagements.Submenu.Add(panelVersion);
                    }
                }
                return Ok(new ResponseModel
                {
                    Status = new List<ResponseStatusModel>{
                        new ResponseStatusModel(ResponseStatus.ok)
                    },
                    TotalCount = res.Count,
                    Result = res
                });
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
