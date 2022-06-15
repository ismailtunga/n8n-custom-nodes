
import {
    INodeProperties
} from "n8n-workflow";
    
const properties :  INodeProperties[] =  [
	{
		"displayName": "base64",
		"name": "base64",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "Base64 represantation of the file",
		"typeOptions": {},
		"displayOptions": {
			"show": {}
		},
		"options": []
	},
	{
		"displayName": "remove after first access",
		"name": "removeAfterFirstAccess",
		"type": "boolean",
		"default": "",
		"placeholder": "",
		"description": "removes the file after first access",
		"typeOptions": {},
		"displayOptions": {
			"show": {}
		},
		"options": []
	},
	{
		"options": [],
		"displayName": "expire in (ms)",
		"name": "expireIn",
		"type": "number",
		"default": "",
		"placeholder": "",
		"description": "This will delete file after expiration in ms",
		"typeOptions": {},
		"displayOptions": {
			"show": {}
		}
	},
	{
		"displayName": "extension",
		"name": "extension",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {}
		},
		"options": []
	}
]
export default properties;