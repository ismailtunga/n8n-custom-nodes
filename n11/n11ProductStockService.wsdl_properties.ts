
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
				"name": "get product stock by product id",
				"value": "GetProductStockByProductId"
			},
			{
				"name": "get product stock by product seller code",
				"value": "GetProductStockByProductSellerCode"
			},
			{
				"name": "increase stock by stock id",
				"value": "IncreaseStockByStockId"
			},
			{
				"name": "increase stock by stock seller code",
				"value": "IncreaseStockByStockSellerCode"
			},
			{
				"name": "increase stock by stock attributes",
				"value": "IncreaseStockByStockAttributes"
			},
			{
				"name": "update stock by stock id",
				"value": "UpdateStockByStockId"
			},
			{
				"name": "update stock by stock seller code",
				"value": "UpdateStockByStockSellerCode"
			},
			{
				"name": "delete and update stock by stock attributes",
				"value": "DeleteAndUpdateStockByStockAttributes"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "product id",
		"name": "productId",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"GetProductStockByProductId"
				]
			}
		}
	},
	{
		"displayName": "product seller code",
		"name": "productSellerCode",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"GetProductStockByProductSellerCode"
				]
			}
		}
	},
	{
		"displayName": "stock items",
		"name": "stockItems",
		"type": "collection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"IncreaseStockByStockId",
					"IncreaseStockByStockSellerCode",
					"UpdateStockByStockId",
					"UpdateStockByStockSellerCode"
				]
			}
		},
		"options": [
			{
				"displayName": "stock item",
				"name": "stockItem",
				"type": "collection",
				"default": {},
				"options": [
					{
						"displayName": "id",
						"name": "id",
						"type": "number",
						"default": ""
					},
					{
						"displayName": "quantity to increase",
						"name": "quantityToIncrease",
						"type": "number",
						"default": ""
					},
					{
						"displayName": "version",
						"name": "version",
						"type": "number",
						"default": ""
					}
				]
			}
		]
	},
	{
		"displayName": "product",
		"name": "product",
		"type": "collection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"IncreaseStockByStockAttributes",
					"DeleteAndUpdateStockByStockAttributes"
				]
			}
		},
		"options": [
			{
				"displayName": "id",
				"name": "id",
				"type": "number",
				"default": ""
			},
			{
				"displayName": "stock items",
				"name": "stockItems",
				"type": "collection",
				"default": {},
				"options": [
					{
						"displayName": "stock item",
						"name": "stockItem",
						"type": "collection",
						"default": {},
						"options": [
							{
								"displayName": "attributes",
								"name": "attributes",
								"type": "collection",
								"default": {},
								"options": [
									{
										"displayName": "attribute",
										"name": "attribute",
										"type": "collection",
										"default": {},
										"options": [
											{
												"displayName": "name",
												"name": "name",
												"type": "string",
												"default": ""
											},
											{
												"displayName": "value",
												"name": "value",
												"type": "string",
												"default": ""
											}
										]
									}
								]
							},
							{
								"displayName": "quantity to increase",
								"name": "quantityToIncrease",
								"type": "number",
								"default": ""
							},
							{
								"displayName": "version",
								"name": "version",
								"type": "number",
								"default": ""
							}
						]
					}
				]
			}
		]
	}
]
    
    
    export default properties;
