
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
				"name": "get settlement list",
				"value": "GetSettlementList"
			},
			{
				"name": "get settlement detail",
				"value": "GetSettlementDetail"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "start date",
		"name": "startDate",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"GetSettlementList"
				]
			}
		}
	},
	{
		"displayName": "end date",
		"name": "endDate",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"GetSettlementList"
				]
			}
		}
	},
	{
		"displayName": "paging data",
		"name": "pagingData",
		"type": "collection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"GetSettlementList",
					"GetSettlementDetail"
				]
			}
		},
		"options": [
			{
				"displayName": "current page",
				"name": "currentPage",
				"type": "number",
				"default": ""
			},
			{
				"displayName": "page size",
				"name": "pageSize",
				"type": "number",
				"default": ""
			}
		]
	},
	{
		"displayName": "date",
		"name": "date",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"GetSettlementDetail"
				]
			}
		}
	}
]
    
    
    export default properties;
