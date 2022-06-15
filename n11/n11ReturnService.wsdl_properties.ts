
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
				"name": "claim return pending",
				"value": "ClaimReturnPending"
			},
			{
				"name": "claim return deny reason types",
				"value": "ClaimReturnDenyReasonTypes"
			},
			{
				"name": "claim return pending reason types",
				"value": "ClaimReturnPendingReasonTypes"
			},
			{
				"name": "claim return approve",
				"value": "ClaimReturnApprove"
			},
			{
				"name": "claim return deny",
				"value": "ClaimReturnDeny"
			},
			{
				"name": "claim return list",
				"value": "ClaimReturnList"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "claim return id",
		"name": "claimReturnId",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"ClaimReturnPending",
					"ClaimReturnApprove",
					"ClaimReturnDeny"
				]
			}
		}
	},
	{
		"displayName": "pending reason id",
		"name": "pendingReasonId",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"ClaimReturnPending"
				]
			}
		}
	},
	{
		"displayName": "pending day count",
		"name": "pendingDayCount",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"ClaimReturnPending"
				]
			}
		}
	},
	{
		"displayName": "pending reason note",
		"name": "pendingReasonNote",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"ClaimReturnPending"
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
					"ClaimReturnDeny"
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
					"ClaimReturnDeny"
				]
			}
		}
	},
	{
		"displayName": "return shipment type",
		"name": "returnShipmentType",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"ClaimReturnDeny"
				]
			}
		}
	},
	{
		"displayName": "shipment company id",
		"name": "shipmentCompanyId",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"ClaimReturnDeny"
				]
			}
		}
	},
	{
		"displayName": "tracking number",
		"name": "trackingNumber",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"ClaimReturnDeny"
				]
			}
		}
	},
	{
		"displayName": "delivery receipt number",
		"name": "deliveryReceiptNumber",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"ClaimReturnDeny"
				]
			}
		}
	},
	{
		"displayName": "search data",
		"name": "searchData",
		"type": "collection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"ClaimReturnList"
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
	},
	{
		"displayName": "paging data",
		"name": "pagingData",
		"type": "collection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"ClaimReturnList"
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
	}
]
    
    
    export default properties;
