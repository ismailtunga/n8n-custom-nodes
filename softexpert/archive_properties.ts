
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
				"name": "new physical file loan",
				"value": "newPhysicalFileLoan"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "user id",
		"name": "UserID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newPhysicalFileLoan"
				]
			}
		}
	},
	{
		"displayName": "loan date",
		"name": "LoanDate",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newPhysicalFileLoan"
				]
			}
		}
	},
	{
		"displayName": "document id",
		"name": "DocumentID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newPhysicalFileLoan"
				]
			}
		}
	},
	{
		"displayName": "category id",
		"name": "CategoryID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newPhysicalFileLoan"
				]
			}
		}
	},
	{
		"displayName": "devolution date",
		"name": "DevolutionDate",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newPhysicalFileLoan"
				]
			}
		}
	},
	{
		"displayName": "reason id",
		"name": "ReasonID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newPhysicalFileLoan"
				]
			}
		}
	}
]
    
    
    export default properties;
