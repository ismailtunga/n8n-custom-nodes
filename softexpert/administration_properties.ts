
import {
    INodeProperties
    } from "n8n-workflow";
    
    const properties :  INodeProperties[] =  
        [
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"options": [
			{
				"name": "new user",
				"value": "newUser"
			},
			{
				"name": "edit user",
				"value": "editUser"
			},
			{
				"name": "disable user",
				"value": "disableUser"
			},
			{
				"name": "edit user department",
				"value": "editUserDepartment"
			},
			{
				"name": "edit position",
				"value": "editPosition"
			},
			{
				"name": "new position",
				"value": "newPosition"
			},
			{
				"name": "import user v2",
				"value": "importUserV2"
			},
			{
				"name": "add user absence",
				"value": "addUserAbsence"
			},
			{
				"name": "change user status",
				"value": "changeUserStatus"
			},
			{
				"name": "edit organizational unit",
				"value": "editOrganizationalUnit"
			},
			{
				"name": "add user to access group",
				"value": "addUserToAccessGroup"
			},
			{
				"name": "add attrib profile value",
				"value": "addAttribProfileValue"
			},
			{
				"name": "add attribute",
				"value": "addAttribute"
			},
			{
				"name": "add attrib value",
				"value": "addAttribValue"
			},
			{
				"name": "add company",
				"value": "addCompany"
			},
			{
				"name": "add comp contact",
				"value": "addCompContact"
			},
			{
				"name": "add department position",
				"value": "addDepartmentPosition"
			},
			{
				"name": "add meas unity",
				"value": "addMeasUnity"
			},
			{
				"name": "add user department",
				"value": "addUserDepartment"
			},
			{
				"name": "change position status",
				"value": "changePositionStatus"
			},
			{
				"name": "comp atrib assoc",
				"value": "compAtribAssoc"
			},
			{
				"name": "delete company",
				"value": "deleteCompany"
			},
			{
				"name": "delete comp contact",
				"value": "deleteCompContact"
			},
			{
				"name": "delete department",
				"value": "deleteDepartment"
			},
			{
				"name": "delete meas unity",
				"value": "deleteMeasUnity"
			},
			{
				"name": "delete user",
				"value": "deleteUser"
			},
			{
				"name": "delete user department",
				"value": "deleteUserDepartment"
			},
			{
				"name": "delete user access group",
				"value": "deleteUserAccessGroup"
			},
			{
				"name": "delete user leader",
				"value": "deleteUserLeader"
			},
			{
				"name": "edit department",
				"value": "editDepartment"
			},
			{
				"name": "get attrib data",
				"value": "getAttribData"
			},
			{
				"name": "new department",
				"value": "newDepartment"
			},
			{
				"name": "import user",
				"value": "importUser"
			},
			{
				"name": "synch user",
				"value": "synchUser"
			},
			{
				"name": "update employee profile",
				"value": "updateEmployeeProfile"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "iduser",
		"name": "IDUSER",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newUser",
					"addAttribProfileValue",
					"addAttribute",
					"addAttribValue",
					"updateEmployeeProfile"
				]
			}
		}
	},
	{
		"displayName": "name",
		"name": "NAME",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newUser",
					"editUser"
				]
			}
		}
	},
	{
		"displayName": "login",
		"name": "LOGIN",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newUser",
					"editUser"
				]
			}
		}
	},
	{
		"displayName": "pass",
		"name": "PASS",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newUser",
					"editUser"
				]
			}
		}
	},
	{
		"displayName": "email",
		"name": "EMAIL",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newUser",
					"editUser"
				]
			}
		}
	},
	{
		"displayName": "language",
		"name": "LANGUAGE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newUser",
					"editUser"
				]
			}
		}
	},
	{
		"displayName": "idarea",
		"name": "IDAREA",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newUser",
					"editUserDepartment",
					"addDepartmentPosition",
					"addUserDepartment",
					"deleteUserDepartment"
				]
			}
		}
	},
	{
		"displayName": "idfunc",
		"name": "IDFUNC",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newUser",
					"editUserDepartment",
					"addDepartmentPosition",
					"addUserDepartment",
					"deleteUserDepartment"
				]
			}
		}
	},
	{
		"displayName": "idaccgroup",
		"name": "IDACCGROUP",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newUser",
					"deleteUserAccessGroup"
				]
			}
		}
	},
	{
		"displayName": "cdleader",
		"name": "CDLEADER",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newUser",
					"editUser"
				]
			}
		}
	},
	{
		"displayName": "id",
		"name": "ID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"editUser",
					"editUserDepartment",
					"editPosition",
					"newPosition",
					"addUserDepartment",
					"changePositionStatus",
					"deleteDepartment",
					"deleteUser",
					"deleteUserDepartment",
					"deleteUserLeader",
					"editDepartment",
					"newDepartment"
				]
			}
		}
	},
	{
		"displayName": "cd",
		"name": "cd",
		"type": "collection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"disableUser"
				]
			}
		},
		"options": [
			{
				"displayName": "codes",
				"name": "codes",
				"type": "string",
				"default": ""
			}
		]
	},
	{
		"displayName": "desc",
		"name": "DESC",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"editPosition",
					"newPosition",
					"editDepartment",
					"newDepartment"
				]
			}
		}
	},
	{
		"displayName": "user id",
		"name": "UserId",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importUserV2",
					"importUser"
				]
			}
		}
	},
	{
		"displayName": "user name",
		"name": "UserName",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importUserV2",
					"importUser"
				]
			}
		}
	},
	{
		"displayName": "user login",
		"name": "UserLogin",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importUserV2",
					"importUser"
				]
			}
		}
	},
	{
		"displayName": "user password",
		"name": "UserPassword",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importUserV2",
					"importUser"
				]
			}
		}
	},
	{
		"displayName": "user counter sign",
		"name": "UserCounterSign",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importUserV2",
					"importUser"
				]
			}
		}
	},
	{
		"displayName": "user language",
		"name": "UserLanguage",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importUserV2",
					"importUser"
				]
			}
		}
	},
	{
		"displayName": "is active",
		"name": "IsActive",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importUserV2",
					"importUser"
				]
			}
		}
	},
	{
		"displayName": "is enabled",
		"name": "IsEnabled",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importUserV2",
					"importUser"
				]
			}
		}
	},
	{
		"displayName": "num max connections",
		"name": "NumMaxConnections",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importUserV2",
					"importUser"
				]
			}
		}
	},
	{
		"displayName": "user phone",
		"name": "UserPhone",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importUserV2",
					"importUser"
				]
			}
		}
	},
	{
		"displayName": "user email",
		"name": "UserEmail",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importUserV2",
					"importUser"
				]
			}
		}
	},
	{
		"displayName": "leader id",
		"name": "LeaderId",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importUserV2",
					"importUser"
				]
			}
		}
	},
	{
		"displayName": "user photo",
		"name": "UserPhoto",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importUserV2",
					"importUser"
				]
			}
		}
	},
	{
		"displayName": "user domain id",
		"name": "UserDomainId",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importUserV2",
					"importUser"
				]
			}
		}
	},
	{
		"displayName": "domain id",
		"name": "DomainId",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importUserV2",
					"importUser"
				]
			}
		}
	},
	{
		"displayName": "acc group id array",
		"name": "AccGroupIdArray",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importUserV2",
					"importUser"
				]
			}
		}
	},
	{
		"displayName": "dept pos array",
		"name": "DeptPosArray",
		"type": "collection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"importUserV2"
				]
			}
		},
		"options": [
			{
				"displayName": "dept pos",
				"name": "DeptPos",
				"type": "collection",
				"default": {},
				"options": [
					{
						"displayName": "department id",
						"name": "DepartmentID",
						"type": "string",
						"default": ""
					},
					{
						"displayName": "department name",
						"name": "DepartmentName",
						"type": "string",
						"default": ""
					},
					{
						"displayName": "position id",
						"name": "PositionID",
						"type": "string",
						"default": ""
					},
					{
						"displayName": "position name",
						"name": "PositionName",
						"type": "string",
						"default": ""
					}
				]
			}
		]
	},
	{
		"displayName": "team id array",
		"name": "TeamIdArray",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importUserV2",
					"importUser"
				]
			}
		}
	},
	{
		"displayName": "update type",
		"name": "UpdateType",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importUserV2",
					"importUser"
				]
			}
		}
	},
	{
		"displayName": "absent user",
		"name": "AbsentUser",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addUserAbsence"
				]
			}
		}
	},
	{
		"displayName": "responsible user",
		"name": "ResponsibleUser",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addUserAbsence"
				]
			}
		}
	},
	{
		"displayName": "initial date",
		"name": "InitialDate",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addUserAbsence"
				]
			}
		}
	},
	{
		"displayName": "end date",
		"name": "EndDate",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addUserAbsence"
				]
			}
		}
	},
	{
		"displayName": "reason",
		"name": "Reason",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addUserAbsence"
				]
			}
		}
	},
	{
		"displayName": "id user",
		"name": "IdUser",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"changeUserStatus",
					"addUserToAccessGroup"
				]
			}
		}
	},
	{
		"displayName": "user status",
		"name": "UserStatus",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"changeUserStatus"
				]
			}
		}
	},
	{
		"displayName": "id",
		"name": "Id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"editOrganizationalUnit"
				]
			}
		}
	},
	{
		"displayName": "name",
		"name": "Name",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"editOrganizationalUnit"
				]
			}
		}
	},
	{
		"displayName": "id upper",
		"name": "IdUpper",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"editOrganizationalUnit"
				]
			}
		}
	},
	{
		"displayName": "id access group",
		"name": "IdAccessGroup",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addUserToAccessGroup"
				]
			}
		}
	},
	{
		"displayName": "nmattribute",
		"name": "NMATTRIBUTE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addAttribProfileValue",
					"addAttribute"
				]
			}
		}
	},
	{
		"displayName": "vlattribute",
		"name": "VLATTRIBUTE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addAttribProfileValue",
					"addAttribValue",
					"compAtribAssoc"
				]
			}
		}
	},
	{
		"displayName": "dsattribute",
		"name": "DSATTRIBUTE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addAttribProfileValue"
				]
			}
		}
	},
	{
		"displayName": "idattribute",
		"name": "IDATTRIBUTE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addAttribute",
					"addAttribValue",
					"compAtribAssoc"
				]
			}
		}
	},
	{
		"displayName": "fgattributetype",
		"name": "FGATTRIBUTETYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addAttribute"
				]
			}
		}
	},
	{
		"displayName": "fgdatatype",
		"name": "FGDATATYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addAttribute"
				]
			}
		}
	},
	{
		"displayName": "fgselectiontype",
		"name": "FGSELECTIONTYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addAttribute"
				]
			}
		}
	},
	{
		"displayName": "fgmultivalued",
		"name": "FGMULTIVALUED",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addAttribute"
				]
			}
		}
	},
	{
		"displayName": "cdisosystem",
		"name": "CDISOSYSTEM",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addAttribute",
					"addCompany",
					"addMeasUnity"
				]
			}
		}
	},
	{
		"displayName": "fgmasktype",
		"name": "FGMASKTYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addAttribute"
				]
			}
		}
	},
	{
		"displayName": "dsmask",
		"name": "DSMASK",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addAttribute"
				]
			}
		}
	},
	{
		"displayName": "fgdefaultvalue",
		"name": "FGDEFAULTVALUE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addAttribValue"
				]
			}
		}
	},
	{
		"displayName": "iddatasource",
		"name": "IDDATASOURCE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addAttribValue"
				]
			}
		}
	},
	{
		"displayName": "dsconndbsql",
		"name": "DSCONNDBSQL",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addAttribValue"
				]
			}
		}
	},
	{
		"displayName": "nmfilterfield",
		"name": "NMFILTERFIELD",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addAttribValue"
				]
			}
		}
	},
	{
		"displayName": "idcommercial",
		"name": "IDCOMMERCIAL",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCompany",
					"addCompContact",
					"compAtribAssoc",
					"deleteCompany",
					"deleteCompContact"
				]
			}
		}
	},
	{
		"displayName": "nmcompany",
		"name": "NMCOMPANY",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCompany",
					"deleteCompany"
				]
			}
		}
	},
	{
		"displayName": "dsaddress",
		"name": "DSADDRESS",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCompany",
					"updateEmployeeProfile"
				]
			}
		}
	},
	{
		"displayName": "nmcity",
		"name": "NMCITY",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCompany"
				]
			}
		}
	},
	{
		"displayName": "idstate",
		"name": "IDSTATE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCompany"
				]
			}
		}
	},
	{
		"displayName": "nmcountry",
		"name": "NMCOUNTRY",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCompany"
				]
			}
		}
	},
	{
		"displayName": "idzipcode",
		"name": "IDZIPCODE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCompany"
				]
			}
		}
	},
	{
		"displayName": "idphone",
		"name": "IDPHONE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCompany",
					"addCompContact"
				]
			}
		}
	},
	{
		"displayName": "idfax",
		"name": "IDFAX",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCompany",
					"addCompContact"
				]
			}
		}
	},
	{
		"displayName": "nmhomepage",
		"name": "NMHOMEPAGE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCompany"
				]
			}
		}
	},
	{
		"displayName": "fgcustomer",
		"name": "FGCUSTOMER",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCompany"
				]
			}
		}
	},
	{
		"displayName": "fgsupplier",
		"name": "FGSUPPLIER",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCompany"
				]
			}
		}
	},
	{
		"displayName": "fgmanufacturer",
		"name": "FGMANUFACTURER",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCompany"
				]
			}
		}
	},
	{
		"displayName": "dscompany",
		"name": "DSCOMPANY",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCompany"
				]
			}
		}
	},
	{
		"displayName": "idcompany",
		"name": "IDCOMPANY",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCompany",
					"editDepartment",
					"newDepartment"
				]
			}
		}
	},
	{
		"displayName": "idcompanytype",
		"name": "IDCOMPANYTYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCompany"
				]
			}
		}
	},
	{
		"displayName": "nmcontact",
		"name": "NMCONTACT",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCompContact",
					"deleteCompContact"
				]
			}
		}
	},
	{
		"displayName": "nmdepartment",
		"name": "NMDEPARTMENT",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCompContact"
				]
			}
		}
	},
	{
		"displayName": "nmposition",
		"name": "NMPOSITION",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCompContact"
				]
			}
		}
	},
	{
		"displayName": "nmemail",
		"name": "NMEMAIL",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCompContact"
				]
			}
		}
	},
	{
		"displayName": "dscontact",
		"name": "DSCONTACT",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCompContact"
				]
			}
		}
	},
	{
		"displayName": "fgdefault",
		"name": "FGDEFAULT",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCompContact"
				]
			}
		}
	},
	{
		"displayName": "idmeasunity",
		"name": "IDMEASUNITY",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addMeasUnity"
				]
			}
		}
	},
	{
		"displayName": "nmmeasunity",
		"name": "NMMEASUNITY",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addMeasUnity"
				]
			}
		}
	},
	{
		"displayName": "idmeasunity",
		"name": "idmeasunity",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"deleteMeasUnity"
				]
			}
		}
	},
	{
		"displayName": "userid",
		"name": "USERID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"deleteUserAccessGroup"
				]
			}
		}
	},
	{
		"displayName": "idupper",
		"name": "IDUPPER",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"editDepartment",
					"newDepartment"
				]
			}
		}
	},
	{
		"displayName": "fgdepttype",
		"name": "FGDEPTTYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"editDepartment",
					"newDepartment"
				]
			}
		}
	},
	{
		"displayName": "idattribs",
		"name": "IDATTRIBS",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"getAttribData"
				]
			}
		}
	},
	{
		"displayName": "idpos",
		"name": "IDPOS",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newDepartment"
				]
			}
		}
	},
	{
		"displayName": "rol pos id array",
		"name": "RolPosIdArray",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importUser"
				]
			}
		}
	},
	{
		"displayName": "nmdomainuid",
		"name": "nmdomainuid",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"synchUser"
				]
			}
		}
	},
	{
		"displayName": "id",
		"name": "id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"synchUser"
				]
			}
		}
	},
	{
		"displayName": "login",
		"name": "login",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"synchUser"
				]
			}
		}
	},
	{
		"displayName": "name",
		"name": "name",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"synchUser"
				]
			}
		}
	},
	{
		"displayName": "email",
		"name": "email",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"synchUser"
				]
			}
		}
	},
	{
		"displayName": "fglanguage",
		"name": "fglanguage",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"synchUser"
				]
			}
		}
	},
	{
		"displayName": "fguserenabled",
		"name": "fguserenabled",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"synchUser"
				]
			}
		}
	},
	{
		"displayName": "fguserblocked",
		"name": "fguserblocked",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"synchUser"
				]
			}
		}
	},
	{
		"displayName": "fgnotice",
		"name": "fgnotice",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"synchUser"
				]
			}
		}
	},
	{
		"displayName": "idarea",
		"name": "idarea",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"synchUser"
				]
			}
		}
	},
	{
		"displayName": "nmarea",
		"name": "nmarea",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"synchUser"
				]
			}
		}
	},
	{
		"displayName": "idfunc",
		"name": "idfunc",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"synchUser"
				]
			}
		}
	},
	{
		"displayName": "nmfunc",
		"name": "nmfunc",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"synchUser"
				]
			}
		}
	},
	{
		"displayName": "nmdefsynchfilter",
		"name": "nmdefsynchfilter",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"synchUser"
				]
			}
		}
	},
	{
		"displayName": "oidconnection",
		"name": "oidconnection",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"synchUser"
				]
			}
		}
	},
	{
		"displayName": "cdleader",
		"name": "cdleader",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"synchUser"
				]
			}
		}
	},
	{
		"displayName": "idedulevel",
		"name": "IDEDULEVEL",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"updateEmployeeProfile"
				]
			}
		}
	},
	{
		"displayName": "fgedulevelstatus",
		"name": "FGEDULEVELSTATUS",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"updateEmployeeProfile"
				]
			}
		}
	},
	{
		"displayName": "dtbirthday",
		"name": "DTBIRTHDAY",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"updateEmployeeProfile"
				]
			}
		}
	},
	{
		"displayName": "dtadmission",
		"name": "DTADMISSION",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"updateEmployeeProfile"
				]
			}
		}
	},
	{
		"displayName": "dtdemission",
		"name": "DTDEMISSION",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"updateEmployeeProfile"
				]
			}
		}
	},
	{
		"displayName": "dsobs",
		"name": "DSOBS",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"updateEmployeeProfile"
				]
			}
		}
	}
]
    
    
    export default properties;
