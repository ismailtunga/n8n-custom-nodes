
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
				"name": "create or update shipment template",
				"value": "CreateOrUpdateShipmentTemplate"
			},
			{
				"name": "get shipment template",
				"value": "GetShipmentTemplate"
			},
			{
				"name": "get shipment template list",
				"value": "GetShipmentTemplateList"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "shipment",
		"name": "shipment",
		"type": "collection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"CreateOrUpdateShipmentTemplate"
				]
			}
		},
		"options": [
			{
				"displayName": "template name",
				"name": "templateName",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "installment info",
				"name": "installmentInfo",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "exchange info",
				"name": "exchangeInfo",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "shipping info",
				"name": "shippingInfo",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "special delivery",
				"name": "specialDelivery",
				"type": "boolean",
				"default": ""
			},
			{
				"displayName": "delivery fee type",
				"name": "deliveryFeeType",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "combined shipment allowed",
				"name": "combinedShipmentAllowed",
				"type": "boolean",
				"default": ""
			},
			{
				"displayName": "shipment method",
				"name": "shipmentMethod",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "warehouse address",
				"name": "warehouseAddress",
				"type": "collection",
				"default": {},
				"options": [
					{
						"displayName": "title",
						"name": "title",
						"type": "string",
						"default": ""
					},
					{
						"displayName": "address",
						"name": "address",
						"type": "string",
						"default": ""
					},
					{
						"displayName": "district",
						"name": "district",
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
								"displayName": "id",
								"name": "id",
								"type": "number",
								"default": ""
							}
						]
					},
					{
						"displayName": "city",
						"name": "city",
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
								"displayName": "code",
								"name": "code",
								"type": "number",
								"default": ""
							}
						]
					},
					{
						"displayName": "postal code",
						"name": "postalCode",
						"type": "string",
						"default": ""
					}
				]
			},
			{
				"displayName": "exchange address",
				"name": "exchangeAddress",
				"type": "collection",
				"default": {},
				"options": [
					{
						"displayName": "title",
						"name": "title",
						"type": "string",
						"default": ""
					},
					{
						"displayName": "address",
						"name": "address",
						"type": "string",
						"default": ""
					},
					{
						"displayName": "district",
						"name": "district",
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
								"displayName": "id",
								"name": "id",
								"type": "number",
								"default": ""
							}
						]
					},
					{
						"displayName": "city",
						"name": "city",
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
								"displayName": "code",
								"name": "code",
								"type": "number",
								"default": ""
							}
						]
					},
					{
						"displayName": "postal code",
						"name": "postalCode",
						"type": "string",
						"default": ""
					}
				]
			},
			{
				"displayName": "shipment companies",
				"name": "shipmentCompanies",
				"type": "collection",
				"default": {},
				"options": [
					{
						"displayName": "shipment company",
						"name": "shipmentCompany",
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
								"displayName": "short name",
								"name": "shortName",
								"type": "string",
								"default": ""
							}
						]
					}
				]
			},
			{
				"displayName": "deliverable cities",
				"name": "deliverableCities",
				"type": "collection",
				"default": {},
				"options": [
					{
						"displayName": "city",
						"name": "city",
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
								"displayName": "code",
								"name": "code",
								"type": "number",
								"default": ""
							}
						]
					}
				]
			},
			{
				"displayName": "claim shipment company",
				"name": "claimShipmentCompany",
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
						"displayName": "short name",
						"name": "shortName",
						"type": "string",
						"default": ""
					}
				]
			},
			{
				"displayName": "cargo account no",
				"name": "cargoAccountNo",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "use dmall cargo",
				"name": "useDmallCargo",
				"type": "boolean",
				"default": ""
			}
		]
	},
	{
		"displayName": "name",
		"name": "name",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"GetShipmentTemplate"
				]
			}
		}
	}
]
    
    
    export default properties;
