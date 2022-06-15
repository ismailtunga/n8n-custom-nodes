
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
				"name": "ticket listing belongs to seller",
				"value": "TicketListingBelongsToSeller"
			},
			{
				"name": "ticket listing assigned to seller",
				"value": "TicketListingAssignedToSeller"
			},
			{
				"name": "ticket answer",
				"value": "TicketAnswer"
			},
			{
				"name": "ticket create",
				"value": "TicketCreate"
			},
			{
				"name": "ticket reasons",
				"value": "TicketReasons"
			},
			{
				"name": "ticket read",
				"value": "TicketRead"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "seller id",
		"name": "sellerId",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"TicketListingBelongsToSeller",
					"TicketListingAssignedToSeller",
					"TicketAnswer",
					"TicketCreate",
					"TicketRead"
				]
			}
		}
	},
	{
		"displayName": "first",
		"name": "first",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"TicketListingBelongsToSeller",
					"TicketListingAssignedToSeller"
				]
			}
		}
	},
	{
		"displayName": "page size",
		"name": "pageSize",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"TicketListingBelongsToSeller",
					"TicketListingAssignedToSeller"
				]
			}
		}
	},
	{
		"displayName": "ticket id",
		"name": "ticketId",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"TicketAnswer",
					"TicketRead"
				]
			}
		}
	},
	{
		"displayName": "content",
		"name": "content",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"TicketAnswer",
					"TicketCreate"
				]
			}
		}
	},
	{
		"displayName": "reason id",
		"name": "reasonId",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"TicketCreate"
				]
			}
		}
	},
	{
		"displayName": "header",
		"name": "header",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"TicketCreate"
				]
			}
		}
	}
]
    
    
    export default properties;
