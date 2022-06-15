
    import {
        ICredentialType,
		INodeProperties,
		NodePropertyTypes
    } from 'n8n-workflow';
    
    
    export class CacheService implements ICredentialType {
        name = 'CacheService';
        displayName = 'CacheService';
        properties: INodeProperties[] = [
			{
				displayName: 'Api URL',
				name: 'apiURL',
				type: 'string' as NodePropertyTypes,
				default: 'https://gateway.qbitra.io/cache/',
			},
	{
		"displayName": "apiKey",
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
	}
]
    }
        
