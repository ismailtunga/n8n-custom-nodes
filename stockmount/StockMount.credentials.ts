
    import {
        ICredentialType,
        INodeProperties,
    } from 'n8n-workflow';
    
    
    export class StockMount implements ICredentialType {
        name = 'StockMount';
        displayName = 'Stock Mount Crendentials';
        properties: INodeProperties[] = [
	{
		"options": [],
		"displayName": "ApiKey",
		"name": "ApiKey",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {
			"loadOptionsMethod": ""
		},
		"displayOptions": {
			"show": {}
		}
	},
	{
		"displayName": "ApiPassword",
		"name": "ApiPassword",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {
			"loadOptionsMethod": ""
		},
		"displayOptions": {
			"show": {}
		},
		"options": []
	}
]
    }
        
