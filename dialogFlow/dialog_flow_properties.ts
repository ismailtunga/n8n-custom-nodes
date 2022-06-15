
import {
    INodeProperties
} from "n8n-workflow";
    
const properties :  INodeProperties[] =  [
	{
		"displayName": "context",
		"name": "context",
		"type": "multiOptions",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {}
		},
		"options": [
			{
				"name": "TRZaman",
				"value": "TRZaman"
			}
		]
	},
	{
		"displayName": "language",
		"name": "lang",
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
				"name": "tr",
				"value": "tr"
			},
			{
				"name": "en",
				"value": "en"
			}
		]
	},
	{
		"displayName": "query",
		"name": "query",
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
		"displayName": "sessionId",
		"name": "sessionId",
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