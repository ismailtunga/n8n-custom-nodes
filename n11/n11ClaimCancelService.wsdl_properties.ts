
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
				"name": "claim cancel list",
				"value": "ClaimCancelList"
			},
			{
				"name": "claim cancel deny reason type",
				"value": "ClaimCancelDenyReasonType"
			},
			{
				"name": "claim cancel deny",
				"value": "ClaimCancelDeny"
			},
			{
				"name": "claim cancel approve",
				"value": "ClaimCancelApprove"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "search data",
		"name": "searchData",
		"type": "collection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"ClaimCancelList"
				]
			}
		},
		"options": [
			{
				"displayName": "status",
				"name": "status",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "executer",
				"name": "executer",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "search info type",
				"name": "searchInfoType",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "search query",
				"name": "searchQuery",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "search date",
				"name": "searchDate",
				"type": "collection",
				"default": {},
				"options": [
					{
						"displayName": "search date type",
						"name": "searchDateType",
						"type": "string",
						"default": ""
					},
					{
						"displayName": "period",
						"name": "period",
						"type": "collection",
						"default": {},
						"options": [
							{
								"displayName": "start date",
								"name": "startDate",
								"type": "string",
								"default": ""
							},
							{
								"displayName": "end date",
								"name": "endDate",
								"type": "string",
								"default": ""
							}
						]
					}
				]
			}
		]
	},
	{
		"displayName": "paging data",
		"name": "pagingData",
		"type": "collection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"ClaimCancelList"
				]
			}
		},
		"options": [
			{
				"displayName": "current page",
				"name": "currentPage",
				"type": "number",
				"default": ""
			}
		]
	},
	{
		"displayName": "claim cancel id",
		"name": "claimCancelId",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"ClaimCancelDeny",
					"ClaimCancelApprove"
				]
			}
		}
	},
	{
		"displayName": "deny reason id",
		"name": "denyReasonId",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"ClaimCancelDeny"
				]
			}
		}
	},
	{
		"displayName": "deny reason note",
		"name": "denyReasonNote",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"ClaimCancelDeny"
				]
			}
		}
	}
]
    
    
    export default properties;
