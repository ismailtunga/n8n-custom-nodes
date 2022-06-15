
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
				"name": "get all",
				"value": "GET_ALL"
			},
			{
				"name": "get request",
				"value": "GET_REQUEST"
			},
			{
				"name": "add request",
				"value": "ADD_REQUEST"
			},
			{
				"name": "update request",
				"value": "UPDATE_REQUEST"
			},
			{
				"name": "delete request",
				"value": "DELETE_REQUEST"
			}
		]
	},
	{
		"displayName": "request id",
		"name": "request_id",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"UPDATE_REQUEST",
					"GET_REQUEST",
					"DELETE_REQUEST"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "technician",
		"name": "technician",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"UPDATE_REQUEST"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "subject",
		"name": "subject",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"ADD_REQUEST",
					"UPDATE_REQUEST"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "description",
		"name": "description",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"ADD_REQUEST",
					"UPDATE_REQUEST"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "requester name",
		"name": "requester_name",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "requester name in manage engine user",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"ADD_REQUEST",
					"UPDATE_REQUEST"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "impact details",
		"name": "impact_details",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"ADD_REQUEST",
					"UPDATE_REQUEST"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "resolution",
		"name": "resolution",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"ADD_REQUEST",
					"UPDATE_REQUEST"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "status",
		"name": "status",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"ADD_REQUEST",
					"UPDATE_REQUEST"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "category",
		"name": "category",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"ADD_REQUEST",
					"UPDATE_REQUEST"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "subcategory",
		"name": "subcategory",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"ADD_REQUEST",
					"UPDATE_REQUEST"
				]
			}
		},
		"options": []
	},
	
]
export default properties;