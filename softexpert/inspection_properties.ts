
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
				"name": "edit qualification index value",
				"value": "editQualificationIndexValue"
			},
			{
				"name": "create update delete quality index",
				"value": "createUpdateDeleteQualityIndex"
			},
			{
				"name": "create update delete receiving",
				"value": "createUpdateDeleteReceiving"
			},
			{
				"name": "create update configuration",
				"value": "createUpdateConfiguration"
			},
			{
				"name": "relate characteristic to insp configuration",
				"value": "relateCharacteristicToInspConfiguration"
			},
			{
				"name": "relate checklist to insp configuration",
				"value": "relateChecklistToInspConfiguration"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "idreceiving",
		"name": "IDRECEIVING",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"editQualificationIndexValue",
					"createUpdateDeleteReceiving"
				]
			}
		}
	},
	{
		"displayName": "nmdlvqualindex",
		"name": "NMDLVQUALINDEX",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"editQualificationIndexValue"
				]
			}
		}
	},
	{
		"displayName": "nmdlvqualoption",
		"name": "NMDLVQUALOPTION",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"editQualificationIndexValue"
				]
			}
		}
	},
	{
		"displayName": "fgexecute",
		"name": "FGEXECUTE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"editQualificationIndexValue",
					"createUpdateDeleteReceiving"
				]
			}
		}
	},
	{
		"displayName": "dsdlvqualindex",
		"name": "DSDLVQUALINDEX",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"editQualificationIndexValue"
				]
			}
		}
	},
	{
		"displayName": "fgoption",
		"name": "FGOPTION",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateDeleteQualityIndex",
					"createUpdateDeleteReceiving",
					"createUpdateConfiguration",
					"relateCharacteristicToInspConfiguration",
					"relateChecklistToInspConfiguration"
				]
			}
		}
	},
	{
		"displayName": "idindex",
		"name": "IDINDEX",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateDeleteQualityIndex"
				]
			}
		}
	},
	{
		"displayName": "dtindexevalvalid",
		"name": "DTINDEXEVALVALID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateDeleteQualityIndex"
				]
			}
		}
	},
	{
		"displayName": "vlindexeval",
		"name": "VLINDEXEVAL",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateDeleteQualityIndex"
				]
			}
		}
	},
	{
		"displayName": "idobject",
		"name": "IDOBJECT",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateDeleteQualityIndex",
					"createUpdateConfiguration"
				]
			}
		}
	},
	{
		"displayName": "idcommercial",
		"name": "IDCOMMERCIAL",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateDeleteQualityIndex",
					"createUpdateDeleteReceiving"
				]
			}
		}
	},
	{
		"displayName": "dsindexeval",
		"name": "DSINDEXEVAL",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateDeleteQualityIndex"
				]
			}
		}
	},
	{
		"displayName": "idprocess",
		"name": "IDPROCESS",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateDeleteQualityIndex",
					"createUpdateConfiguration"
				]
			}
		}
	},
	{
		"displayName": "idactivity",
		"name": "IDACTIVITY",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateDeleteQualityIndex",
					"createUpdateConfiguration"
				]
			}
		}
	},
	{
		"displayName": "idconfiguration",
		"name": "IDCONFIGURATION",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateDeleteReceiving",
					"createUpdateConfiguration",
					"relateCharacteristicToInspConfiguration",
					"relateChecklistToInspConfiguration"
				]
			}
		}
	},
	{
		"displayName": "idlot",
		"name": "IDLOT",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateDeleteReceiving"
				]
			}
		}
	},
	{
		"displayName": "idinvoice",
		"name": "IDINVOICE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateDeleteReceiving"
				]
			}
		}
	},
	{
		"displayName": "dtinvoice",
		"name": "DTINVOICE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateDeleteReceiving"
				]
			}
		}
	},
	{
		"displayName": "idorder",
		"name": "IDORDER",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateDeleteReceiving"
				]
			}
		}
	},
	{
		"displayName": "dtorder",
		"name": "DTORDER",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateDeleteReceiving"
				]
			}
		}
	},
	{
		"displayName": "idso",
		"name": "IDSO",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateDeleteReceiving"
				]
			}
		}
	},
	{
		"displayName": "dtso",
		"name": "DTSO",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateDeleteReceiving"
				]
			}
		}
	},
	{
		"displayName": "idpo",
		"name": "IDPO",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateDeleteReceiving"
				]
			}
		}
	},
	{
		"displayName": "dtpo",
		"name": "DTPO",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateDeleteReceiving"
				]
			}
		}
	},
	{
		"displayName": "dtrecvest",
		"name": "DTRECVEST",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateDeleteReceiving"
				]
			}
		}
	},
	{
		"displayName": "qtrecvtimeest",
		"name": "QTRECVTIMEEST",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateDeleteReceiving"
				]
			}
		}
	},
	{
		"displayName": "dtrecvact",
		"name": "DTRECVACT",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateDeleteReceiving"
				]
			}
		}
	},
	{
		"displayName": "qtrecvtimeact",
		"name": "QTRECVTIMEACT",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateDeleteReceiving"
				]
			}
		}
	},
	{
		"displayName": "vlqtyest",
		"name": "VLQTYEST",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateDeleteReceiving"
				]
			}
		}
	},
	{
		"displayName": "vlqtyact",
		"name": "VLQTYACT",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateDeleteReceiving"
				]
			}
		}
	},
	{
		"displayName": "vlcostest",
		"name": "VLCOSTEST",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateDeleteReceiving"
				]
			}
		}
	},
	{
		"displayName": "vlcostact",
		"name": "VLCOSTACT",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateDeleteReceiving"
				]
			}
		}
	},
	{
		"displayName": "idworkflow",
		"name": "IDWORKFLOW",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateDeleteReceiving",
					"createUpdateConfiguration"
				]
			}
		}
	},
	{
		"displayName": "idwfprocess",
		"name": "IDWFPROCESS",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateDeleteReceiving"
				]
			}
		}
	},
	{
		"displayName": "dsreceiving",
		"name": "DSRECEIVING",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateDeleteReceiving"
				]
			}
		}
	},
	{
		"displayName": "idgentype",
		"name": "IDGENTYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateConfiguration"
				]
			}
		}
	},
	{
		"displayName": "idrevision",
		"name": "IDREVISION",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateConfiguration"
				]
			}
		}
	},
	{
		"displayName": "idprocrevision",
		"name": "IDPROCREVISION",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateConfiguration"
				]
			}
		}
	},
	{
		"displayName": "nmevalconfgrup",
		"name": "NMEVALCONFGRUP",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateConfiguration"
				]
			}
		}
	},
	{
		"displayName": "idqualityindex",
		"name": "IDQUALITYINDEX",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateConfiguration"
				]
			}
		}
	},
	{
		"displayName": "fgalloweditwf",
		"name": "FGALLOWEDITWF",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateConfiguration"
				]
			}
		}
	},
	{
		"displayName": "fgblock",
		"name": "FGBLOCK",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateConfiguration"
				]
			}
		}
	},
	{
		"displayName": "fgtypefrequence",
		"name": "FGTYPEFREQUENCE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateConfiguration"
				]
			}
		}
	},
	{
		"displayName": "qtfrequence",
		"name": "QTFREQUENCE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateConfiguration"
				]
			}
		}
	},
	{
		"displayName": "fgfrequence",
		"name": "FGFREQUENCE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateConfiguration"
				]
			}
		}
	},
	{
		"displayName": "dtnextexecution",
		"name": "DTNEXTEXECUTION",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateConfiguration"
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
					"createUpdateConfiguration"
				]
			}
		}
	},
	{
		"displayName": "fginspfreq",
		"name": "FGINSPFREQ",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateConfiguration"
				]
			}
		}
	},
	{
		"displayName": "nmskiptype",
		"name": "NMSKIPTYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateConfiguration"
				]
			}
		}
	},
	{
		"displayName": "nrseq",
		"name": "NRSEQ",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateConfiguration"
				]
			}
		}
	},
	{
		"displayName": "fginitialsmp",
		"name": "FGINITIALSMP",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateConfiguration"
				]
			}
		}
	},
	{
		"displayName": "fgstatusinitialsmp",
		"name": "FGSTATUSINITIALSMP",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateConfiguration"
				]
			}
		}
	},
	{
		"displayName": "dtduedate",
		"name": "DTDUEDATE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateConfiguration"
				]
			}
		}
	},
	{
		"displayName": "fgvalidityria",
		"name": "FGVALIDITYRIA",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateConfiguration"
				]
			}
		}
	},
	{
		"displayName": "qtvalidityria",
		"name": "QTVALIDITYRIA",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateConfiguration"
				]
			}
		}
	},
	{
		"displayName": "fgfreqvalidityria",
		"name": "FGFREQVALIDITYRIA",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateConfiguration"
				]
			}
		}
	},
	{
		"displayName": "dsinitialsmp",
		"name": "DSINITIALSMP",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateConfiguration"
				]
			}
		}
	},
	{
		"displayName": "fgavgreading",
		"name": "FGAVGREADING",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateConfiguration",
					"relateCharacteristicToInspConfiguration"
				]
			}
		}
	},
	{
		"displayName": "fgsampleplan",
		"name": "FGSAMPLEPLAN",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateConfiguration",
					"relateCharacteristicToInspConfiguration"
				]
			}
		}
	},
	{
		"displayName": "fgdefaulsampleplan",
		"name": "FGDEFAULSAMPLEPLAN",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateConfiguration"
				]
			}
		}
	},
	{
		"displayName": "idlevel",
		"name": "IDLEVEL",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateConfiguration",
					"relateCharacteristicToInspConfiguration"
				]
			}
		}
	},
	{
		"displayName": "fgswitchrule",
		"name": "FGSWITCHRULE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateConfiguration",
					"relateCharacteristicToInspConfiguration"
				]
			}
		}
	},
	{
		"displayName": "vlaql",
		"name": "VLAQL",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateConfiguration",
					"relateCharacteristicToInspConfiguration"
				]
			}
		}
	},
	{
		"displayName": "idtable",
		"name": "IDTABLE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateConfiguration",
					"relateCharacteristicToInspConfiguration"
				]
			}
		}
	},
	{
		"displayName": "vlsamplesize",
		"name": "VLSAMPLESIZE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateConfiguration",
					"relateCharacteristicToInspConfiguration"
				]
			}
		}
	},
	{
		"displayName": "vlacceptable",
		"name": "VLACCEPTABLE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateConfiguration",
					"relateCharacteristicToInspConfiguration"
				]
			}
		}
	},
	{
		"displayName": "vlpercentage",
		"name": "VLPERCENTAGE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createUpdateConfiguration",
					"relateCharacteristicToInspConfiguration"
				]
			}
		}
	},
	{
		"displayName": "idcharacteristic",
		"name": "IDCHARACTERISTIC",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"relateCharacteristicToInspConfiguration"
				]
			}
		}
	},
	{
		"displayName": "fgrequired",
		"name": "FGREQUIRED",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"relateCharacteristicToInspConfiguration"
				]
			}
		}
	},
	{
		"displayName": "nrvalidity",
		"name": "NRVALIDITY",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"relateCharacteristicToInspConfiguration"
				]
			}
		}
	},
	{
		"displayName": "fgvalidity",
		"name": "FGVALIDITY",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"relateCharacteristicToInspConfiguration"
				]
			}
		}
	},
	{
		"displayName": "fgenabledprint",
		"name": "FGENABLEDPRINT",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"relateCharacteristicToInspConfiguration"
				]
			}
		}
	},
	{
		"displayName": "fgtypesampleplan",
		"name": "FGTYPESAMPLEPLAN",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"relateCharacteristicToInspConfiguration"
				]
			}
		}
	},
	{
		"displayName": "idchecklist",
		"name": "IDCHECKLIST",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"relateChecklistToInspConfiguration"
				]
			}
		}
	}
]
    
    
    export default properties;
