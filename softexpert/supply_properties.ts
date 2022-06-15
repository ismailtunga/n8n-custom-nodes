
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
				"name": "create edit supply",
				"value": "createEditSupply"
			},
			{
				"name": "delete supply",
				"value": "deleteSupply"
			},
			{
				"name": "import_attrib_assoc",
				"value": "import_attrib_assoc"
			},
			{
				"name": "add supply structure",
				"value": "addSupplyStructure"
			},
			{
				"name": "delete supply structure",
				"value": "deleteSupplyStructure"
			},
			{
				"name": "create supply type",
				"value": "createSupplyType"
			},
			{
				"name": "add edit supply warehouse",
				"value": "addEditSupplyWarehouse"
			},
			{
				"name": "delete supply warehouse",
				"value": "deleteSupplyWarehouse"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "idobject",
		"name": "IDOBJECT",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createEditSupply",
					"deleteSupply",
					"import_attrib_assoc",
					"addSupplyStructure",
					"deleteSupplyStructure",
					"addEditSupplyWarehouse",
					"deleteSupplyWarehouse"
				]
			}
		}
	},
	{
		"displayName": "nmobject",
		"name": "NMOBJECT",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createEditSupply"
				]
			}
		}
	},
	{
		"displayName": "idobjecttype",
		"name": "IDOBJECTTYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createEditSupply",
					"createSupplyType"
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
					"createEditSupply"
				]
			}
		}
	},
	{
		"displayName": "mncost",
		"name": "MNCOST",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createEditSupply"
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
					"createEditSupply"
				]
			}
		}
	},
	{
		"displayName": "dtrevision",
		"name": "DTREVISION",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createEditSupply"
				]
			}
		}
	},
	{
		"displayName": "nmlabel",
		"name": "NMLABEL",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_attrib_assoc"
				]
			}
		}
	},
	{
		"displayName": "value",
		"name": "VALUE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_attrib_assoc"
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
					"import_attrib_assoc",
					"addSupplyStructure",
					"deleteSupplyStructure"
				]
			}
		}
	},
	{
		"displayName": "nmattribute",
		"name": "NMATTRIBUTE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_attrib_assoc"
				]
			}
		}
	},
	{
		"displayName": "idobjectowner",
		"name": "IDOBJECTOWNER",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addSupplyStructure",
					"deleteSupplyStructure"
				]
			}
		}
	},
	{
		"displayName": "idrevisionowner",
		"name": "IDREVISIONOWNER",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addSupplyStructure",
					"deleteSupplyStructure"
				]
			}
		}
	},
	{
		"displayName": "vlquantity",
		"name": "VLQUANTITY",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addSupplyStructure"
				]
			}
		}
	},
	{
		"displayName": "nmobjecttype",
		"name": "NMOBJECTTYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createSupplyType"
				]
			}
		}
	},
	{
		"displayName": "idobjecttypeowner",
		"name": "IDOBJECTTYPEOWNER",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createSupplyType"
				]
			}
		}
	},
	{
		"displayName": "idmask",
		"name": "IDMASK",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createSupplyType"
				]
			}
		}
	},
	{
		"displayName": "fgeditid",
		"name": "FGEDITID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createSupplyType"
				]
			}
		}
	},
	{
		"displayName": "fguserevisionobjtype",
		"name": "FGUSEREVISIONOBJTYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createSupplyType"
				]
			}
		}
	},
	{
		"displayName": "fgtyperevisionobjtype",
		"name": "FGTYPEREVISIONOBJTYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createSupplyType"
				]
			}
		}
	},
	{
		"displayName": "fgrevroutetypeobjtype",
		"name": "FGREVROUTETYPEOBJTYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createSupplyType"
				]
			}
		}
	},
	{
		"displayName": "idrevisionrouteobjtype",
		"name": "IDREVISIONROUTEOBJTYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createSupplyType"
				]
			}
		}
	},
	{
		"displayName": "idprocessobjtype",
		"name": "IDPROCESSOBJTYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createSupplyType"
				]
			}
		}
	},
	{
		"displayName": "fgrevidobjtype",
		"name": "FGREVIDOBJTYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createSupplyType"
				]
			}
		}
	},
	{
		"displayName": "fgtypecycleobjtype",
		"name": "FGTYPECYCLEOBJTYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createSupplyType"
				]
			}
		}
	},
	{
		"displayName": "qtrevretentionobjtype",
		"name": "QTREVRETENTIONOBJTYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createSupplyType"
				]
			}
		}
	},
	{
		"displayName": "fgrevretentionmodeobjtype",
		"name": "FGREVRETENTIONMODEOBJTYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createSupplyType"
				]
			}
		}
	},
	{
		"displayName": "fgtypeupdateobjtype",
		"name": "FGTYPEUPDATEOBJTYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createSupplyType"
				]
			}
		}
	},
	{
		"displayName": "fgrevapprovalmodeobjtype",
		"name": "FGREVAPPROVALMODEOBJTYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createSupplyType"
				]
			}
		}
	},
	{
		"displayName": "fgrevreleasemodeobjtype",
		"name": "FGREVRELEASEMODEOBJTYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createSupplyType"
				]
			}
		}
	},
	{
		"displayName": "fgrevelabclauseobjtype",
		"name": "FGREVELABCLAUSEOBJTYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createSupplyType"
				]
			}
		}
	},
	{
		"displayName": "fgrevconsclauseobjtype",
		"name": "FGREVCONSCLAUSEOBJTYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createSupplyType"
				]
			}
		}
	},
	{
		"displayName": "fgrevaprovclauseobjtype",
		"name": "FGREVAPROVCLAUSEOBJTYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createSupplyType"
				]
			}
		}
	},
	{
		"displayName": "fgrevhomologclauseobjtype",
		"name": "FGREVHOMOLOGCLAUSEOBJTYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createSupplyType"
				]
			}
		}
	},
	{
		"displayName": "fgexplanationobjtype",
		"name": "FGEXPLANATIONOBJTYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"createSupplyType"
				]
			}
		}
	},
	{
		"displayName": "idstoreroom",
		"name": "IDSTOREROOM",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addEditSupplyWarehouse",
					"deleteSupplyWarehouse"
				]
			}
		}
	},
	{
		"displayName": "vloptimum",
		"name": "VLOPTIMUM",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addEditSupplyWarehouse",
					"deleteSupplyWarehouse"
				]
			}
		}
	},
	{
		"displayName": "vlreplacement",
		"name": "VLREPLACEMENT",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addEditSupplyWarehouse",
					"deleteSupplyWarehouse"
				]
			}
		}
	}
]
    
    
    export default properties;
