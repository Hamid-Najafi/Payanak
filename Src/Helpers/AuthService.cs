using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Backend.ClientModels;
using Backend.Models;

namespace Backend.Helpers
{
    public class AuthService
    {
        public static bool HasPermission(List<Permissions> permissions, AppPermissions appPermissions)
        {
            // Read UserManagement
            if (appPermissions == AppPermissions.UserManagementRead &&
                permissions.Any(a => a.Name == "Read" &&
                                    a.Parent.HasValue &&
                                    a.Parent.Value == 1))
                return true;
            // Write UserManagement
            if (appPermissions == AppPermissions.UserManagementWrite &&
            permissions.Any(a => a.Name == "Write" &&
                                a.Parent.HasValue &&
                                a.Parent.Value == 1))
                return true;
            // Delete UserManagement
            if (appPermissions == AppPermissions.UserManagementDelete &&
            permissions.Any(a => a.Name == "Delete" &&
                                a.Parent.HasValue &&
                                a.Parent.Value == 1))
                return true;
            // Read PanelUser
            if (appPermissions == AppPermissions.PanelUserRead &&
            permissions.Any(a => a.Name == "Read" &&
                                a.Parent.HasValue &&
                                a.Parent.Value == 5))
                return true;
            // Write PanelUser
            if (appPermissions == AppPermissions.PanelUserWrite &&
            permissions.Any(a => a.Name == "Write" &&
                                a.Parent.HasValue &&
                                a.Parent.Value == 5))
                return true;
            // Delete PanelUser
            if (appPermissions == AppPermissions.PanelUserDelete &&
            permissions.Any(a => a.Name == "Delete" &&
                                a.Parent.HasValue &&
                                a.Parent.Value == 5))
                return true;
            // Login NormalUser
            if (appPermissions == AppPermissions.NormalUserLogin &&
            permissions.Any(a => a.Name == "Login" &&
                                a.Parent.HasValue &&
                                a.Parent.Value == 9))
                return true;
            // Send NormalUser
            if (appPermissions == AppPermissions.NormalUserSend &&
            permissions.Any(a => a.Name == "Send" &&
                                a.Parent.HasValue &&
                                a.Parent.Value == 9))
                return true;
            
            return false;
        }
    }
}