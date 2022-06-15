
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
				"name": "get categories dept",
				"value": "getCategoriesDept"
			},
			{
				"name": "update status",
				"value": "UpdateStatus"
			},
			{
				"name": "get activity",
				"value": "getActivity"
			},
			{
				"name": "get request",
				"value": "getRequest"
			},
			{
				"name": "test",
				"value": "test"
			},
			{
				"name": "add atachment",
				"value": "addAtachment"
			},
			{
				"name": "update asset",
				"value": "updateAsset"
			},
			{
				"name": "add atachment byte",
				"value": "addAtachmentByte"
			},
			{
				"name": "create ticket",
				"value": "createTicket"
			},
			{
				"name": "get categories",
				"value": "getCategories"
			},
			{
				"name": "get client ip",
				"value": "getClientIP"
			},
			{
				"name": "create asset",
				"value": "createAsset"
			},
			{
				"name": "create log comment",
				"value": "createLogComment"
			},
			{
				"name": "get contact detail",
				"value": "getContactDetail"
			},
			{
				"name": "get departments",
				"value": "getDepartments"
			},
			{
				"name": "update contact",
				"value": "updateContact"
			},
			{
				"name": "create contact",
				"value": "createContact"
			},
			{
				"name": "update ticket",
				"value": "updateTicket"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "user",
		"name": "user",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"getCategoriesDept",
					"UpdateStatus",
					"getActivity",
					"getRequest",
					"addAtachment",
					"updateAsset",
					"addAtachmentByte",
					"createTicket",
					"getCategories",
					"createAsset",
					"createLogComment",
					"getContactDetail",
					"getDepartments",
					"updateContact",
					"createContact",
					"updateTicket"
				]
			}
		}
	},
	{
		"displayName": "persid",
		"name": "persid",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"getCategoriesDept",
					"getActivity",
					"getRequest",
					"getCategories"
				]
			}
		}
	},
	{
		"displayName": "department id",
		"name": "departmentID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"getCategoriesDept"
				]
			}
		}
	},
	{
		"displayName": "user id",
		"name": "userId",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"UpdateStatus",
					"getActivity",
					"addAtachment",
					"addAtachmentByte",
					"createLogComment"
				]
			}
		}
	},
	{
		"displayName": "cr persid",
		"name": "crPersid",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"UpdateStatus",
					"addAtachment",
					"addAtachmentByte",
					"createLogComment"
				]
			}
		}
	},
	{
		"displayName": "comment",
		"name": "comment",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"UpdateStatus",
					"createLogComment"
				]
			}
		}
	},
	{
		"displayName": "status",
		"name": "status",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"UpdateStatus"
				]
			}
		}
	},
	{
		"displayName": "internal",
		"name": "internal",
		"type": "boolean",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"getActivity",
					"createLogComment"
				]
			}
		}
	},
	{
		"displayName": "type",
		"name": "type",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"getActivity",
					"createAsset"
				]
			}
		}
	},
	{
		"displayName": "respons elem",
		"name": "responsElem",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"getRequest"
				]
			}
		}
	},
	{
		"displayName": "test",
		"name": "test",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"test"
				]
			}
		}
	},
	{
		"displayName": "file",
		"name": "file",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addAtachment",
					"addAtachmentByte"
				]
			}
		}
	},
	{
		"displayName": "serial number",
		"name": "serialNumber",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"updateAsset"
				]
			}
		}
	},
	{
		"displayName": "name",
		"name": "name",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"updateAsset",
					"createAsset"
				]
			}
		}
	},
	{
		"displayName": "attributes",
		"name": "attributes",
		"type": "fixedCollection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"updateAsset",
					"createTicket",
					"createAsset",
					"updateContact",
					"createContact",
					"updateTicket"
				]
			}
		},
		"typeOptions": {
			"multipleValues": true
		},
		"options": [
			{
				"displayName": "entry",
				"name": "entry",
				"type": "collection",
				"default": {},
				"values": [
					{
						"displayName": "key",
						"name": "key",
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
		"displayName": "file name",
		"name": "fileName",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addAtachmentByte"
				]
			}
		}
	},
	{
		"displayName": "customer",
		"name": "customer",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createTicket"
				]
			}
		}
	},
	{
		"displayName": "properties",
		"name": "properties",
		"type": "fixedCollection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"createTicket",
					"updateTicket"
				]
			}
		},
		"typeOptions": {
			"multipleValues": true
		},
		"options": [
			{
				"displayName": "entry",
				"name": "entry",
				"type": "collection",
				"default": {},
				"values": [
					{
						"displayName": "key",
						"name": "key",
						"type": "number",
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
		"displayName": "serial_number",
		"name": "serial_number",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createAsset"
				]
			}
		}
	},
	{
		"displayName": "time spent",
		"name": "timeSpent",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createLogComment"
				]
			}
		}
	},
	{
		"displayName": "contact_uuid",
		"name": "contact_uuid",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"getContactDetail",
					"updateContact"
				]
			}
		}
	},
	{
		"displayName": "respons elem",
		"name": "responsElem",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"getContactDetail"
				]
			}
		}
	},
	{
		"displayName": "ticket persid",
		"name": "ticketPersid",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"updateTicket"
				]
			}
		}
	}
]
    
    
    export default properties;
