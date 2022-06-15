
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
				"name": "input event interface",
				"value": "inputEventInterface"
			},
			{
				"name": "output event interface",
				"value": "outputEventInterface"
			},
			{
				"name": "input object interface",
				"value": "inputObjectInterface"
			},
			{
				"name": "output object interface",
				"value": "outputObjectInterface"
			},
			{
				"name": "import attribute event",
				"value": "importAttributeEvent"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "identifier",
		"name": "Identifier",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"inputEventInterface",
					"outputEventInterface"
				]
			}
		}
	},
	{
		"displayName": "requester type",
		"name": "RequesterType",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"inputEventInterface"
				]
			}
		}
	},
	{
		"displayName": "request id",
		"name": "RequestId",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"inputEventInterface"
				]
			}
		}
	},
	{
		"displayName": "activity id",
		"name": "ActivityId",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"inputEventInterface"
				]
			}
		}
	},
	{
		"displayName": "id responsible from",
		"name": "IdResponsibleFrom",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"inputEventInterface",
					"outputEventInterface"
				]
			}
		}
	},
	{
		"displayName": "date fom",
		"name": "DateFom",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"inputEventInterface",
					"outputEventInterface"
				]
			}
		}
	},
	{
		"displayName": "storeroom id",
		"name": "StoreroomId",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"inputEventInterface",
					"outputEventInterface"
				]
			}
		}
	},
	{
		"displayName": "id responsible to",
		"name": "IdResponsibleTo",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"inputEventInterface",
					"outputEventInterface"
				]
			}
		}
	},
	{
		"displayName": "date to",
		"name": "DateTo",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"inputEventInterface",
					"outputEventInterface"
				]
			}
		}
	},
	{
		"displayName": "identifier route approv",
		"name": "IdentifierRouteApprov",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"inputEventInterface",
					"outputEventInterface"
				]
			}
		}
	},
	{
		"displayName": "description",
		"name": "Description",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"inputEventInterface",
					"outputEventInterface"
				]
			}
		}
	},
	{
		"displayName": "destination type",
		"name": "DestinationType",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"outputEventInterface"
				]
			}
		}
	},
	{
		"displayName": "destination id",
		"name": "DestinationId",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"outputEventInterface"
				]
			}
		}
	},
	{
		"displayName": "input event id",
		"name": "InputEventId",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"inputObjectInterface"
				]
			}
		}
	},
	{
		"displayName": "object id",
		"name": "ObjectId",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"inputObjectInterface",
					"outputObjectInterface"
				]
			}
		}
	},
	{
		"displayName": "storage place id",
		"name": "StoragePlaceId",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"inputObjectInterface",
					"outputObjectInterface"
				]
			}
		}
	},
	{
		"displayName": "amount",
		"name": "Amount",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"inputObjectInterface",
					"outputObjectInterface"
				]
			}
		}
	},
	{
		"displayName": "lot number",
		"name": "LotNumber",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"inputObjectInterface",
					"outputObjectInterface"
				]
			}
		}
	},
	{
		"displayName": "serial number",
		"name": "SerialNumber",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"inputObjectInterface",
					"outputObjectInterface"
				]
			}
		}
	},
	{
		"displayName": "unit cost",
		"name": "UnitCost",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"inputObjectInterface"
				]
			}
		}
	},
	{
		"displayName": "output event id",
		"name": "OutputEventId",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"outputObjectInterface"
				]
			}
		}
	},
	{
		"displayName": "event id",
		"name": "EventId",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importAttributeEvent"
				]
			}
		}
	},
	{
		"displayName": "attribute id",
		"name": "AttributeId",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importAttributeEvent"
				]
			}
		}
	},
	{
		"displayName": "attribute value",
		"name": "AttributeValue",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importAttributeEvent"
				]
			}
		}
	},
	{
		"displayName": "revision id",
		"name": "RevisionId",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importAttributeEvent"
				]
			}
		}
	},
	{
		"displayName": "memo value",
		"name": "MemoValue",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importAttributeEvent"
				]
			}
		}
	}
]
    
    
    export default properties;
