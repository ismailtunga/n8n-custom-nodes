
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
				"name": "create risk file",
				"value": "createRiskFile"
			},
			{
				"name": "create control file",
				"value": "createControlFile"
			},
			{
				"name": "create risk analysis",
				"value": "createRiskAnalysis"
			},
			{
				"name": "create control analysis",
				"value": "createControlAnalysis"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "idrisk",
		"name": "IDRISK",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createRiskFile",
					"createRiskAnalysis"
				]
			}
		}
	},
	{
		"displayName": "nmrisk",
		"name": "NMRISK",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createRiskFile"
				]
			}
		}
	},
	{
		"displayName": "idtype",
		"name": "IDTYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createRiskFile",
					"createControlFile"
				]
			}
		}
	},
	{
		"displayName": "idresp",
		"name": "IDRESP",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createRiskFile",
					"createControlFile",
					"createRiskAnalysis",
					"createControlAnalysis"
				]
			}
		}
	},
	{
		"displayName": "idteam",
		"name": "IDTEAM",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createRiskFile",
					"createControlFile",
					"createRiskAnalysis",
					"createControlAnalysis"
				]
			}
		}
	},
	{
		"displayName": "fgclass",
		"name": "FGCLASS",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createRiskFile"
				]
			}
		}
	},
	{
		"displayName": "idincidenttype",
		"name": "IDINCIDENTTYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createRiskFile"
				]
			}
		}
	},
	{
		"displayName": "idproblemtype",
		"name": "IDPROBLEMTYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createRiskFile"
				]
			}
		}
	},
	{
		"displayName": "fgsymbol",
		"name": "FGSYMBOL",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createRiskFile",
					"createControlFile"
				]
			}
		}
	},
	{
		"displayName": "dsrisk",
		"name": "DSRISK",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createRiskFile"
				]
			}
		}
	},
	{
		"displayName": "action",
		"name": "ACTION",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createRiskFile",
					"createControlFile"
				]
			}
		}
	},
	{
		"displayName": "idcontrol",
		"name": "IDCONTROL",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createControlFile",
					"createControlAnalysis"
				]
			}
		}
	},
	{
		"displayName": "nmcontrol",
		"name": "NMCONTROL",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createControlFile"
				]
			}
		}
	},
	{
		"displayName": "fgimplement",
		"name": "FGIMPLEMENT",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createControlFile",
					"createControlAnalysis"
				]
			}
		}
	},
	{
		"displayName": "dtimplement",
		"name": "DTIMPLEMENT",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createControlFile",
					"createControlAnalysis"
				]
			}
		}
	},
	{
		"displayName": "fgrelevant",
		"name": "FGRELEVANT",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createControlFile"
				]
			}
		}
	},
	{
		"displayName": "fgctrlcharact",
		"name": "FGCTRLCHARACT",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createControlFile"
				]
			}
		}
	},
	{
		"displayName": "fgfrequency",
		"name": "FGFREQUENCY",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createControlFile"
				]
			}
		}
	},
	{
		"displayName": "dscontrol",
		"name": "DSCONTROL",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createControlFile"
				]
			}
		}
	},
	{
		"displayName": "idplan",
		"name": "IDPLAN",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createRiskAnalysis",
					"createControlAnalysis"
				]
			}
		}
	},
	{
		"displayName": "idriskanalysis",
		"name": "IDRISKANALYSIS",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createRiskAnalysis"
				]
			}
		}
	},
	{
		"displayName": "gnara_cdassoc",
		"name": "GNARA_CDASSOC",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createRiskAnalysis"
				]
			}
		}
	},
	{
		"displayName": "dtnexteval",
		"name": "DTNEXTEVAL",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createRiskAnalysis",
					"createControlAnalysis"
				]
			}
		}
	},
	{
		"displayName": "qtpendecy",
		"name": "QTPENDECY",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createRiskAnalysis"
				]
			}
		}
	},
	{
		"displayName": "idtreatment",
		"name": "IDTREATMENT",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createRiskAnalysis"
				]
			}
		}
	},
	{
		"displayName": "idmeasunity",
		"name": "IDMEASUNITY",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createRiskAnalysis",
					"createControlAnalysis"
				]
			}
		}
	},
	{
		"displayName": "vltotal",
		"name": "VLTOTAL",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createRiskAnalysis"
				]
			}
		}
	},
	{
		"displayName": "vlapetite",
		"name": "VLAPETITE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createRiskAnalysis"
				]
			}
		}
	},
	{
		"displayName": "vltolerance",
		"name": "VLTOLERANCE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createRiskAnalysis"
				]
			}
		}
	},
	{
		"displayName": "dsriskanalysis",
		"name": "DSRISKANALYSIS",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createRiskAnalysis"
				]
			}
		}
	},
	{
		"displayName": "idcontrolanalysis",
		"name": "IDCONTROLANALYSIS",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createControlAnalysis"
				]
			}
		}
	},
	{
		"displayName": "gnaca_cdassoc",
		"name": "GNACA_CDASSOC",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createControlAnalysis"
				]
			}
		}
	},
	{
		"displayName": "fgautomationtype",
		"name": "FGAUTOMATIONTYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createControlAnalysis"
				]
			}
		}
	},
	{
		"displayName": "fgcontrolcharact",
		"name": "FGCONTROLCHARACT",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createControlAnalysis"
				]
			}
		}
	},
	{
		"displayName": "fgcontrolfreq",
		"name": "FGCONTROLFREQ",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createControlAnalysis"
				]
			}
		}
	},
	{
		"displayName": "qtevalpendency",
		"name": "QTEVALPENDENCY",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createControlAnalysis"
				]
			}
		}
	},
	{
		"displayName": "vlcost",
		"name": "VLCOST",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createControlAnalysis"
				]
			}
		}
	},
	{
		"displayName": "dscontrolanalysis",
		"name": "DSCONTROLANALYSIS",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createControlAnalysis"
				]
			}
		}
	}
]
    
    
    export default properties;
