using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Helpers
{

    public enum AppPermissions
    {
        UserManagementRead,
        UserManagementWrite,
        UserManagementDelete,
        PanelUserRead,
        PanelUserWrite,
        PanelUserDelete,
        NormalUserLogin,
        NormalUserSend,
        
    }
}