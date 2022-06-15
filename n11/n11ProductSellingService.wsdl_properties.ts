
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
				"name": "stop selling product by product id",
				"value": "StopSellingProductByProductId"
			},
			{
				"name": "stop selling product by seller code",
				"value": "StopSellingProductBySellerCode"
			},
			{
				"name": "start selling product by product id",
				"value": "StartSellingProductByProductId"
			},
			{
				"name": "start selling product by seller code",
				"value": "StartSellingProductBySellerCode"
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
					"StopSellingProductByProductId",
					"StartSellingProductByProductId"
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
					"StopSellingProductBySellerCode",
					"StartSellingProductBySellerCode"
				]
			}
		}
	}
]
    
    
    export default properties;
