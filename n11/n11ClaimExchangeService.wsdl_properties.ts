
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
				"name": "claim exchange deny with confirm",
				"value": "ClaimExchangeDenyWithConfirm"
			},
			{
				"name": "claim exchange list",
				"value": "ClaimExchangeList"
			},
			{
				"name": "claim exchange deny",
				"value": "ClaimExchangeDeny"
			},
			{
				"name": "claim exchange pending",
				"value": "ClaimExchangePending"
			},
			{
				"name": "exchange deny reason types",
				"value": "ExchangeDenyReasonTypes"
			},
			{
				"name": "exchange pending reason types",
				"value": "ExchangePendingReasonTypes"
			},
			{
				"name": "exchange approve by cargo campaign",
				"value": "ExchangeApproveByCargoCampaign"
			},
			{
				"name": "exchange approve by receipt number",
				"value": "ExchangeApproveByReceiptNumber"
			},
			{
				"name": "exchange approve by tracking number",
				"value": "ExchangeApproveByTrackingNumber"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "claim exchange id",
		"name": "claimExchangeId",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"ClaimExchangeDenyWithConfirm",
					"ClaimExchangeDeny",
					"ClaimExchangePending",
					"ExchangeApproveByCargoCampaign",
					"ExchangeApproveByReceiptNumber",
					"ExchangeApproveByTrackingNumber"
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
					"ClaimExchangeDenyWithConfirm",
					"ClaimExchangeDeny"
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
					"ClaimExchangeList"
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
					"ClaimExchangeList"
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
		"displayName": "exchange shipment type",
		"name": "exchangeShipmentType",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"ClaimExchangeDeny"
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
					"ClaimExchangeDeny",
					"ExchangeApproveByTrackingNumber"
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
					"ClaimExchangeDeny",
					"ExchangeApproveByTrackingNumber"
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
					"ClaimExchangeDeny",
					"ExchangeApproveByReceiptNumber"
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
					"ClaimExchangePending"
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
					"ClaimExchangePending"
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
					"ClaimExchangePending"
				]
			}
		}
	}
]
    
    
    export default properties;
