
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
				"name": "import training presence list",
				"value": "importTrainingPresenceList"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "idtrain",
		"name": "IDTRAIN",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importTrainingPresenceList"
				]
			}
		}
	},
	{
		"displayName": "idtrainuser",
		"name": "IDTRAINUSER",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importTrainingPresenceList"
				]
			}
		}
	},
	{
		"displayName": "idtraincalendar",
		"name": "IDTRAINCALENDAR",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importTrainingPresenceList"
				]
			}
		}
	},
	{
		"displayName": "fgpresence",
		"name": "FGPRESENCE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importTrainingPresenceList"
				]
			}
		}
	},
	{
		"displayName": "idshift",
		"name": "IDSHIFT",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importTrainingPresenceList"
				]
			}
		}
	}
]
    
    
    export default properties;
