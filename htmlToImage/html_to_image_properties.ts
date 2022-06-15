
import {
    INodeProperties
} from "n8n-workflow";
    
const properties :  INodeProperties[] =  [
	{
		"displayName": "html",
		"name": "html",
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
		"displayName": "width",
		"name": "width",
		"type": "number",
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
		"displayName": "height",
		"name": "height",
		"type": "number",
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