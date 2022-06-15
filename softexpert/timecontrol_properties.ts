
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
				"name": "return rat approval",
				"value": "returnRatApproval"
			},
			{
				"name": "return rat approval one",
				"value": "returnRatApprovalOne"
			},
			{
				"name": "rat sent",
				"value": "ratSent"
			},
			{
				"name": "set rat attribute value",
				"value": "setRatAttributeValue"
			},
			{
				"name": "cancel rat",
				"value": "cancelRat"
			},
			{
				"name": "new non project task cost",
				"value": "newNonProjectTaskCost"
			},
			{
				"name": "edit non project task cost",
				"value": "editNonProjectTaskCost"
			},
			{
				"name": "new non project task revenue",
				"value": "newNonProjectTaskRevenue"
			},
			{
				"name": "edit non project task revenue",
				"value": "editNonProjectTaskRevenue"
			},
			{
				"name": "execute non project task",
				"value": "executeNonProjectTask"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "idrat",
		"name": "idrat",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"ratSent",
					"setRatAttributeValue",
					"cancelRat"
				]
			}
		}
	},
	{
		"displayName": "idattribute",
		"name": "idattribute",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"setRatAttributeValue"
				]
			}
		}
	},
	{
		"displayName": "vlattribute",
		"name": "vlattribute",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"setRatAttributeValue"
				]
			}
		}
	},
	{
		"displayName": "non project task id",
		"name": "NonProjectTaskId",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newNonProjectTaskCost",
					"editNonProjectTaskCost",
					"newNonProjectTaskRevenue",
					"editNonProjectTaskRevenue",
					"executeNonProjectTask"
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
					"newNonProjectTaskCost",
					"editNonProjectTaskCost",
					"newNonProjectTaskRevenue",
					"editNonProjectTaskRevenue"
				]
			}
		}
	},
	{
		"displayName": "type id",
		"name": "TypeId",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newNonProjectTaskCost",
					"editNonProjectTaskCost",
					"newNonProjectTaskRevenue",
					"editNonProjectTaskRevenue"
				]
			}
		}
	},
	{
		"displayName": "phase",
		"name": "Phase",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newNonProjectTaskCost",
					"editNonProjectTaskCost",
					"newNonProjectTaskRevenue",
					"editNonProjectTaskRevenue"
				]
			}
		}
	},
	{
		"displayName": "date",
		"name": "Date",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newNonProjectTaskCost",
					"editNonProjectTaskCost",
					"newNonProjectTaskRevenue",
					"editNonProjectTaskRevenue"
				]
			}
		}
	},
	{
		"displayName": "amount",
		"name": "Amount",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newNonProjectTaskCost",
					"editNonProjectTaskCost",
					"newNonProjectTaskRevenue",
					"editNonProjectTaskRevenue"
				]
			}
		}
	},
	{
		"displayName": "unit value",
		"name": "UnitValue",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newNonProjectTaskCost",
					"editNonProjectTaskCost",
					"newNonProjectTaskRevenue",
					"editNonProjectTaskRevenue"
				]
			}
		}
	},
	{
		"displayName": "document number",
		"name": "DocumentNumber",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newNonProjectTaskCost",
					"editNonProjectTaskCost",
					"newNonProjectTaskRevenue",
					"editNonProjectTaskRevenue"
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
					"newNonProjectTaskCost",
					"editNonProjectTaskCost",
					"newNonProjectTaskRevenue",
					"editNonProjectTaskRevenue"
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
					"executeNonProjectTask"
				]
			}
		}
	},
	{
		"displayName": "actual percentage",
		"name": "ActualPercentage",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"executeNonProjectTask"
				]
			}
		}
	},
	{
		"displayName": "start date",
		"name": "StartDate",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"executeNonProjectTask"
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
					"executeNonProjectTask"
				]
			}
		}
	},
	{
		"displayName": "use planned or rescheduled dates",
		"name": "UsePlannedOrRescheduledDates",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"executeNonProjectTask"
				]
			}
		}
	}
]
    
    
    export default properties;
