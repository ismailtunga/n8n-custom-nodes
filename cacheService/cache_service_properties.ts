
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
				"name": "get",
				"value": "get"
			},
			{
				"name": "store",
				"value": "store"
			}
		]
	},
	{
		"displayName": "name",
		"name": "name",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {}
		},
		"options": []
	},
	{
		"displayName": "query",
		"name": "query",
		"type": "json",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {}
		},
		"options": []
	},
	{
		"displayName": "data",
		"name": "data",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"store"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "expiresIn",
		"name": "expiresIn",
		"type": "number",
		"default": 5 * 60,
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"store"
				]
			}
		},
		"options": []
	}
]
export default properties;