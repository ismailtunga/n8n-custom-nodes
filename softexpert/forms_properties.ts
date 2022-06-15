
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
				"name": "new table record",
				"value": "newTableRecord"
			},
			{
				"name": "get table record",
				"value": "getTableRecord"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "user id",
		"name": "UserID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newTableRecord"
				]
			}
		}
	},
	{
		"displayName": "table id",
		"name": "TableID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newTableRecord",
					"getTableRecord"
				]
			}
		}
	},
	{
		"displayName": "table field list",
		"name": "TableFieldList",
		"type": "fixedCollection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"newTableRecord",
					"getTableRecord"
				]
			}
		},
		"typeOptions": {
			"multipleValues": true
		},
		"options": [
			{
				"displayName": "table field",
				"name": "TableField",
				"type": "collection",
				"default": {},
				"values": [
					{
						"displayName": "table field id",
						"name": "TableFieldID",
						"type": "string",
						"default": ""
					},
					{
						"displayName": "table field value",
						"name": "TableFieldValue",
						"type": "string",
						"default": ""
					}
				]
			}
		]
	},
	{
		"displayName": "relationship list",
		"name": "RelationshipList",
		"type": "fixedCollection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"newTableRecord"
				]
			}
		},
		"typeOptions": {
			"multipleValues": true
		},
		"options": [
			{
				"displayName": "relationship",
				"name": "Relationship",
				"type": "collection",
				"default": {},
				"values": [
					{
						"displayName": "relationship id",
						"name": "RelationshipID",
						"type": "string",
						"default": ""
					},
					{
						"displayName": "relationship field",
						"name": "RelationshipField",
						"type": "collection",
						"default": {},
						"options": [
							{
								"displayName": "relationship field id",
								"name": "RelationshipFieldID",
								"type": "string",
								"default": ""
							},
							{
								"displayName": "relationship field value",
								"name": "RelationshipFieldValue",
								"type": "string",
								"default": ""
							}
						]
					}
				]
			}
		]
	},
	{
		"displayName": "table field file list",
		"name": "TableFieldFileList",
		"type": "fixedCollection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"newTableRecord"
				]
			}
		},
		"typeOptions": {
			"multipleValues": true
		},
		"options": [
			{
				"displayName": "table field file",
				"name": "TableFieldFile",
				"type": "collection",
				"default": {},
				"values": [
					{
						"displayName": "table field id",
						"name": "TableFieldID",
						"type": "string",
						"default": ""
					},
					{
						"displayName": "file name",
						"name": "FileName",
						"type": "string",
						"default": ""
					},
					{
						"displayName": "file content",
						"name": "FileContent",
						"type": "string",
						"default": ""
					}
				]
			}
		]
	},
	{
		"displayName": "related to",
		"name": "RelatedTo",
		"type": "collection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"newTableRecord"
				]
			}
		},
		"options": [
			{
				"displayName": "related relationship id",
				"name": "RelatedRelationshipID",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "related relationship value",
				"name": "RelatedRelationshipValue",
				"type": "string",
				"default": ""
			}
		]
	},
	{
		"displayName": "pagination",
		"name": "Pagination",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"getTableRecord"
				]
			}
		}
	}
]
    
    
    export default properties;
