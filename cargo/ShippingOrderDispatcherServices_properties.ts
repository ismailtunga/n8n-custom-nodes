
import {
	INodeProperties
} from "n8n-workflow";

const properties: INodeProperties[] =
	[
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"default": "",
			"options": [
				{
					"name": "cancel return shipment code",
					"value": "cancelReturnShipmentCode"
				},
				{
					"name": "cancel shipment",
					"value": "cancelShipment"
				},
				{
					"name": "create shipment",
					"value": "createShipment"
				},
				{
					"name": "create shipment detail",
					"value": "createShipmentDetail"
				},
				{
					"name": "query shipment",
					"value": "queryShipment"
				},
				{
					"name": "query shipment detail",
					"value": "queryShipmentDetail"
				},
				{
					"name": "save return shipment code",
					"value": "saveReturnShipmentCode"
				}
			],
			"placeholder": "Placeholder value",
			"description": "The description text"
		},
		{
			"displayName": "ws language",
			"name": "wsLanguage",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"cancelReturnShipmentCode",
						"queryShipment",
						"queryShipmentDetail",
						"saveReturnShipmentCode"
					]
				}
			}
		},
		{
			"displayName": "field name",
			"name": "fieldName",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"cancelReturnShipmentCode",
						"saveReturnShipmentCode"
					]
				}
			}
		},
		{
			"displayName": "return code",
			"name": "returnCode",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"cancelReturnShipmentCode",
						"saveReturnShipmentCode"
					]
				}
			}
		},
		{
			"displayName": "user language",
			"name": "userLanguage",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"cancelShipment",
						"createShipment",
						"createShipmentDetail"
					]
				}
			}
		},
		{
			"displayName": "cargo keys",
			"name": "cargoKeys",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"cancelShipment"
					]
				}
			}
		},
		{
			"displayName": "shipping order vo",
			"name": "ShippingOrderVO",
			"type": "collection",
			"default": {},
			"displayOptions": {
				"show": {
					"operation": [
						"createShipment"
					]
				}
			},
			"options": [
				{
					"displayName": "cargo key",
					"name": "cargoKey",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "invoice key",
					"name": "invoiceKey",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "receiver cust name",
					"name": "receiverCustName",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "receiver address",
					"name": "receiverAddress",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "city name",
					"name": "cityName",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "town name",
					"name": "townName",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "receiver phone1",
					"name": "receiverPhone1",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "receiver phone2",
					"name": "receiverPhone2",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "receiver phone3",
					"name": "receiverPhone3",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "email address",
					"name": "emailAddress",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "tax office id",
					"name": "taxOfficeId",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "tax number",
					"name": "taxNumber",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "tax office name",
					"name": "taxOfficeName",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "desi",
					"name": "desi",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "kg",
					"name": "kg",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "cargo count",
					"name": "cargoCount",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "waybill no",
					"name": "waybillNo",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "special field1",
					"name": "specialField1",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "special field2",
					"name": "specialField2",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "special field3",
					"name": "specialField3",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "tt invoice amount",
					"name": "ttInvoiceAmount",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "tt document id",
					"name": "ttDocumentId",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "tt collection type",
					"name": "ttCollectionType",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "tt document save type",
					"name": "ttDocumentSaveType",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "dc selected credit",
					"name": "dcSelectedCredit",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "dc credit rule",
					"name": "dcCreditRule",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "description",
					"name": "description",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "org geo code",
					"name": "orgGeoCode",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "privilege order",
					"name": "privilegeOrder",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "cust prod id",
					"name": "custProdId",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "org receiver cust id",
					"name": "orgReceiverCustId",
					"type": "string",
					"default": ""
				}
			]
		},
		{
			"displayName": "shipping order vo",
			"name": "ShippingOrderVO",
			"type": "collection",
			"default": {},
			"displayOptions": {
				"show": {
					"operation": [
						"createShipmentDetail"
					]
				}
			},
			"options": [
				{
					"displayName": "cargo key",
					"name": "cargoKey",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "invoice key",
					"name": "invoiceKey",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "receiver cust name",
					"name": "receiverCustName",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "receiver address",
					"name": "receiverAddress",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "city name",
					"name": "cityName",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "town name",
					"name": "townName",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "receiver phone1",
					"name": "receiverPhone1",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "receiver phone2",
					"name": "receiverPhone2",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "receiver phone3",
					"name": "receiverPhone3",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "email address",
					"name": "emailAddress",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "tax office id",
					"name": "taxOfficeId",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "tax number",
					"name": "taxNumber",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "tax office name",
					"name": "taxOfficeName",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "desi",
					"name": "desi",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "kg",
					"name": "kg",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "cargo count",
					"name": "cargoCount",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "waybill no",
					"name": "waybillNo",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "special field1",
					"name": "specialField1",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "special field2",
					"name": "specialField2",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "special field3",
					"name": "specialField3",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "tt invoice amount",
					"name": "ttInvoiceAmount",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "tt document id",
					"name": "ttDocumentId",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "tt collection type",
					"name": "ttCollectionType",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "tt document save type",
					"name": "ttDocumentSaveType",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "dc selected credit",
					"name": "dcSelectedCredit",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "dc credit rule",
					"name": "dcCreditRule",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "description",
					"name": "description",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "org geo code",
					"name": "orgGeoCode",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "privilege order",
					"name": "privilegeOrder",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "cust prod id",
					"name": "custProdId",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "org receiver cust id",
					"name": "orgReceiverCustId",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "order data",
					"name": "orderData",
					"type": "string",
					"default": ""
				}
			]
		},
		{
			"displayName": "keys",
			"name": "keys",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"queryShipment"
					]
				}
			}
		},
		{
			"displayName": "key type",
			"name": "keyType",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"queryShipment",
						"queryShipmentDetail"
					]
				}
			}
		},
		{
			"displayName": "add historical data",
			"name": "addHistoricalData",
			"type": "boolean",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"queryShipment",
						"queryShipmentDetail"
					]
				}
			}
		},
		{
			"displayName": "only tracking",
			"name": "onlyTracking",
			"type": "boolean",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"queryShipment",
						"queryShipmentDetail"
					]
				}
			}
		},
		{
			"displayName": "keys",
			"name": "keys",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"queryShipmentDetail"
					]
				}
			}
		},
		{
			"displayName": "json data",
			"name": "jsonData",
			"type": "boolean",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"queryShipmentDetail"
					]
				}
			}
		},
		{
			"displayName": "start date",
			"name": "startDate",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"saveReturnShipmentCode"
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
						"saveReturnShipmentCode"
					]
				}
			}
		},
		{
			"displayName": "max count",
			"name": "maxCount",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"saveReturnShipmentCode"
					]
				}
			}
		}
	]


export default properties;
