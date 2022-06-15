
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
				"name": "create corrective maintenance",
				"value": "createCorrectiveMaintenance"
			},
			{
				"name": "insert meter reading",
				"value": "insertMeterReading"
			},
			{
				"name": "insert variable reading",
				"value": "insertVariableReading"
			},
			{
				"name": "new programmed maintenance",
				"value": "newProgrammedMaintenance"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "activity id",
		"name": "ActivityID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createCorrectiveMaintenance",
					"newProgrammedMaintenance"
				]
			}
		}
	},
	{
		"displayName": "model activity id",
		"name": "ModelActivityID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createCorrectiveMaintenance",
					"newProgrammedMaintenance"
				]
			}
		}
	},
	{
		"displayName": "asset id",
		"name": "AssetID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createCorrectiveMaintenance",
					"newProgrammedMaintenance"
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
					"createCorrectiveMaintenance",
					"newProgrammedMaintenance"
				]
			}
		}
	},
	{
		"displayName": "start time",
		"name": "StartTime",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createCorrectiveMaintenance",
					"newProgrammedMaintenance"
				]
			}
		}
	},
	{
		"displayName": "real percentage",
		"name": "RealPercentage",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createCorrectiveMaintenance",
					"newProgrammedMaintenance"
				]
			}
		}
	},
	{
		"displayName": "service center id",
		"name": "ServiceCenterID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createCorrectiveMaintenance",
					"newProgrammedMaintenance"
				]
			}
		}
	},
	{
		"displayName": "technician responsible id",
		"name": "TechnicianResponsibleID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createCorrectiveMaintenance",
					"newProgrammedMaintenance"
				]
			}
		}
	},
	{
		"displayName": "attributes",
		"name": "Attributes",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createCorrectiveMaintenance",
					"newProgrammedMaintenance"
				]
			}
		}
	},
	{
		"displayName": "eval method id",
		"name": "EvalMethodID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createCorrectiveMaintenance",
					"newProgrammedMaintenance"
				]
			}
		}
	},
	{
		"displayName": "eval criteria",
		"name": "EvalCriteria",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createCorrectiveMaintenance",
					"newProgrammedMaintenance"
				]
			}
		}
	},
	{
		"displayName": "id process assoc",
		"name": "IdProcessAssoc",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createCorrectiveMaintenance",
					"newProgrammedMaintenance"
				]
			}
		}
	},
	{
		"displayName": "fg automation",
		"name": "FgAutomation",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createCorrectiveMaintenance",
					"newProgrammedMaintenance"
				]
			}
		}
	},
	{
		"displayName": "idobject",
		"name": "idobject",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"insertMeterReading",
					"insertVariableReading"
				]
			}
		}
	},
	{
		"displayName": "fgaction",
		"name": "fgaction",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"insertMeterReading"
				]
			}
		}
	},
	{
		"displayName": "vlreadvalue",
		"name": "vlreadvalue",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"insertMeterReading",
					"insertVariableReading"
				]
			}
		}
	},
	{
		"displayName": "dtreaddate",
		"name": "dtreaddate",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"insertMeterReading",
					"insertVariableReading"
				]
			}
		}
	},
	{
		"displayName": "qthrread",
		"name": "qthrread",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"insertMeterReading",
					"insertVariableReading"
				]
			}
		}
	},
	{
		"displayName": "idvariable",
		"name": "idvariable",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"insertVariableReading"
				]
			}
		}
	},
	{
		"displayName": "activity step",
		"name": "ActivityStep",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newProgrammedMaintenance"
				]
			}
		}
	},
	{
		"displayName": "start plan date",
		"name": "StartPlanDate",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newProgrammedMaintenance"
				]
			}
		}
	},
	{
		"displayName": "start plan time",
		"name": "StartPlanTime",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newProgrammedMaintenance"
				]
			}
		}
	},
	{
		"displayName": "finish plan date",
		"name": "FinishPlanDate",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newProgrammedMaintenance"
				]
			}
		}
	},
	{
		"displayName": "finish plan time",
		"name": "FinishPlanTime",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newProgrammedMaintenance"
				]
			}
		}
	}
]
    
    
    export default properties;
