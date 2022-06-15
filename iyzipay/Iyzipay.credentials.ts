
    import {
        ICredentialType,
        INodeProperties,
    } from 'n8n-workflow';
    
    
    export class Iyzipay implements ICredentialType {
        name = 'Iyzipay';
        displayName = 'Iyzipay';
        properties: INodeProperties[] = [
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
		"displayName": "secret key",
		"name": "secretKey",
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
		"displayName": "uri",
		"name": "uri",
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
        
