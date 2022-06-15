
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
				"name": "get sap commission e invoice detail",
				"value": "GetSapCommissionEInvoiceDetail"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "date",
		"name": "date",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"GetSapCommissionEInvoiceDetail"
				]
			}
		}
	}
]
    
    
    export default properties;
