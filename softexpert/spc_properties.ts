
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
				"name": "delete att cause",
				"value": "DeleteAttCause"
			},
			{
				"name": "delete att defect",
				"value": "DeleteAttDefect"
			},
			{
				"name": "delete sample att",
				"value": "DeleteSampleAtt"
			},
			{
				"name": "delete sample var",
				"value": "DeleteSampleVar"
			},
			{
				"name": "import att cause",
				"value": "ImportAttCause"
			},
			{
				"name": "import att defect",
				"value": "ImportAttDefect"
			},
			{
				"name": "import sample att",
				"value": "ImportSampleAtt"
			},
			{
				"name": "import sample var",
				"value": "ImportSampleVar"
			},
			{
				"name": "change status sample",
				"value": "ChangeStatusSample"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "idcollect",
		"name": "idcollect",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"DeleteAttCause",
					"DeleteAttDefect",
					"DeleteSampleAtt",
					"DeleteSampleVar",
					"ImportAttCause",
					"ImportAttDefect",
					"ImportSampleAtt",
					"ImportSampleVar",
					"ChangeStatusSample"
				]
			}
		}
	},
	{
		"displayName": "idcharacteristic",
		"name": "idcharacteristic",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"DeleteAttCause",
					"DeleteAttDefect",
					"DeleteSampleAtt",
					"DeleteSampleVar",
					"ImportAttCause",
					"ImportAttDefect",
					"ImportSampleAtt",
					"ImportSampleVar",
					"ChangeStatusSample"
				]
			}
		}
	},
	{
		"displayName": "idsequencesample",
		"name": "idsequencesample",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"DeleteAttCause",
					"DeleteAttDefect",
					"DeleteSampleAtt",
					"DeleteSampleVar",
					"ImportAttCause",
					"ImportAttDefect",
					"ImportSampleAtt",
					"ImportSampleVar",
					"ChangeStatusSample"
				]
			}
		}
	},
	{
		"displayName": "iddefect",
		"name": "iddefect",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"DeleteAttCause",
					"DeleteAttDefect",
					"ImportAttCause",
					"ImportAttDefect"
				]
			}
		}
	},
	{
		"displayName": "idcause",
		"name": "idcause",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"DeleteAttCause",
					"ImportAttCause"
				]
			}
		}
	},
	{
		"displayName": "qtcause",
		"name": "qtcause",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"ImportAttCause"
				]
			}
		}
	},
	{
		"displayName": "qtdefect",
		"name": "qtdefect",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"ImportAttDefect"
				]
			}
		}
	},
	{
		"displayName": "dtsample",
		"name": "dtsample",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"ImportSampleAtt",
					"ImportSampleVar"
				]
			}
		}
	},
	{
		"displayName": "tmsample",
		"name": "tmsample",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"ImportSampleAtt",
					"ImportSampleVar"
				]
			}
		}
	},
	{
		"displayName": "config",
		"name": "config",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"ImportSampleAtt",
					"ImportSampleVar"
				]
			}
		}
	},
	{
		"displayName": "idmachine",
		"name": "idmachine",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"ImportSampleAtt",
					"ImportSampleVar"
				]
			}
		}
	},
	{
		"displayName": "idoperator",
		"name": "idoperator",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"ImportSampleAtt",
					"ImportSampleVar"
				]
			}
		}
	},
	{
		"displayName": "idinspector",
		"name": "idinspector",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"ImportSampleAtt",
					"ImportSampleVar"
				]
			}
		}
	},
	{
		"displayName": "idshift",
		"name": "idshift",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"ImportSampleAtt",
					"ImportSampleVar"
				]
			}
		}
	},
	{
		"displayName": "idgage",
		"name": "idgage",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"ImportSampleAtt",
					"ImportSampleVar"
				]
			}
		}
	},
	{
		"displayName": "nmlot",
		"name": "nmlot",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"ImportSampleAtt",
					"ImportSampleVar"
				]
			}
		}
	},
	{
		"displayName": "nmmo",
		"name": "nmmo",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"ImportSampleAtt",
					"ImportSampleVar"
				]
			}
		}
	},
	{
		"displayName": "qtitens",
		"name": "qtitens",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"ImportSampleAtt"
				]
			}
		}
	},
	{
		"displayName": "qtdefectsitem",
		"name": "qtdefectsitem",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"ImportSampleAtt"
				]
			}
		}
	},
	{
		"displayName": "qtrejectsitem",
		"name": "qtrejectsitem",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"ImportSampleAtt"
				]
			}
		}
	},
	{
		"displayName": "idprocess",
		"name": "idprocess",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"ImportSampleAtt",
					"ImportSampleVar"
				]
			}
		}
	},
	{
		"displayName": "defect",
		"name": "defect",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"ImportSampleAtt"
				]
			}
		}
	},
	{
		"displayName": "readings",
		"name": "readings",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"ImportSampleVar"
				]
			}
		}
	}
]
    
    
    export default properties;
