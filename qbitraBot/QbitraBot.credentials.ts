
    import {
        ICredentialType,
        INodeProperties,
    } from 'n8n-workflow';
    
    
    export class QbitraBot implements ICredentialType {
        name = 'QbitraBot';
        displayName = 'Qbitra Bot Crendentials';
        properties: INodeProperties[] = [
	{
		"displayName": "username",
		"name": "username",
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
		"displayName": "password",
		"name": "password",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		typeOptions: {
			password: true,
		},
		"displayOptions": {
			"show": {}
		},
		"options": []
	},
	{
		"displayName": "url",
		"name": "url",
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
        
