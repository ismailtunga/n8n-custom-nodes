
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
				"name": "new batch",
				"value": "newBatch"
			},
			{
				"name": "new batch file",
				"value": "newBatchFile"
			},
			{
				"name": "get batches",
				"value": "getBatches"
			},
			{
				"name": "get batch data",
				"value": "getBatchData"
			},
			{
				"name": "execute batch",
				"value": "executeBatch"
			},
			{
				"name": "set index value",
				"value": "setIndexValue"
			},
			{
				"name": "delete batch",
				"value": "deleteBatch"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "capture setting id",
		"name": "CaptureSettingID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newBatch",
					"getBatches"
				]
			}
		}
	},
	{
		"displayName": "batch id",
		"name": "BatchID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newBatch",
					"newBatchFile",
					"getBatches",
					"getBatchData",
					"executeBatch",
					"setIndexValue",
					"deleteBatch"
				]
			}
		}
	},
	{
		"displayName": "batch name",
		"name": "BatchName",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newBatch",
					"getBatches"
				]
			}
		}
	},
	{
		"displayName": "file name",
		"name": "FileName",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newBatchFile"
				]
			}
		}
	},
	{
		"displayName": "file content",
		"name": "FileContent",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newBatchFile"
				]
			}
		}
	},
	{
		"displayName": "batch step",
		"name": "BatchStep",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"getBatches"
				]
			}
		}
	},
	{
		"displayName": "begin insert date",
		"name": "BeginInsertDate",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"getBatches"
				]
			}
		}
	},
	{
		"displayName": "end insert date",
		"name": "EndInsertDate",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"getBatches"
				]
			}
		}
	},
	{
		"displayName": "creator user id",
		"name": "CreatorUserID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"getBatches"
				]
			}
		}
	},
	{
		"displayName": "document code",
		"name": "DocumentCode",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"setIndexValue"
				]
			}
		}
	},
	{
		"displayName": "index name",
		"name": "IndexName",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"setIndexValue"
				]
			}
		}
	},
	{
		"displayName": "index value",
		"name": "IndexValue",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"setIndexValue"
				]
			}
		}
	}
]
    
    
    export default properties;
