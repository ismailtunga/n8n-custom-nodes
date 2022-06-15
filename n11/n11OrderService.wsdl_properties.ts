
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
				"name": "order list",
				"value": "OrderList"
			},
			{
				"name": "detailed order list",
				"value": "DetailedOrderList"
			},
			{
				"name": "order item accept",
				"value": "OrderItemAccept"
			},
			{
				"name": "order item reject",
				"value": "OrderItemReject"
			},
			{
				"name": "make order item shipment",
				"value": "MakeOrderItemShipment"
			},
			{
				"name": "order detail",
				"value": "OrderDetail"
			},
			{
				"name": "complementary item detail",
				"value": "ComplementaryItemDetail"
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
					"OrderList",
					"DetailedOrderList"
				]
			}
		},
		"options": [
			{
				"displayName": "product id",
				"name": "productId",
				"type": "number",
				"default": ""
			},
			{
				"displayName": "status",
				"name": "status",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "buyer name",
				"name": "buyerName",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "order number",
				"name": "orderNumber",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "product seller code",
				"name": "productSellerCode",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "recipient",
				"name": "recipient",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "same day delivery",
				"name": "sameDayDelivery",
				"type": "boolean",
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
			},
			{
				"displayName": "sort for update date",
				"name": "sortForUpdateDate",
				"type": "boolean",
				"default": ""
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
					"OrderList",
					"DetailedOrderList"
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
		"displayName": "order item list",
		"name": "orderItemList",
		"type": "fixedCollection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"OrderItemAccept",
					"OrderItemReject",
					"MakeOrderItemShipment",
					"ComplementaryItemDetail"
				]
			}
		},
		"typeOptions": {
			"multipleValues": true
		},
		"options": [
			{
				"displayName": "order item",
				"name": "orderItem",
				"type": "collection",
				"default": {},
				"values": [
					{
						"displayName": "id",
						"name": "id",
						"type": "number",
						"default": ""
					}
				]
			}
		]
	},
	{
		"displayName": "number of packages",
		"name": "numberOfPackages",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"OrderItemAccept"
				]
			}
		}
	},
	{
		"displayName": "reject reason",
		"name": "rejectReason",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"OrderItemReject"
				]
			}
		}
	},
	{
		"displayName": "reject reason type",
		"name": "rejectReasonType",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"OrderItemReject"
				]
			}
		}
	},
	{
		"displayName": "order request",
		"name": "orderRequest",
		"type": "collection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"OrderDetail"
				]
			}
		},
		"options": [
			{
				"displayName": "id",
				"name": "id",
				"type": "number",
				"default": ""
			}
		]
	}
]
    
    
    export default properties;
