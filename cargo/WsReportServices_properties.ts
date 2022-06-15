
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
					"name": "get cancelled info",
					"value": "getCancelledInfo"
				},
				{
					"name": "get cumulative invoice detail",
					"value": "getCumulativeInvoiceDetail"
				},
				{
					"name": "get cumulative invoice detail report",
					"value": "getCumulativeInvoiceDetailReport"
				},
				{
					"name": "get cumulative invoice detail seg",
					"value": "getCumulativeInvoiceDetailSeg"
				},
				{
					"name": "get delivery collection info",
					"value": "getDeliveryCollectionInfo"
				},
				{
					"name": "get delivery collection info by cust id",
					"value": "getDeliveryCollectionInfoByCustId"
				},
				{
					"name": "get dispatch cargo",
					"value": "getDispatchCargo"
				},
				{
					"name": "get dispatch cargo2",
					"value": "getDispatchCargo2"
				},
				{
					"name": "get dispatch list",
					"value": "getDispatchList"
				},
				{
					"name": "get incoming cargo",
					"value": "getIncomingCargo"
				},
				{
					"name": "get incoming cargo bar code",
					"value": "getIncomingCargoBarCode"
				},
				{
					"name": "get incoming cargo bar code2",
					"value": "getIncomingCargoBarCode2"
				},
				{
					"name": "get invoice detail",
					"value": "getInvoiceDetail"
				},
				{
					"name": "get reject cargo",
					"value": "getRejectCargo"
				},
				{
					"name": "get reject cargo by special field",
					"value": "getRejectCargoBySpecialField"
				},
				{
					"name": "get return cargo",
					"value": "getReturnCargo"
				},
				{
					"name": "get shipment by special field",
					"value": "getShipmentBySpecialField"
				},
				{
					"name": "get shipments by cargo ref code",
					"value": "getShipmentsByCargoRefCode"
				},
				{
					"name": "get shipments by doc id",
					"value": "getShipmentsByDocId"
				},
				{
					"name": "list inv document interface by reference",
					"value": "listInvDocumentInterfaceByReference"
				}
			],
			"placeholder": "Placeholder value",
			"description": "The description text"
		},
		{
			"displayName": "language",
			"name": "language",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getCancelledInfo",
						"getCumulativeInvoiceDetail",
						"getCumulativeInvoiceDetailReport",
						"getCumulativeInvoiceDetailSeg",
						"getDeliveryCollectionInfo",
						"getDeliveryCollectionInfoByCustId",
						"getDispatchCargo",
						"getDispatchCargo2",
						"getDispatchList",
						"getIncomingCargo",
						"getIncomingCargoBarCode",
						"getIncomingCargoBarCode2",
						"getRejectCargoBySpecialField",
						"getShipmentBySpecialField",
						"listInvDocumentInterfaceByReference"
					]
				}
			}
		},
		{
			"displayName": "cancellation date",
			"name": "cancellationDate",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getCancelledInfo"
					]
				}
			}
		},
		{
			"displayName": "cust id",
			"name": "custId",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getCancelledInfo",
						"getCumulativeInvoiceDetail",
						"getCumulativeInvoiceDetailReport",
						"getCumulativeInvoiceDetailSeg",
						"getInvoiceDetail",
						"getRejectCargo",
						"getShipmentBySpecialField"
					]
				}
			}
		},
		{
			"displayName": "sub customer",
			"name": "subCustomer",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getCancelledInfo",
						"getDeliveryCollectionInfoByCustId",
						"getDispatchCargo",
						"getDispatchCargo2",
						"getIncomingCargo",
						"getReturnCargo"
					]
				}
			}
		},
		{
			"displayName": "document start date",
			"name": "documentStartDate",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getCumulativeInvoiceDetail",
						"getCumulativeInvoiceDetailReport",
						"getCumulativeInvoiceDetailSeg",
						"getDispatchCargo2",
						"getIncomingCargo",
						"getReturnCargo"
					]
				}
			}
		},
		{
			"displayName": "document end date",
			"name": "documentEndDate",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getCumulativeInvoiceDetail",
						"getCumulativeInvoiceDetailReport",
						"getCumulativeInvoiceDetailSeg",
						"getDispatchCargo2",
						"getIncomingCargo",
						"getReturnCargo"
					]
				}
			}
		},
		{
			"displayName": "invoice number",
			"name": "invoiceNumber",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getCumulativeInvoiceDetail",
						"getCumulativeInvoiceDetailReport",
						"getCumulativeInvoiceDetailSeg"
					]
				}
			}
		},
		{
			"displayName": "only doc id",
			"name": "onlyDocId",
			"type": "boolean",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getCumulativeInvoiceDetail",
						"getCumulativeInvoiceDetailReport",
						"getCumulativeInvoiceDetailSeg"
					]
				}
			}
		},
		{
			"displayName": "only invoice header",
			"name": "onlyInvoiceHeader",
			"type": "boolean",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getCumulativeInvoiceDetail",
						"getCumulativeInvoiceDetailReport",
						"getCumulativeInvoiceDetailSeg"
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
						"getCumulativeInvoiceDetailReport"
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
						"getDeliveryCollectionInfo",
						"getDeliveryCollectionInfoByCustId",
						"getDispatchCargo",
						"getInvoiceDetail",
						"getRejectCargo",
						"getShipmentBySpecialField",
						"listInvDocumentInterfaceByReference"
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
						"getDeliveryCollectionInfo",
						"getDeliveryCollectionInfoByCustId",
						"getDispatchCargo",
						"getInvoiceDetail",
						"getRejectCargo",
						"getShipmentBySpecialField",
						"listInvDocumentInterfaceByReference"
					]
				}
			}
		},
		{
			"displayName": "date type",
			"name": "dateType",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getDeliveryCollectionInfo",
						"getDeliveryCollectionInfoByCustId"
					]
				}
			}
		},
		{
			"displayName": "cust doc number",
			"name": "custDocNumber",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getDeliveryCollectionInfo"
					]
				}
			}
		},
		{
			"displayName": "cust doc number",
			"name": "custDocNumber",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getDeliveryCollectionInfoByCustId"
					]
				}
			}
		},
		{
			"displayName": "cust id",
			"name": "custId",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getDeliveryCollectionInfoByCustId"
					]
				}
			}
		},
		{
			"displayName": "cust id",
			"name": "custId",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getDispatchCargo"
					]
				}
			}
		},
		{
			"displayName": "sender receiver",
			"name": "senderReceiver",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getDispatchCargo",
						"getDispatchCargo2"
					]
				}
			}
		},
		{
			"displayName": "cust id arr",
			"name": "custIdArr",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getDispatchCargo2"
					]
				}
			}
		},
		{
			"displayName": "dispatch id",
			"name": "dispatchId",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getDispatchList"
					]
				}
			}
		},
		{
			"displayName": "delivery unit id",
			"name": "deliveryUnitId",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getIncomingCargo"
					]
				}
			}
		},
		{
			"displayName": "add special field",
			"name": "addSpecialField",
			"type": "boolean",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getIncomingCargo"
					]
				}
			}
		},
		{
			"displayName": "unit id",
			"name": "unitId",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getIncomingCargoBarCode",
						"getIncomingCargoBarCode2"
					]
				}
			}
		},
		{
			"displayName": "doc id",
			"name": "docId",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getIncomingCargoBarCode"
					]
				}
			}
		},
		{
			"displayName": "doc id",
			"name": "docId",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getIncomingCargoBarCode2"
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
						"getInvoiceDetail",
						"getRejectCargo",
						"getReturnCargo",
						"getShipmentsByCargoRefCode",
						"getShipmentsByDocId"
					]
				}
			}
		},
		{
			"displayName": "invoice number",
			"name": "invoiceNumber",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getInvoiceDetail"
					]
				}
			}
		},
		{
			"displayName": "comp id",
			"name": "compId",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getRejectCargo"
					]
				}
			}
		},
		{
			"displayName": "reject status",
			"name": "rejectStatus",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getRejectCargo"
					]
				}
			}
		},
		{
			"displayName": "reject start date",
			"name": "rejectStartDate",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getRejectCargoBySpecialField"
					]
				}
			}
		},
		{
			"displayName": "reject end date",
			"name": "rejectEndDate",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getRejectCargoBySpecialField"
					]
				}
			}
		},
		{
			"displayName": "rejected unit id",
			"name": "rejectedUnitId",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getRejectCargoBySpecialField"
					]
				}
			}
		},
		{
			"displayName": "cust id",
			"name": "custId",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getRejectCargoBySpecialField"
					]
				}
			}
		},
		{
			"displayName": "reject status",
			"name": "rejectStatus",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getRejectCargoBySpecialField"
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
						"getRejectCargoBySpecialField",
						"getShipmentBySpecialField",
						"listInvDocumentInterfaceByReference"
					]
				}
			}
		},
		{
			"displayName": "field value",
			"name": "fieldValue",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getRejectCargoBySpecialField"
					]
				}
			}
		},
		{
			"displayName": "return status",
			"name": "returnStatus",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getReturnCargo"
					]
				}
			}
		},
		{
			"displayName": "special field",
			"name": "specialField",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getShipmentBySpecialField"
					]
				}
			}
		},
		{
			"displayName": "cargo ref code",
			"name": "cargoRefCode",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getShipmentsByCargoRefCode"
					]
				}
			}
		},
		{
			"displayName": "doc id",
			"name": "docId",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"getShipmentsByDocId"
					]
				}
			}
		},
		{
			"displayName": "cust params vo",
			"name": "custParamsVO",
			"type": "collection",
			"default": {},
			"displayOptions": {
				"show": {
					"operation": [
						"listInvDocumentInterfaceByReference"
					]
				}
			},
			"options": [
				{
					"displayName": "inv cust id array",
					"name": "invCustIdArray",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "sender cust id array",
					"name": "senderCustIdArray",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "receiver cust id array",
					"name": "receiverCustIdArray",
					"type": "string",
					"default": ""
				}
			]
		},
		{
			"displayName": "field value array",
			"name": "fieldValueArray",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"listInvDocumentInterfaceByReference"
					]
				}
			}
		},
		{
			"displayName": "doc id array",
			"name": "docIdArray",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"listInvDocumentInterfaceByReference"
					]
				}
			}
		},
		{
			"displayName": "date param type",
			"name": "dateParamType",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"listInvDocumentInterfaceByReference"
					]
				}
			}
		},
		{
			"displayName": "with cargo lifecycle",
			"name": "withCargoLifecycle",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"listInvDocumentInterfaceByReference"
					]
				}
			}
		}
	]


export default properties;
