
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
				"name": "get shipment companies",
				"value": "GetShipmentCompanies"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	}
]
    
    
    export default properties;
