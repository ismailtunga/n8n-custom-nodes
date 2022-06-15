
import {
    INodeProperties
} from "n8n-workflow";
    
const properties :  INodeProperties[] =  [
	{
		"displayName": "Operation",
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
				"name": "iyzilink save product",
				"value": "iyzipay.iyzilink.create"
			}
		]
	},
	{
		"options": [
			{
				"name": "TR",
				"value": "tr"
			},
			{
				"name": "EN",
				"value": "en"
			}
		],
		"displayName": "Locale",
		"name": "locale",
		"type": "options",
		"default": "",
		"placeholder": "",
		"description": "Language",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"iyzipay.iyzilink.create"
				]
			}
		}
	},
	{
		"options": [],
		"displayName": "Conversation Id",
		"name": "conversationId",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"iyzipay.iyzilink.create"
				]
			}
		}
	},
	{
		"displayName": "Name",
		"name": "name",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "Name of the product",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"iyzipay.iyzilink.create"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "Description",
		"name": "description",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "description of the product",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"iyzipay.iyzilink.create"
				]
			}
		},
		"options": []
	},
	{
		"options": [],
		"displayName": "Price",
		"name": "price",
		"type": "number",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"iyzipay.iyzilink.create"
				]
			}
		}
	},
	{
		"options": [
			{
				"name": "TRY",
				"value": "TRY"
			},
			{
				"name": "EUR",
				"value": "EUR"
			},
			{
				"name": "USD",
				"value": "USD"
			},
			{
				"name": "IRR",
				"value": "IRR"
			},
			{
				"name": "GBP",
				"value": "GBP"
			},
			{
				"name": "NOK",
				"value": "NOK"
			},
			{
				"name": "RUB",
				"value": "RUB"
			},
			{
				"name": "CHF",
				"value": "CHF"
			}
		],
		"displayName": "Currency",
		"name": "currency",
		"type": "options",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"iyzipay.iyzilink.create"
				]
			}
		}
	},
	{
		"displayName": "Address Ignorable",
		"name": "addressIgnorable",
		"type": "boolean",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"iyzipay.iyzilink.create"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "Sold Limit",
		"name": "soldLimit",
		"type": "number",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"iyzipay.iyzilink.create"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "Installment Request",
		"name": "installmentRequest",
		"type": "boolean",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"iyzipay.iyzilink.create"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "Base64 Image",
		"name": "base64EncodedImage",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"iyzipay.iyzilink.create"
				]
			}
		},
		"options": []
	}
]
export default properties;