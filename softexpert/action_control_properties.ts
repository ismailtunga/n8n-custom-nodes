
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
				"name": "new action",
				"value": "newAction"
			},
			{
				"name": "get action",
				"value": "getAction"
			},
			{
				"name": "edit action",
				"value": "editAction"
			},
			{
				"name": "edit action status",
				"value": "editActionStatus"
			},
			{
				"name": "execute action",
				"value": "executeAction"
			},
			{
				"name": "new attachment action",
				"value": "newAttachmentAction"
			},
			{
				"name": "get attachment action",
				"value": "getAttachmentAction"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "actionplan id",
		"name": "ActionplanID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newAction",
					"getAction"
				]
			}
		}
	},
	{
		"displayName": "action id",
		"name": "ActionID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newAction",
					"getAction",
					"editAction",
					"editActionStatus",
					"executeAction",
					"newAttachmentAction",
					"getAttachmentAction"
				]
			}
		}
	},
	{
		"displayName": "action title",
		"name": "ActionTitle",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newAction",
					"editAction"
				]
			}
		}
	},
	{
		"displayName": "cat id",
		"name": "CatID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newAction",
					"editAction"
				]
			}
		}
	},
	{
		"displayName": "fg type action",
		"name": "FgTypeAction",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newAction"
				]
			}
		}
	},
	{
		"displayName": "team id",
		"name": "TeamID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newAction",
					"editAction"
				]
			}
		}
	},
	{
		"displayName": "resp id",
		"name": "RespID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newAction",
					"editAction"
				]
			}
		}
	},
	{
		"displayName": "dt plan start",
		"name": "DtPlanStart",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newAction",
					"editAction"
				]
			}
		}
	},
	{
		"displayName": "tm plan start",
		"name": "TmPlanStart",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newAction",
					"editAction"
				]
			}
		}
	},
	{
		"displayName": "dt plan end",
		"name": "DtPlanEnd",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newAction",
					"editAction"
				]
			}
		}
	},
	{
		"displayName": "tm plan end",
		"name": "TmPlanEnd",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newAction",
					"editAction"
				]
			}
		}
	},
	{
		"displayName": "vl plan cost",
		"name": "VlPlanCost",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newAction",
					"editAction"
				]
			}
		}
	},
	{
		"displayName": "ds why",
		"name": "DsWhy",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newAction",
					"editAction"
				]
			}
		}
	},
	{
		"displayName": "ds where",
		"name": "DsWhere",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newAction",
					"editAction"
				]
			}
		}
	},
	{
		"displayName": "ds how",
		"name": "DsHow",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newAction",
					"editAction"
				]
			}
		}
	},
	{
		"displayName": "action plan id",
		"name": "ActionPlanID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"editAction",
					"editActionStatus",
					"executeAction",
					"newAttachmentAction",
					"getAttachmentAction"
				]
			}
		}
	},
	{
		"displayName": "action id new",
		"name": "ActionIdNew",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"editAction"
				]
			}
		}
	},
	{
		"displayName": "action fg",
		"name": "ActionFg",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"editActionStatus"
				]
			}
		}
	},
	{
		"displayName": "justify ds",
		"name": "JustifyDs",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"editActionStatus"
				]
			}
		}
	},
	{
		"displayName": "user id",
		"name": "UserID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"executeAction"
				]
			}
		}
	},
	{
		"displayName": "exec start dt",
		"name": "ExecStartDt",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"executeAction"
				]
			}
		}
	},
	{
		"displayName": "exec start tm",
		"name": "ExecStartTm",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"executeAction"
				]
			}
		}
	},
	{
		"displayName": "exec end dt",
		"name": "ExecEndDt",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"executeAction"
				]
			}
		}
	},
	{
		"displayName": "exec end tm",
		"name": "ExecEndTm",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"executeAction"
				]
			}
		}
	},
	{
		"displayName": "exec cost vl",
		"name": "ExecCostVl",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"executeAction"
				]
			}
		}
	},
	{
		"displayName": "result ds",
		"name": "ResultDs",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"executeAction"
				]
			}
		}
	},
	{
		"displayName": "file name",
		"name": "FileName",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newAttachmentAction",
					"getAttachmentAction"
				]
			}
		}
	},
	{
		"displayName": "file content",
		"name": "FileContent",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newAttachmentAction"
				]
			}
		}
	},
	{
		"displayName": "attachment name",
		"name": "AttachmentName",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newAttachmentAction"
				]
			}
		}
	},
	{
		"displayName": "summary",
		"name": "Summary",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newAttachmentAction"
				]
			}
		}
	}
]
    
    
    export default properties;
