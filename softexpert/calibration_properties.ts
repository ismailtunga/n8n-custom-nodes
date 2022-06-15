
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
				"name": "import_calibration",
				"value": "import_calibration"
			},
			{
				"name": "import_del_calibration",
				"value": "import_del_calibration"
			},
			{
				"name": "import_table",
				"value": "import_table"
			},
			{
				"name": "import_point",
				"value": "import_point"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "idplanactivity",
		"name": "idplanactivity",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_calibration",
					"import_table",
					"import_point"
				]
			}
		}
	},
	{
		"displayName": "nrcertificate",
		"name": "nrcertificate",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_calibration",
					"import_del_calibration",
					"import_table",
					"import_point"
				]
			}
		}
	},
	{
		"displayName": "dtstart",
		"name": "dtstart",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_calibration"
				]
			}
		}
	},
	{
		"displayName": "hrstart",
		"name": "hrstart",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_calibration"
				]
			}
		}
	},
	{
		"displayName": "dtfinish",
		"name": "dtfinish",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_calibration"
				]
			}
		}
	},
	{
		"displayName": "hrfinish",
		"name": "hrfinish",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_calibration"
				]
			}
		}
	},
	{
		"displayName": "svccenter",
		"name": "svccenter",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_calibration"
				]
			}
		}
	},
	{
		"displayName": "resp",
		"name": "resp",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_calibration"
				]
			}
		}
	},
	{
		"displayName": "nmtable",
		"name": "nmtable",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_table",
					"import_point"
				]
			}
		}
	},
	{
		"displayName": "type_value",
		"name": "type_value",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_table",
					"import_point"
				]
			}
		}
	},
	{
		"displayName": "vltend",
		"name": "vltend",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_table",
					"import_point"
				]
			}
		}
	},
	{
		"displayName": "vlfges",
		"name": "vlfges",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_table",
					"import_point"
				]
			}
		}
	},
	{
		"displayName": "vlfe",
		"name": "vlfe",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_table",
					"import_point"
				]
			}
		}
	},
	{
		"displayName": "vlu95",
		"name": "vlu95",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_table",
					"import_point"
				]
			}
		}
	},
	{
		"displayName": "vlerrup",
		"name": "vlerrup",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_table",
					"import_point"
				]
			}
		}
	},
	{
		"displayName": "vlerrdown",
		"name": "vlerrdown",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_table",
					"import_point"
				]
			}
		}
	},
	{
		"displayName": "vlband",
		"name": "vlband",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_table",
					"import_point"
				]
			}
		}
	},
	{
		"displayName": "vlaverage",
		"name": "vlaverage",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_table",
					"import_point"
				]
			}
		}
	},
	{
		"displayName": "vlreadbig",
		"name": "vlreadbig",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_table",
					"import_point"
				]
			}
		}
	},
	{
		"displayName": "vlreadsmall",
		"name": "vlreadsmall",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_table",
					"import_point"
				]
			}
		}
	},
	{
		"displayName": "vlhisterese",
		"name": "vlhisterese",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_table",
					"import_point"
				]
			}
		}
	},
	{
		"displayName": "vlft",
		"name": "vlft",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_table",
					"import_point"
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
					"import_table",
					"import_point"
				]
			}
		}
	},
	{
		"displayName": "variable",
		"name": "variable",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_table",
					"import_point"
				]
			}
		}
	},
	{
		"displayName": "result",
		"name": "result",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_table"
				]
			}
		}
	},
	{
		"displayName": "resulttdi",
		"name": "resulttdi",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_table"
				]
			}
		}
	},
	{
		"displayName": "observation",
		"name": "observation",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_table"
				]
			}
		}
	},
	{
		"displayName": "vlvvc",
		"name": "vlvvc",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_table",
					"import_point"
				]
			}
		}
	},
	{
		"displayName": "nmpoint",
		"name": "nmpoint",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_point"
				]
			}
		}
	},
	{
		"displayName": "fgupordown",
		"name": "fgupordown",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_point"
				]
			}
		}
	}
]
    
    
    export default properties;
