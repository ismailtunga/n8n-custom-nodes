
    import {
        ICredentialType,
        INodeProperties,
    } from 'n8n-workflow';
    
    
    export class TrendyolAPICredentials implements ICredentialType {
        name = 'TrendyolAPICredentials';
        displayName = 'TrendyolAPICredentials';
        properties: INodeProperties[] = [
	{
		"displayName": "supplierId",
		"name": "supplierId",
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
	},
	{
		"displayName": "api key",
		"name": "apiKey",
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
	},
	{
		"displayName": "api secure key",
		"name": "apiSecureKey",
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
        
