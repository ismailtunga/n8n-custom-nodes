
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
				"name": "create team by user",
				"value": "createTeamByUser"
			},
			{
				"name": "create team by position",
				"value": "createTeamByPosition"
			},
			{
				"name": "create team by area",
				"value": "createTeamByArea"
			},
			{
				"name": "new role",
				"value": "newRole"
			},
			{
				"name": "remove team",
				"value": "removeTeam"
			},
			{
				"name": "remove user from team",
				"value": "removeUserFromTeam"
			},
			{
				"name": "remove user from role",
				"value": "removeUserFromRole"
			},
			{
				"name": "add user to role",
				"value": "addUserToRole"
			},
			{
				"name": "add area to team",
				"value": "addAreaToTeam"
			},
			{
				"name": "add position to team",
				"value": "addPositionToTeam"
			},
			{
				"name": "add user to team",
				"value": "addUserToTeam"
			},
			{
				"name": "edit team by area",
				"value": "editTeamByArea"
			},
			{
				"name": "edit team by position",
				"value": "editTeamByPosition"
			},
			{
				"name": "edit team by user",
				"value": "editTeamByUser"
			},
			{
				"name": "remove area from team",
				"value": "removeAreaFromTeam"
			},
			{
				"name": "remove position from team",
				"value": "removePositionFromTeam"
			},
			{
				"name": "new team",
				"value": "newTeam"
			},
			{
				"name": "new team member",
				"value": "newTeamMember"
			},
			{
				"name": "delete team member",
				"value": "deleteTeamMember"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "idteam",
		"name": "IDTEAM",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createTeamByUser",
					"createTeamByPosition",
					"createTeamByArea",
					"removeTeam",
					"removeUserFromTeam",
					"addAreaToTeam",
					"addPositionToTeam",
					"addUserToTeam",
					"removeAreaFromTeam",
					"removePositionFromTeam",
					"newTeam",
					"newTeamMember",
					"deleteTeamMember"
				]
			}
		}
	},
	{
		"displayName": "nmteam",
		"name": "NMTEAM",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createTeamByUser",
					"createTeamByPosition",
					"createTeamByArea",
					"editTeamByArea",
					"editTeamByPosition",
					"editTeamByUser",
					"newTeam"
				]
			}
		}
	},
	{
		"displayName": "users",
		"name": "USERS",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createTeamByUser",
					"removeUserFromTeam",
					"addUserToTeam",
					"editTeamByUser"
				]
			}
		}
	},
	{
		"displayName": "component",
		"name": "COMPONENT",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createTeamByUser",
					"createTeamByPosition",
					"createTeamByArea",
					"editTeamByArea",
					"editTeamByPosition",
					"editTeamByUser",
					"newTeam"
				]
			}
		}
	},
	{
		"displayName": "positions",
		"name": "POSITIONS",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createTeamByPosition",
					"addPositionToTeam",
					"editTeamByPosition",
					"removePositionFromTeam"
				]
			}
		}
	},
	{
		"displayName": "areas",
		"name": "AREAS",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createTeamByArea",
					"addAreaToTeam",
					"editTeamByArea",
					"removeAreaFromTeam"
				]
			}
		}
	},
	{
		"displayName": "id role",
		"name": "IdRole",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newRole",
					"removeUserFromRole",
					"addUserToRole"
				]
			}
		}
	},
	{
		"displayName": "nm role",
		"name": "NmRole",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newRole"
				]
			}
		}
	},
	{
		"displayName": "id role owner",
		"name": "IdRoleOwner",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newRole"
				]
			}
		}
	},
	{
		"displayName": "description",
		"name": "Description",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newRole"
				]
			}
		}
	},
	{
		"displayName": "components",
		"name": "Components",
		"type": "collection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"newRole"
				]
			}
		},
		"options": [
			{
				"displayName": "item",
				"name": "item",
				"type": "string",
				"default": ""
			}
		]
	},
	{
		"displayName": "id user",
		"name": "IdUser",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"removeUserFromRole",
					"addUserToRole"
				]
			}
		}
	},
	{
		"displayName": "is default",
		"name": "IsDefault",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addUserToRole"
				]
			}
		}
	},
	{
		"displayName": "idteam_old",
		"name": "IDTEAM_OLD",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"editTeamByArea",
					"editTeamByPosition",
					"editTeamByUser"
				]
			}
		}
	},
	{
		"displayName": "idteam_new",
		"name": "IDTEAM_NEW",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"editTeamByArea",
					"editTeamByPosition",
					"editTeamByUser"
				]
			}
		}
	},
	{
		"displayName": "fgtype",
		"name": "FGTYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newTeamMember",
					"deleteTeamMember"
				]
			}
		}
	},
	{
		"displayName": "iddepartment",
		"name": "IDDEPARTMENT",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newTeamMember",
					"deleteTeamMember"
				]
			}
		}
	},
	{
		"displayName": "sublevels",
		"name": "SUBLEVELS",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newTeamMember"
				]
			}
		}
	},
	{
		"displayName": "idposition",
		"name": "IDPOSITION",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newTeamMember",
					"deleteTeamMember"
				]
			}
		}
	},
	{
		"displayName": "iduser",
		"name": "IDUSER",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newTeamMember",
					"deleteTeamMember"
				]
			}
		}
	}
]
    
    
    export default properties;
