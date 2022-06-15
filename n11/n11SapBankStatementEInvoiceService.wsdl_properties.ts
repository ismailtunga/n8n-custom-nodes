
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
				"name": "get sap bank statement e invoice",
				"value": "GetSapBankStatementEInvoice"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "start date",
		"name": "startDate",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"GetSapBankStatementEInvoice"
				]
			}
		}
	},
	{
		"displayName": "end date",
		"name": "endDate",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"GetSapBankStatementEInvoice"
				]
			}
		}
	}
]
    
    
    export default properties;
