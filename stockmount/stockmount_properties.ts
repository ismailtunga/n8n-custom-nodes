
import {
    INodeProperties
} from "n8n-workflow";
    
const properties :  INodeProperties[] =  [
	{
		"options": [
			{
				"name": "get stores",
				"value": "GET_STORES"
			},
			{
				"name": "get sales",
				"value": "GET_SALES"
			},
			{
				"name": "confirm or reject order item",
				"value": "CONFIRM_OR_REJECT_ORDER_ITEM"
			},
			{
				"name": "get integration shipment companies",
				"value": "GET_INTEGRATION_SHIPMENT_COMPANIES"
			},
			{
				"name": "set order shipment information",
				"value": "SET_ORDER_SHIPMENT_INFORMATION"
			},
			{
				"name": "get integration order listing status",
				"value": "GET_INTEGRATION_ORDER_LISTING_STATUS"
			},
			{
				"name": "get order detail status",
				"value": "GET_ORDER_DETAIL_STATUS"
			},
			{
				"name": "set order",
				"value": "SET_ORDER"
			},
			{
				"name": "set order detail",
				"value": "SET_ORDER_DETAIL"
			},
			{
				"name": "get order",
				"value": "GET_ORDER"
			},
			{
				"name": "get product sources",
				"value": "GET_PRODUCT_SOURCES"
			},
			{
				"name": "get product categories",
				"value": "GET_PRODUCT_CATEGORIES"
			},
			{
				"name": "get product",
				"value": "GET_PRODUCT"
			},
			{
				"name": "add product",
				"value": "ADD_PRODUCT"
			},
			{
				"name": "update product",
				"value": "UPDATE_PRODUCT"
			},
			{
				"name": "stop product",
				"value": "STOP_PRODUCT"
			},
			{
				"name": "delete product",
				"value": "DELETE_PRODUCT"
			},
			{
				"name": "get products",
				"value": "GET_PRODUCTS"
			},
			{
				"name": "update product price",
				"value": "UPDATE_PRODUCT_PRICE"
			}
		],
		"displayName": "operation",
		"name": "operation",
		"type": "options",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {}
		}
	},
	{
		"options": [
			{
				"name": "",
				"value": ""
			}
		],
		"displayName": "Store",
		"name": "StoreId",
		"type": "number",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"GET_STORES",
					"GET_SALES",
					"CONFIRM_OR_REJECT_ORDER_ITEM",
					"SET_ORDER_SHIPMENT_INFORMATION",
					"GET_INTEGRATION_ORDER_LISTING_STATUS",
					"SET_ORDER"
				]
			}
		}
	},
	{
		"options": [
			{
				"name": "GittiGidiyor",
				"value": "1"
			},
			{
				"name": "N11",
				"value": "2"
			},
			{
				"name": "NeTicaret",
				"value": "3"
			},
			{
				"name": "OpenCart",
				"value": "4"
			},
			{
				"name": "ePTTAvm",
				"value": "5"
			},
			{
				"name": "SanalPazar",
				"value": "6"
			},
			{
				"name": "HepsiBurada",
				"value": "8"
			},
			{
				"name": "Ticimax",
				"value": "17"
			},
			{
				"name": "Ideasoft",
				"value": "19"
			},
			{
				"name": "Amazon",
				"value": "20"
			},
			{
				"name": "TSoft",
				"value": "22"
			},
			{
				"name": "StockMount",
				"value": "9999"
			}
		],
		"displayName": "Integration",
		"name": "IntegrationId",
		"type": "options",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"GET_STORES",
					"CONFIRM_OR_REJECT_ORDER_ITEM",
					"GET_INTEGRATION_SHIPMENT_COMPANIES",
					"SET_ORDER_SHIPMENT_INFORMATION",
					"GET_INTEGRATION_ORDER_LISTING_STATUS"
				]
			}
		}
	},
	{
		"displayName": "Order Status",
		"name": "OrderStatus",
		"type": "number",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"GET_SALES"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "SmallestOrderDetailId",
		"name": "SmallestOrderDetailId",
		"type": "number",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"GET_SALES"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "BiggestOrderDetailId",
		"name": "BiggestOrderDetailId",
		"type": "number",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"GET_SALES"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "InvoiceStatus",
		"name": "InvoiceStatus",
		"type": "number",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"GET_SALES"
				]
			}
		},
		"options": []
	},
	{
		"options": [],
		"displayName": "OrderId",
		"name": "OrderId",
		"type": "number",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"GET_SALES",
					"GET_ORDER"
				]
			}
		}
	},
	{
		"displayName": "StartDate",
		"name": "StartDate",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"GET_SALES"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "EndDate",
		"name": "EndDate",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"GET_SALES"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "LastModificationTimeFrom",
		"name": "LastModificationTimeFrom",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"GET_SALES"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "LastModificationTimeTo",
		"name": "LastModificationTimeTo",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"GET_SALES"
				]
			}
		},
		"options": []
	},
	{
		"options": [],
		"displayName": "PageIndex",
		"name": "PageIndex",
		"type": "number",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"GET_SALES"
				]
			}
		}
	},
	{
		"displayName": "RowsByPage",
		"name": "RowsByPage",
		"type": "number",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"GET_SALES"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "IntegrationOrderDetailId",
		"name": "IntegrationOrderDetailId",
		"type": "number",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"CONFIRM_OR_REJECT_ORDER_ITEM"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "OrderItemStatus",
		"name": "OrderItemStatus",
		"type": "options",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"CONFIRM_OR_REJECT_ORDER_ITEM"
				]
			}
		},
		"options": [
			{
				"name": "Confirm",
				"value": "1"
			},
			{
				"name": "Reject",
				"value": "2"
			}
		]
	},
	{
		"displayName": "IntegrationOrderCode",
		"name": "IntegrationOrderCode",
		"type": "number",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"SET_ORDER_SHIPMENT_INFORMATION"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "ShipmentCompany",
		"name": "ShipmentCompany",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"SET_ORDER_SHIPMENT_INFORMATION"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "ShipmentTrackingCode",
		"name": "ShipmentTrackingCode",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"SET_ORDER_SHIPMENT_INFORMATION"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "ShipmentBranch",
		"name": "ShipmentBranch",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"SET_ORDER_SHIPMENT_INFORMATION"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "CampaignNumber",
		"name": "CampaignNumber",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"SET_ORDER_SHIPMENT_INFORMATION"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "ShipmentCompanyId",
		"name": "ShipmentCompanyId",
		"type": "number",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"SET_ORDER_SHIPMENT_INFORMATION"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "OrderDetailId",
		"name": "OrderDetailId",
		"type": "number",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"SET_ORDER_SHIPMENT_INFORMATION"
				]
			}
		},
		"options": []
	},
	{
		"displayName": "SendShipmentInformation",
		"name": "SendShipmentInformation",
		"type": "boolean",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"SET_ORDER_SHIPMENT_INFORMATION"
				]
			}
		},
		"options": []
	},
	{
		"options": [
			{
				"name": "list",
				"displayName": "list",
				"values": [
					{
						"displayName": "OrderId",
						"name": "OrderId",
						"type": "number",
						"default": "",
						"placeholder": "",
						"description": "",
						"typeOptions": {
							"loadOptionsMethod": ""
						},
						"options": []
					},
					{
						"displayName": "OrderDetailId",
						"name": "OrderDetailId",
						"type": "number",
						"default": "",
						"placeholder": "",
						"description": "",
						"typeOptions": {
							"loadOptionsMethod": ""
						},
						"options": []
					},
					{
						"displayName": "StoreId",
						"name": "StoreId",
						"type": "number",
						"default": "",
						"placeholder": "",
						"description": "",
						"typeOptions": {
							"loadOptionsMethod": ""
						},
						"options": []
					},
					{
						"displayName": "OrderStatus",
						"name": "OrderStatus",
						"type": "string",
						"default": "",
						"placeholder": "",
						"description": "",
						"typeOptions": {
							"loadOptionsMethod": ""
						},
						"options": []
					}
				]
			}
		],
		"displayName": "OrderDetails",
		"name": "OrderDetails",
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
					"GET_ORDER_DETAIL_STATUS",
					"SET_ORDER_DETAIL"
				]
			}
		}
	},
	{
		"options": [
			{
				"displayName": "OrderId",
				"name": "OrderId",
				"type": "number",
				"default": "",
				"placeholder": "",
				"description": "",
				"typeOptions": {
					"loadOptionsMethod": ""
				},
				"options": []
			},
			{
				"displayName": "Nickname",
				"name": "Nickname",
				"type": "string",
				"default": "",
				"placeholder": "",
				"description": "",
				"typeOptions": {
					"loadOptionsMethod": ""
				},
				"options": []
			},
			{
				"displayName": "Name",
				"name": "Name",
				"type": "string",
				"default": "",
				"placeholder": "",
				"description": "",
				"typeOptions": {
					"loadOptionsMethod": ""
				},
				"options": []
			},
			{
				"displayName": "Surname",
				"name": "Surname",
				"type": "string",
				"default": "",
				"placeholder": "",
				"description": "",
				"typeOptions": {
					"loadOptionsMethod": ""
				},
				"options": []
			},
			{
				"displayName": "OrderDate",
				"name": "OrderDate",
				"type": "string",
				"default": "",
				"placeholder": "",
				"description": "",
				"typeOptions": {
					"loadOptionsMethod": ""
				},
				"options": []
			},
			{
				"displayName": "IntegrationOrderCode",
				"name": "IntegrationOrderCode",
				"type": "string",
				"default": "",
				"placeholder": "",
				"description": "",
				"typeOptions": {
					"loadOptionsMethod": ""
				},
				"options": []
			},
			{
				"displayName": "OrderStatus",
				"name": "OrderStatus",
				"type": "string",
				"default": "",
				"placeholder": "",
				"description": "",
				"typeOptions": {
					"loadOptionsMethod": ""
				},
				"options": []
			},
			{
				"displayName": "Fullname",
				"name": "Fullname",
				"type": "string",
				"default": "",
				"placeholder": "",
				"description": "",
				"typeOptions": {
					"loadOptionsMethod": ""
				},
				"options": []
			},
			{
				"displayName": "PersonalIdentification",
				"name": "PersonalIdentification",
				"type": "string",
				"default": "",
				"placeholder": "",
				"description": "",
				"typeOptions": {
					"loadOptionsMethod": ""
				},
				"options": []
			},
			{
				"displayName": "TaxNumber",
				"name": "TaxNumber",
				"type": "string",
				"default": "",
				"placeholder": "",
				"description": "",
				"typeOptions": {
					"loadOptionsMethod": ""
				},
				"options": []
			},
			{
				"displayName": "TaxAuthority",
				"name": "TaxAuthority",
				"type": "string",
				"default": "",
				"placeholder": "",
				"description": "",
				"typeOptions": {
					"loadOptionsMethod": ""
				},
				"options": []
			},
			{
				"displayName": "Telephone",
				"name": "Telephone",
				"type": "string",
				"default": "",
				"placeholder": "",
				"description": "",
				"typeOptions": {
					"loadOptionsMethod": ""
				},
				"options": []
			},
			{
				"displayName": "Address",
				"name": "Address",
				"type": "string",
				"default": "",
				"placeholder": "",
				"description": "",
				"typeOptions": {
					"loadOptionsMethod": ""
				},
				"options": []
			},
			{
				"displayName": "District",
				"name": "District",
				"type": "string",
				"default": "",
				"placeholder": "",
				"description": "",
				"typeOptions": {
					"loadOptionsMethod": ""
				},
				"options": []
			},
			{
				"displayName": "City",
				"name": "City",
				"type": "string",
				"default": "",
				"placeholder": "",
				"description": "",
				"typeOptions": {
					"loadOptionsMethod": ""
				},
				"options": []
			},
			{
				"displayName": "Notes",
				"name": "Notes",
				"type": "string",
				"default": "",
				"placeholder": "",
				"description": "",
				"typeOptions": {
					"loadOptionsMethod": ""
				},
				"options": []
			},
			{
				"displayName": "OrderDetails",
				"name": "OrderDetails",
				"type": "string",
				"default": "",
				"placeholder": "",
				"description": "",
				"typeOptions": {
					"loadOptionsMethod": ""
				},
				"options": []
			}
		],
		"displayName": "Order",
		"name": "Order",
		"type": "collection",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"SET_ORDER"
				]
			}
		}
	},
	{
		"options": [],
		"displayName": "ProductSourceId",
		"name": "ProductSourceId",
		"type": "number",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"GET_PRODUCT_CATEGORIES",
					"GET_PRODUCT",
					"ADD_PRODUCT",
					"UPDATE_PRODUCT",
					"STOP_PRODUCT",
					"DELETE_PRODUCT",
					"GET_PRODUCTS",
					"UPDATE_PRODUCT_PRICE"
				]
			}
		}
	},
	{
		"options": [],
		"displayName": "ProductId",
		"name": "ProductId",
		"type": "number",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"GET_PRODUCT",
					"ADD_PRODUCT",
					"UPDATE_PRODUCT",
					"STOP_PRODUCT",
					"DELETE_PRODUCT",
					"GET_PRODUCTS",
					"UPDATE_PRODUCT_PRICE"
				]
			}
		}
	},
	{
		"options": [],
		"displayName": "Code",
		"name": "Code",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"GET_PRODUCT",
					"ADD_PRODUCT",
					"UPDATE_PRODUCT",
					"STOP_PRODUCT",
					"DELETE_PRODUCT",
					"GET_PRODUCTS",
					"UPDATE_PRODUCT_PRICE"
				]
			}
		}
	},
	{
		"options": [],
		"displayName": "Description",
		"name": "Description",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"ADD_PRODUCT",
					"UPDATE_PRODUCT",
					"UPDATE_PRODUCT_PRICE"
				]
			}
		}
	},
	{
		"options": [],
		"displayName": "Code2",
		"name": "Code2",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"ADD_PRODUCT",
					"UPDATE_PRODUCT",
					"UPDATE_PRODUCT_PRICE"
				]
			}
		}
	},
	{
		"options": [],
		"displayName": "Barcode",
		"name": "Barcode",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"ADD_PRODUCT",
					"UPDATE_PRODUCT",
					"UPDATE_PRODUCT_PRICE"
				]
			}
		}
	},
	{
		"options": [],
		"displayName": "Name",
		"name": "Name",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"ADD_PRODUCT",
					"UPDATE_PRODUCT",
					"UPDATE_PRODUCT_PRICE"
				]
			}
		}
	},
	{
		"options": [],
		"displayName": "Subtitle",
		"name": "Subtitle",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"ADD_PRODUCT",
					"UPDATE_PRODUCT"
				]
			}
		}
	},
	{
		"options": [],
		"displayName": "Price",
		"name": "Price",
		"type": "number",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"ADD_PRODUCT",
					"UPDATE_PRODUCT",
					"UPDATE_PRODUCT_PRICE"
				]
			}
		}
	},
	{
		"options": [],
		"displayName": "Quantity",
		"name": "Quantity",
		"type": "number",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"ADD_PRODUCT",
					"UPDATE_PRODUCT",
					"UPDATE_PRODUCT_PRICE"
				]
			}
		}
	},
	{
		"options": [],
		"displayName": "Brand",
		"name": "Brand",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"ADD_PRODUCT",
					"UPDATE_PRODUCT_PRICE"
				]
			}
		}
	},
	{
		"options": [],
		"displayName": "TaxRate",
		"name": "TaxRate",
		"type": "number",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"ADD_PRODUCT",
					"UPDATE_PRODUCT",
					"UPDATE_PRODUCT_PRICE"
				]
			}
		}
	},
	{
		"options": [],
		"displayName": "Model",
		"name": "Model",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"ADD_PRODUCT",
					"UPDATE_PRODUCT",
					"UPDATE_PRODUCT_PRICE"
				]
			}
		}
	},
	{
		"options": [],
		"displayName": "Category",
		"name": "Category",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"ADD_PRODUCT",
					"UPDATE_PRODUCT",
					"UPDATE_PRODUCT_PRICE"
				]
			}
		}
	},
	{
		"options": [],
		"displayName": "CurrencyId",
		"name": "CurrencyId",
		"type": "options",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {
			"loadOptionsMethod": "GetCurrencies"
		},
		"displayOptions": {
			"show": {
				"operation": [
					"ADD_PRODUCT",
					"UPDATE_PRODUCT",
					"UPDATE_PRODUCT_PRICE"
				]
			}
		}
	},
	{
		"options": [
			{
				"name": "list",
				"displayName": "list",
				"values": [
					{
						"displayName": "Order",
						"name": "Order",
						"type": "number",
						"default": "",
						"placeholder": "",
						"description": "",
						"typeOptions": {
							"loadOptionsMethod": ""
						},
						"options": []
					},
					{
						"displayName": "Url",
						"name": "Url",
						"type": "string",
						"default": "",
						"placeholder": "",
						"description": "",
						"typeOptions": {
							"loadOptionsMethod": ""
						},
						"options": []
					},
					{
						"displayName": "Base64",
						"name": "Base64",
						"type": "string",
						"default": "",
						"placeholder": "",
						"description": "",
						"typeOptions": {
							"loadOptionsMethod": ""
						},
						"options": []
					}
				]
			}
		],
		"displayName": "Images",
		"name": "Images",
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
					"ADD_PRODUCT",
					"UPDATE_PRODUCT",
					"UPDATE_PRODUCT_PRICE"
				]
			}
		}
	},
	{
		"options": [],
		"displayName": "MarketPrice",
		"name": "MarketPrice",
		"type": "number",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"ADD_PRODUCT",
					"UPDATE_PRODUCT",
					"UPDATE_PRODUCT_PRICE"
				]
			}
		}
	},
	{
		"options": [],
		"displayName": "Status",
		"name": "Status",
		"type": "number",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"ADD_PRODUCT",
					"UPDATE_PRODUCT",
					"UPDATE_PRODUCT_PRICE"
				]
			}
		}
	},
	{
		"options": [],
		"displayName": "Volume",
		"name": "Volume",
		"type": "number",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"ADD_PRODUCT",
					"UPDATE_PRODUCT",
					"UPDATE_PRODUCT_PRICE"
				]
			}
		}
	},
	{
		"options": [],
		"displayName": "Height",
		"name": "Height",
		"type": "number",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"ADD_PRODUCT",
					"UPDATE_PRODUCT",
					"UPDATE_PRODUCT_PRICE"
				]
			}
		}
	},
	{
		"options": [],
		"displayName": "Length",
		"name": "Length",
		"type": "number",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"ADD_PRODUCT",
					"UPDATE_PRODUCT",
					"UPDATE_PRODUCT_PRICE"
				]
			}
		}
	},
	{
		"options": [],
		"displayName": "Width",
		"name": "Width",
		"type": "number",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"ADD_PRODUCT",
					"UPDATE_PRODUCT",
					"UPDATE_PRODUCT_PRICE"
				]
			}
		}
	},
	{
		"options": [],
		"displayName": "VariantName1",
		"name": "VariantName1",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"ADD_PRODUCT",
					"UPDATE_PRODUCT",
					"UPDATE_PRODUCT_PRICE"
				]
			}
		}
	},
	{
		"options": [],
		"displayName": "VariantName2",
		"name": "VariantName2",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"ADD_PRODUCT",
					"UPDATE_PRODUCT",
					"UPDATE_PRODUCT_PRICE"
				]
			}
		}
	},
	{
		"options": [],
		"displayName": "VariantName3",
		"name": "VariantName3",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"ADD_PRODUCT",
					"UPDATE_PRODUCT",
					"UPDATE_PRODUCT_PRICE"
				]
			}
		}
	},
	{
		"options": [],
		"displayName": "VariantName4",
		"name": "VariantName4",
		"type": "string",
		"default": "",
		"placeholder": "",
		"description": "",
		"typeOptions": {},
		"displayOptions": {
			"show": {
				"operation": [
					"ADD_PRODUCT",
					"UPDATE_PRODUCT",
					"UPDATE_PRODUCT_PRICE"
				]
			}
		}
	},
	{
		"options": [
			{
				"name": "list",
				"displayName": "list",
				"values": [
					{
						"displayName": "Code",
						"name": "Code",
						"type": "string",
						"default": "",
						"placeholder": "",
						"description": "",
						"typeOptions": {
							"loadOptionsMethod": ""
						},
						"options": []
					},
					{
						"displayName": "Price",
						"name": "Price",
						"type": "number",
						"default": "",
						"placeholder": "",
						"description": "",
						"typeOptions": {
							"loadOptionsMethod": ""
						},
						"options": []
					},
					{
						"displayName": "Quantity",
						"name": "Quantity",
						"type": "number",
						"default": "",
						"placeholder": "",
						"description": "",
						"typeOptions": {
							"loadOptionsMethod": ""
						},
						"options": []
					},
					{
						"displayName": "Barcode",
						"name": "Barcode",
						"type": "string",
						"default": "",
						"placeholder": "",
						"description": "",
						"typeOptions": {
							"loadOptionsMethod": ""
						},
						"options": []
					},
					{
						"displayName": "CurrencyId",
						"name": "CurrencyId",
						"type": "number",
						"default": "",
						"placeholder": "",
						"description": "",
						"typeOptions": {
							"loadOptionsMethod": ""
						},
						"options": []
					},
					{
						"displayName": "Image",
						"name": "Image",
						"type": "string",
						"default": "",
						"placeholder": "",
						"description": "",
						"typeOptions": {
							"loadOptionsMethod": ""
						},
						"options": []
					},
					{
						"displayName": "VariantValue1",
						"name": "VariantValue1",
						"type": "string",
						"default": "",
						"placeholder": "",
						"description": "",
						"typeOptions": {
							"loadOptionsMethod": ""
						},
						"options": []
					},
					{
						"displayName": "VariantValue2",
						"name": "VariantValue2",
						"type": "string",
						"default": "",
						"placeholder": "",
						"description": "",
						"typeOptions": {
							"loadOptionsMethod": ""
						},
						"options": []
					},
					{
						"displayName": "VariantValue3",
						"name": "VariantValue3",
						"type": "string",
						"default": "",
						"placeholder": "",
						"description": "",
						"typeOptions": {
							"loadOptionsMethod": ""
						},
						"options": []
					},
					{
						"displayName": "VariantValue4",
						"name": "VariantValue4",
						"type": "string",
						"default": "",
						"placeholder": "",
						"description": "",
						"typeOptions": {
							"loadOptionsMethod": ""
						},
						"options": []
					},
					{
						"displayName": "ImageBase64",
						"name": "ImageBase64",
						"type": "string",
						"default": "",
						"placeholder": "",
						"description": "",
						"typeOptions": {
							"loadOptionsMethod": ""
						},
						"options": []
					}
				]
			}
		],
		"displayName": "Variants",
		"name": "Variants",
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
					"ADD_PRODUCT",
					"UPDATE_PRODUCT",
					"UPDATE_PRODUCT_PRICE"
				]
			}
		}
	},
	{
		"options": [
			{
				"name": "list",
				"displayName": "list",
				"values": [
					{
						"displayName": "Name",
						"name": "Name",
						"type": "string",
						"default": "",
						"placeholder": "",
						"description": "",
						"typeOptions": {
							"loadOptionsMethod": ""
						},
						"options": []
					},
					{
						"displayName": "Value",
						"name": "Value",
						"type": "string",
						"default": "",
						"placeholder": "",
						"description": "",
						"typeOptions": {
							"loadOptionsMethod": ""
						},
						"options": []
					}
				]
			}
		],
		"displayName": "Specs",
		"name": "Specs",
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
					"ADD_PRODUCT",
					"UPDATE_PRODUCT",
					"UPDATE_PRODUCT_PRICE"
				]
			}
		}
	}
]
export default properties;