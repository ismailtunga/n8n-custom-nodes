
import {
    INodeProperties
    } from "n8n-workflow";
    
    const properties :  INodeProperties[] =  
        [
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"options": [
			{
				"name": "new key word request",
				"value": "newKeyWordRequest"
			},
			{
				"name": "send request to approv",
				"value": "sendRequestToApprov"
			},
			{
				"name": "get key word request status",
				"value": "getKeyWordRequestStatus"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "idrequest",
		"name": "idrequest",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newKeyWordRequest",
					"sendRequestToApprov",
					"getKeyWordRequestStatus"
				]
			}
		}
	},
	{
		"displayName": "nmrequest",
		"name": "nmrequest",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newKeyWordRequest"
				]
			}
		}
	},
	{
		"displayName": "idrequesttype",
		"name": "idrequesttype",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newKeyWordRequest"
				]
			}
		}
	},
	{
		"displayName": "iduseremit",
		"name": "iduseremit",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newKeyWordRequest"
				]
			}
		}
	},
	{
		"displayName": "dsrequest",
		"name": "dsrequest",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newKeyWordRequest"
				]
			}
		}
	},
	{
		"displayName": "dsreason",
		"name": "dsreason",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newKeyWordRequest"
				]
			}
		}
	},
	{
		"displayName": "dtrequestenddate",
		"name": "dtrequestenddate",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newKeyWordRequest"
				]
			}
		}
	},
	{
		"displayName": "attributes",
		"name": "attributes",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newKeyWordRequest"
				]
			}
		}
	},
	{
		"displayName": "idapprovalroute",
		"name": "idapprovalroute",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newKeyWordRequest"
				]
			}
		}
	}
]
    
    
    export default properties;
