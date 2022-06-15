
    import {
        ICredentialType,
        INodeProperties,
    } from 'n8n-workflow';
    
    
    export class ManageEngineServiceDesk implements ICredentialType {
        name = 'ManageEngineServiceDesk';
        displayName = 'Manage Engine Service Desk Credentials';
        properties: INodeProperties[] = [
	{
		"displayName": "technician key",
		"name": "technician_key",
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
		"displayName": "base url",
		"name": "base_url",
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
        
