
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
				"name": "create product",
				"value": "CREATE_PRODUCT"
			},
			{
				"name": "get batch request",
				"value": "GET_BATCH_REQUEST"
			},
			{
				"name": "update product",
				"value": "UPDATE_PRODUCT"
			},
			{
				"name": "filter products",
				"value": "FILTER_PRODUCTS"
			},
			{
				"name": "update price and inventory",
				"value": "UPDATE_PRICE_AND_INVENTORY"
			}
		]
	},
	{
		"options": [
			{
				"name": "list",
				"displayName": "list",
				"values": [
					{
						"displayName": "barcode",
						"name": "barcode",
						"type": "string",
						"default": "",
						"placeholder": "",
						"description": "",
						"typeOptions": {
						
						},
						"options": []
					},
					{
						"displayName": "title",
						"name": "title",
						"type": "string",
						"default": "",
						"placeholder": "",
						"description": "",
						"typeOptions": {
							
						},
						"options": []
					},
					{
						"displayName": "productMainId",
						"name": "productMainId",
						"type": "string",
						"default": "",
						"placeholder": "",
						"description": "",
						"typeOptions": {
							
						},
						"options": []
					},
					{
						"options": [],
						"displayName": "brandId",
						"name": "brandId",
						"type": "options",
						"default": "",
						"placeholder": "",
						"description": "",
						"typeOptions": {
							"loadOptionsMethod": "BrandLoader"
						}
					},
					{
						"options": [],
						"displayName": "categoryId",
						"name": "categoryId",
						"type": "options",
						"default": "",
						"placeholder": "",
						"description": "",
						"typeOptions": {
							"loadOptionsMethod": "CategoryLoader"
						}
					},
					{
						"displayName": "quantity",
						"name": "quantity",
						"type": "number",
						"default": "",
						"placeholder": "",
						"description": "",
						"typeOptions": {
							
						},
						"options": []
					},
					{
						"displayName": "stockCode",
						"name": "stockCode",
						"type": "string",
						"default": "",
						"placeholder": "",
						"description": "",
						"typeOptions": {
							
						},
						"options": []
					},
					{
						"displayName": "dimensionalWeight",
						"name": "dimensionalWeight",
						"type": "string",
						"default": "",
						"placeholder": "",
						"description": "",
						"typeOptions": {
							
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
						"typeOptions": {
							
						},
						"options": []
					},
					{
						"options": [
							{
								"name": "TRY",
								"value": "TRY"
							}
						],
						"displayName": "currencyType",
						"name": "currencyType",
						"type": "options",
						"default": "",
						"placeholder": "",
						"description": ""
					},
					{
						"options": [],
						"displayName": "salePrice",
						"name": "salePrice",
						"type": "number",
						"default": "",
						"placeholder": "",
						"description": "",
						"typeOptions": {
							
						}
					},
					{
						"displayName": "listPrice",
						"name": "listPrice",
						"type": "number",
						"default": "",
						"placeholder": "",
						"description": "",
						"typeOptions": {
							
						},
						"options": []
					},
					{
						"displayName": "vatRate",
						"name": "vatRate",
						"type": "number",
						"default": "",
						"placeholder": "",
						"description": "",
						"typeOptions": {
							
						},
						"options": []
					},
					{
						"options": [],
						"displayName": "cargoCompanyId",
						"name": "cargoCompanyId",
						"type": "options",
						"default": "",
						"placeholder": "",
						"description": "",
						"typeOptions": {
							"loadOptionsMethod": "ShipmentLoader"
						}
					},
					{
						"displayName": "images",
						"name": "images",
						"type": "fixedCollection",
						"default": "",
						"placeholder": "",
						"description": "",
						"options": [
							{
								"displayName": "url",
								"name": "url",
								"type": "string",
								"default": "",
								"placeholder": "",
								"description": ""
							}
						]
					},
					{
						"displayName": "attributes",
						"name": "attributes",
						"type": "fixedCollection",
						"default": "",
						"placeholder": "",
						"description": "",
						"typeOptions": {
							
						},
						"options": [
							{
								"displayName": "attributeId",
								"name": "attributeId",
								"type": "string",
								"default": "",
								"placeholder": "",
								"description": ""
							},
							{
								"displayName": "attributeValue",
								"name": "attributeValue",
								"type": "string",
								"default": "",
								"placeholder": "",
								"description": ""
							}
						]
					}
				]
			}
		],
		"displayName": "items",
		"name": "items",
		"type": "fixedCollection",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {
			"multipleValues": true
		},
		"displayOptions": {
			"show": {
				"operation": [
					"CREATE_PRODUCT",
					"UPDATE_PRODUCT",
					"UPDATE_PRICE_AND_INVENTORY"
				]
			}
		}
	},
	{
		"displayName": "batchRequestId",
		"name": "batchRequestId",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"GET_BATCH_REQUEST"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "approved",
		"name": "approved",
		"type": "boolean",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"FILTER_PRODUCTS"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "barcode",
		"name": "barcode",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"FILTER_PRODUCTS"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "startDate",
		"name": "startDate",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"FILTER_PRODUCTS"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "endDate",
		"name": "endDate",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"FILTER_PRODUCTS"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "page",
		"name": "page",
		"type": "number",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"FILTER_PRODUCTS"
				]
			}
		},
		"options": []
	},
	{
		"options": [
			{
				"name": "CREATED DATE",
				"value": "CREATED_DATE"
			},
			{
				"name": "LAST MODIFIED DATE",
				"value": "LAST_MODIFIED_DATE"
			}
		],
		"displayName": "dateQueryType",
		"name": "dateQueryType",
		"type": "options",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"FILTER_PRODUCTS"
				]
			}
		}
	},
	{
		"displayName": "size",
		"name": "size",
		"type": "number",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"FILTER_PRODUCTS"
				]
			}
		},
		"options": []
	}
]
export default properties;