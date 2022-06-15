
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
				"name": "new assoc doc proj",
				"value": "newAssocDocProj"
			},
			{
				"name": "execute project task",
				"value": "executeProjectTask"
			},
			{
				"name": "new project cost",
				"value": "newProjectCost"
			},
			{
				"name": "edit project cost",
				"value": "editProjectCost"
			},
			{
				"name": "new project revenue",
				"value": "newProjectRevenue"
			},
			{
				"name": "edit project revenue",
				"value": "editProjectRevenue"
			},
			{
				"name": "new project task cost",
				"value": "newProjectTaskCost"
			},
			{
				"name": "edit project task cost",
				"value": "editProjectTaskCost"
			},
			{
				"name": "new project task revenue",
				"value": "newProjectTaskRevenue"
			},
			{
				"name": "edit project task revenue",
				"value": "editProjectTaskRevenue"
			},
			{
				"name": "new program cost",
				"value": "newProgramCost"
			},
			{
				"name": "edit program cost",
				"value": "editProgramCost"
			},
			{
				"name": "new program revenue",
				"value": "newProgramRevenue"
			},
			{
				"name": "edit program revenue",
				"value": "editProgramRevenue"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "idproject",
		"name": "idproject",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newAssocDocProj"
				]
			}
		}
	},
	{
		"displayName": "idactivity",
		"name": "idactivity",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newAssocDocProj"
				]
			}
		}
	},
	{
		"displayName": "iddocument",
		"name": "iddocument",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newAssocDocProj"
				]
			}
		}
	},
	{
		"displayName": "project id",
		"name": "ProjectId",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"executeProjectTask",
					"newProjectCost",
					"editProjectCost",
					"newProjectRevenue",
					"editProjectRevenue",
					"newProjectTaskCost",
					"editProjectTaskCost",
					"newProjectTaskRevenue",
					"editProjectTaskRevenue"
				]
			}
		}
	},
	{
		"displayName": "project task id",
		"name": "ProjectTaskId",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"executeProjectTask",
					"newProjectTaskCost",
					"editProjectTaskCost",
					"newProjectTaskRevenue",
					"editProjectTaskRevenue"
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
					"executeProjectTask"
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
					"executeProjectTask"
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
					"executeProjectTask"
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
					"executeProjectTask"
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
					"executeProjectTask"
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
					"newProjectCost",
					"editProjectCost",
					"newProjectRevenue",
					"editProjectRevenue",
					"newProjectTaskCost",
					"editProjectTaskCost",
					"newProjectTaskRevenue",
					"editProjectTaskRevenue",
					"newProgramCost",
					"editProgramCost",
					"newProgramRevenue",
					"editProgramRevenue"
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
					"newProjectCost",
					"editProjectCost",
					"newProjectRevenue",
					"editProjectRevenue",
					"newProjectTaskCost",
					"editProjectTaskCost",
					"newProjectTaskRevenue",
					"editProjectTaskRevenue",
					"newProgramCost",
					"editProgramCost",
					"newProgramRevenue",
					"editProgramRevenue"
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
					"newProjectCost",
					"editProjectCost",
					"newProjectRevenue",
					"editProjectRevenue",
					"newProjectTaskCost",
					"editProjectTaskCost",
					"newProjectTaskRevenue",
					"editProjectTaskRevenue",
					"newProgramCost",
					"editProgramCost",
					"newProgramRevenue",
					"editProgramRevenue"
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
					"newProjectCost",
					"editProjectCost",
					"newProjectRevenue",
					"editProjectRevenue",
					"newProjectTaskCost",
					"editProjectTaskCost",
					"newProjectTaskRevenue",
					"editProjectTaskRevenue",
					"newProgramCost",
					"editProgramCost",
					"newProgramRevenue",
					"editProgramRevenue"
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
					"newProjectCost",
					"editProjectCost",
					"newProjectRevenue",
					"editProjectRevenue",
					"newProjectTaskCost",
					"editProjectTaskCost",
					"newProjectTaskRevenue",
					"editProjectTaskRevenue",
					"newProgramCost",
					"editProgramCost",
					"newProgramRevenue",
					"editProgramRevenue"
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
					"newProjectCost",
					"editProjectCost",
					"newProjectRevenue",
					"editProjectRevenue",
					"newProjectTaskCost",
					"editProjectTaskCost",
					"newProjectTaskRevenue",
					"editProjectTaskRevenue",
					"newProgramCost",
					"editProgramCost",
					"newProgramRevenue",
					"editProgramRevenue"
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
					"newProjectCost",
					"editProjectCost",
					"newProjectRevenue",
					"editProjectRevenue",
					"newProjectTaskCost",
					"editProjectTaskCost",
					"newProjectTaskRevenue",
					"editProjectTaskRevenue",
					"newProgramCost",
					"editProgramCost",
					"newProgramRevenue",
					"editProgramRevenue"
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
					"newProjectCost",
					"editProjectCost",
					"newProjectRevenue",
					"editProjectRevenue",
					"newProjectTaskCost",
					"editProjectTaskCost",
					"newProjectTaskRevenue",
					"editProjectTaskRevenue",
					"newProgramCost",
					"editProgramCost",
					"newProgramRevenue",
					"editProgramRevenue"
				]
			}
		}
	},
	{
		"displayName": "program id",
		"name": "ProgramId",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newProgramCost",
					"editProgramCost",
					"newProgramRevenue",
					"editProgramRevenue"
				]
			}
		}
	}
]
    
    
    export default properties;
