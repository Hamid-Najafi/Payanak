INSERT INTO um."AccountInfo"
    (id, username, password, email, "mobilePhone", "homePhone", "businessPhone", "createDate", "lastLogin", picture, "formGuid", "formDate")
OVERRIDING
SYSTEM
VALUE
VALUES
    (1, 'admin', '202cb962ac59075b964b07152d234b70', 'jooker.q@gmail.com', '0915-650-3850', NULL, NULL, '2019-08-11 00:00:00', '2020-02-14 09:39:35.052864', '~/Images/12_22_2019/391ac343-e100-40ab-be39-06f8d4b37b75.jpeg', '123321', '2019-12-25 07:37:11.749041');

-- INSERT INTO sms."Settings" (id, "lastRecivedSmsId", "smsPrice", "smsDiscount", "formKey", "formMessage") OVERRIDING SYSTEM VALUE VALUES (1, 0, 15.00, 0, '1024', NULL);
INSERT INTO payanakdb."Settings"
    (id, "lastRecivedPayanakDBId", "PayanakDBPrice", "PayanakDBDiscount", "formKey", "formMessage")
OVERRIDING
SYSTEM
VALUE
VALUES
    (1, 0, 15.00, 0, '1024', NULL);


INSERT INTO um."Permissions"
    (id, name, title, level, parent)
OVERRIDING
SYSTEM
VALUE
VALUES
    (1, 'UserManagement', 'مدیریت کاربران', 1, NULL);
INSERT INTO um."Permissions"
    (id, name, title, level, parent)
OVERRIDING
SYSTEM
VALUE
VALUES
    (2, 'Read', 'خواندن', 2, 1);
INSERT INTO um."Permissions"
    (id, name, title, level, parent)
OVERRIDING
SYSTEM
VALUE
VALUES
    (3, 'Write', 'نوشتن', 2, 1);
INSERT INTO um."Permissions"
    (id, name, title, level, parent)
OVERRIDING
SYSTEM
VALUE
VALUES
    (4, 'Delete', 'حذف کردن', 2, 1);
INSERT INTO um."Permissions"
    (id, name, title, level, parent)
OVERRIDING
SYSTEM
VALUE
VALUES
    (5, 'PanelUser', 'کاربران دستگاه', 1, NULL);
INSERT INTO um."Permissions"
    (id, name, title, level, parent)
OVERRIDING
SYSTEM
VALUE
VALUES
    (6, 'Read', 'خواندن', 2, 5);
INSERT INTO um."Permissions"
    (id, name, title, level, parent)
OVERRIDING
SYSTEM
VALUE
VALUES
    (7, 'Write', 'نوشتن', 2, 5);
INSERT INTO um."Permissions"
    (id, name, title, level, parent)
OVERRIDING
SYSTEM
VALUE
VALUES
    (9, 'NormalUser', 'کاربر عادی', 1, NULL);
INSERT INTO um."Permissions"
    (id, name, title, level, parent)
OVERRIDING
SYSTEM
VALUE
VALUES
    (10, 'Login', 'دسترسی به سایت', 2, 9);
INSERT INTO um."Permissions"
    (id, name, title, level, parent)
OVERRIDING
SYSTEM
VALUE
VALUES
    (11, 'Send', 'ارسال پیام', 2, 9);
INSERT INTO um."Permissions"
    (id, name, title, level, parent)
OVERRIDING
SYSTEM
VALUE
VALUES
    (8, 'Delete', 'حذف کردن', 2, 5);


INSERT INTO um."Roles"
    (id, name, title, "canEdit", "canDelete")
OVERRIDING
SYSTEM
VALUE
VALUES
    (1, 'UserManager', 'مدیریت کاربران', false, false);
INSERT INTO um."Roles"
    (id, name, title, "canEdit", "canDelete")
OVERRIDING
SYSTEM
VALUE
VALUES
    (2, 'NormalUser', 'کاربر', true, true);
INSERT INTO um."Roles"
    (id, name, title, "canEdit", "canDelete")
OVERRIDING
SYSTEM
VALUE
VALUES
    (4, 'PanelUser', 'کاربر دستگاه پیامک', true, true);



INSERT INTO um."RolePermissions"
    ("roleId", "permissionId")
VALUES
    (1, 1);
INSERT INTO um."RolePermissions"
    ("roleId", "permissionId")
VALUES
    (1, 2);
INSERT INTO um."RolePermissions"
    ("roleId", "permissionId")
VALUES
    (1, 3);
INSERT INTO um."RolePermissions"
    ("roleId", "permissionId")
VALUES
    (1, 4);
INSERT INTO um."RolePermissions"
    ("roleId", "permissionId")
VALUES
    (2, 9);
INSERT INTO um."RolePermissions"
    ("roleId", "permissionId")
VALUES
    (2, 10);
INSERT INTO um."RolePermissions"
    ("roleId", "permissionId")
VALUES
    (4, 5);
INSERT INTO um."RolePermissions"
    ("roleId", "permissionId")
VALUES
    (4, 6);
INSERT INTO um."RolePermissions"
    ("roleId", "permissionId")
VALUES
    (4, 7);
INSERT INTO um."RolePermissions"
    ("roleId", "permissionId")
VALUES
    (4, 9);
INSERT INTO um."RolePermissions"
    ("roleId", "permissionId")
VALUES
    (4, 10);
INSERT INTO um."RolePermissions"
    ("roleId", "permissionId")
VALUES
    (4, 11);




INSERT INTO um."UserRoles"
    ("userId", "roleId")
VALUES
    (1, 1);
INSERT INTO um."UserRoles"
    ("userId", "roleId")
VALUES
    (1, 2);
INSERT INTO um."UserRoles"
    ("userId", "roleId")
VALUES
    (1, 4);


