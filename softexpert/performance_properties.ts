
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
				"name": "add measures in adinterface",
				"value": "addMeasuresInAdinterface"
			},
			{
				"name": "view metric values",
				"value": "viewMetricValues"
			},
			{
				"name": "view sc metric data",
				"value": "viewScMetricData"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "idscmetric",
		"name": "idscmetric",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addMeasuresInAdinterface",
					"viewMetricValues",
					"viewScMetricData"
				]
			}
		}
	},
	{
		"displayName": "iduser",
		"name": "iduser",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addMeasuresInAdinterface"
				]
			}
		}
	},
	{
		"displayName": "nrsubperiod",
		"name": "nrsubperiod",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addMeasuresInAdinterface"
				]
			}
		}
	},
	{
		"displayName": "nrperiod",
		"name": "nrperiod",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addMeasuresInAdinterface"
				]
			}
		}
	},
	{
		"displayName": "nryear",
		"name": "nryear",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addMeasuresInAdinterface",
					"viewMetricValues"
				]
			}
		}
	},
	{
		"displayName": "vlweight",
		"name": "vlweight",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addMeasuresInAdinterface"
				]
			}
		}
	},
	{
		"displayName": "fgnotapply",
		"name": "fgnotapply",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addMeasuresInAdinterface"
				]
			}
		}
	},
	{
		"displayName": "vltarget",
		"name": "vltarget",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addMeasuresInAdinterface"
				]
			}
		}
	},
	{
		"displayName": "vlactual",
		"name": "vlactual",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addMeasuresInAdinterface"
				]
			}
		}
	},
	{
		"displayName": "vltargetaccum",
		"name": "vltargetaccum",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addMeasuresInAdinterface"
				]
			}
		}
	},
	{
		"displayName": "vlactualaccum",
		"name": "vlactualaccum",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addMeasuresInAdinterface"
				]
			}
		}
	}
]
    
    
    export default properties;
