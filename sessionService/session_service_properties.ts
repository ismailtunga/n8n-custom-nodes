
import {
    INodeProperties
} from "n8n-workflow";
    
const properties :  INodeProperties[] =  [
	{
		"displayName": "operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {}
		},
		"options": [
			{
				"name": "create session",
				"value": "CREATE"
			},
			{
				"name": "update data",
				"value": "PATCH"
			},
			{
				"name": "delete session",
				"value": "DELETE"
			},
			{
				"name": "get session data",
				"value": "GET"
			}
		]
	},
	{
		"displayName": "session id",
		"name": "id",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"PATCH",
					"DELETE",
					"GET"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "data",
		"name": "data",
		"type": "json",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"PATCH"
				]
			}
		},
		"options": []
	}
]
export default properties;