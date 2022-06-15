
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
				"name": "add bom",
				"value": "addBom"
			},
			{
				"name": "add characteristic attrib",
				"value": "addCharacteristicAttrib"
			},
			{
				"name": "add characteristic var",
				"value": "addCharacteristicVar"
			},
			{
				"name": "add customer",
				"value": "addCustomer"
			},
			{
				"name": "add manufacturer",
				"value": "addManufacturer"
			},
			{
				"name": "add supplier",
				"value": "addSupplier"
			},
			{
				"name": "delete bom",
				"value": "deleteBom"
			},
			{
				"name": "delete customer",
				"value": "deleteCustomer"
			},
			{
				"name": "delete item",
				"value": "deleteItem"
			},
			{
				"name": "delete manufacturer",
				"value": "deleteManufacturer"
			},
			{
				"name": "delete supplier",
				"value": "deleteSupplier"
			},
			{
				"name": "import_attrib_assoc",
				"value": "import_attrib_assoc"
			},
			{
				"name": "new item",
				"value": "newItem"
			},
			{
				"name": "new itemtype",
				"value": "newItemtype"
			},
			{
				"name": "relate asset type to characteristic",
				"value": "relateAssetTypeToCharacteristic"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "idobjectowner",
		"name": "IDOBJECTOWNER",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addBom",
					"deleteBom"
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
					"addBom",
					"deleteBom"
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
					"addBom",
					"addCharacteristicAttrib",
					"addCharacteristicVar",
					"addCustomer",
					"addManufacturer",
					"addSupplier",
					"deleteBom",
					"deleteCustomer",
					"deleteItem",
					"deleteManufacturer",
					"deleteSupplier",
					"newItem",
					"relateAssetTypeToCharacteristic"
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
					"addBom",
					"addCharacteristicAttrib",
					"addCharacteristicVar",
					"deleteBom",
					"relateAssetTypeToCharacteristic"
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
					"addBom"
				]
			}
		}
	},
	{
		"displayName": "fgapplication",
		"name": "FGAPPLICATION",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addBom",
					"deleteBom"
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
					"addCharacteristicAttrib",
					"addCharacteristicVar",
					"relateAssetTypeToCharacteristic"
				]
			}
		}
	},
	{
		"displayName": "nmcharacteristic",
		"name": "NMCHARACTERISTIC",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCharacteristicAttrib",
					"addCharacteristicVar"
				]
			}
		}
	},
	{
		"displayName": "idinputcharactype",
		"name": "IDINPUTCHARACTYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCharacteristicAttrib",
					"addCharacteristicVar"
				]
			}
		}
	},
	{
		"displayName": "dscharacspecial",
		"name": "DSCHARACSPECIAL",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCharacteristicAttrib",
					"addCharacteristicVar"
				]
			}
		}
	},
	{
		"displayName": "nmclientsymbol",
		"name": "NMCLIENTSYMBOL",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCharacteristicAttrib",
					"addCharacteristicVar"
				]
			}
		}
	},
	{
		"displayName": "nmsuppliersymbol",
		"name": "NMSUPPLIERSYMBOL",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCharacteristicAttrib",
					"addCharacteristicVar"
				]
			}
		}
	},
	{
		"displayName": "qtsamplesize",
		"name": "QTSAMPLESIZE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCharacteristicAttrib",
					"addCharacteristicVar"
				]
			}
		}
	},
	{
		"displayName": "dsobservation",
		"name": "DSOBSERVATION",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCharacteristicAttrib",
					"addCharacteristicVar"
				]
			}
		}
	},
	{
		"displayName": "dsspecification",
		"name": "DSSPECIFICATION",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCharacteristicAttrib"
				]
			}
		}
	},
	{
		"displayName": "qtdecimal",
		"name": "QTDECIMAL",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCharacteristicVar"
				]
			}
		}
	},
	{
		"displayName": "fglimit",
		"name": "FGLIMIT",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCharacteristicVar"
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
					"addCharacteristicVar",
					"newItem"
				]
			}
		}
	},
	{
		"displayName": "vlnominal",
		"name": "VLNOMINAL",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCharacteristicVar"
				]
			}
		}
	},
	{
		"displayName": "vlupper",
		"name": "VLUPPER",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCharacteristicVar"
				]
			}
		}
	},
	{
		"displayName": "vllower",
		"name": "VLLOWER",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCharacteristicVar"
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
					"addCustomer",
					"addManufacturer",
					"addSupplier",
					"deleteCustomer",
					"deleteManufacturer",
					"deleteSupplier"
				]
			}
		}
	},
	{
		"displayName": "nmcompany",
		"name": "NMCOMPANY",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCustomer",
					"addManufacturer",
					"addSupplier",
					"deleteCustomer",
					"deleteManufacturer",
					"deleteSupplier"
				]
			}
		}
	},
	{
		"displayName": "idcompany",
		"name": "IDCOMPANY",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCustomer",
					"addManufacturer",
					"addSupplier",
					"deleteCustomer",
					"deleteManufacturer",
					"deleteSupplier"
				]
			}
		}
	},
	{
		"displayName": "iditemnumbcust",
		"name": "IDITEMNUMBCUST",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCustomer"
				]
			}
		}
	},
	{
		"displayName": "idrevcustomer",
		"name": "IDREVCUSTOMER",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCustomer"
				]
			}
		}
	},
	{
		"displayName": "iddrawcustomer",
		"name": "IDDRAWCUSTOMER",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCustomer"
				]
			}
		}
	},
	{
		"displayName": "dtdrawengchanges",
		"name": "DTDRAWENGCHANGES",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addCustomer"
				]
			}
		}
	},
	{
		"displayName": "idreference",
		"name": "IDREFERENCE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addManufacturer"
				]
			}
		}
	},
	{
		"displayName": "nmmodel",
		"name": "NMMODEL",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addManufacturer"
				]
			}
		}
	},
	{
		"displayName": "idinputsupp",
		"name": "IDINPUTSUPP",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addSupplier"
				]
			}
		}
	},
	{
		"displayName": "dsinputsupp",
		"name": "DSINPUTSUPP",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addSupplier"
				]
			}
		}
	},
	{
		"displayName": "vlqtminreplac",
		"name": "VLQTMINREPLAC",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addSupplier"
				]
			}
		}
	},
	{
		"displayName": "qtexpectarrived",
		"name": "QTEXPECTARRIVED",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addSupplier"
				]
			}
		}
	},
	{
		"displayName": "fgexpectarrived",
		"name": "FGEXPECTARRIVED",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"addSupplier"
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
					"addSupplier"
				]
			}
		}
	},
	{
		"displayName": "idobject",
		"name": "idobject",
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
		"displayName": "nmlabel",
		"name": "nmlabel",
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
		"name": "value",
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
		"name": "idrevision",
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
		"displayName": "nmattribute",
		"name": "nmattribute",
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
		"displayName": "nmobject",
		"name": "NMOBJECT",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newItem"
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
					"newItem",
					"newItemtype"
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
					"newItem"
				]
			}
		}
	},
	{
		"displayName": "fgphysicalstate",
		"name": "FGPHYSICALSTATE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newItem"
				]
			}
		}
	},
	{
		"displayName": "idodor",
		"name": "IDODOR",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newItem"
				]
			}
		}
	},
	{
		"displayName": "nmcolor",
		"name": "NMCOLOR",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newItem"
				]
			}
		}
	},
	{
		"displayName": "idonucode",
		"name": "IDONUCODE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newItem"
				]
			}
		}
	},
	{
		"displayName": "iddangerousness",
		"name": "IDDANGEROUSNESS",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newItem"
				]
			}
		}
	},
	{
		"displayName": "idclassification",
		"name": "IDCLASSIFICATION",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newItem"
				]
			}
		}
	},
	{
		"displayName": "idabntcode",
		"name": "IDABNTCODE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newItem"
				]
			}
		}
	},
	{
		"displayName": "dsconstituents",
		"name": "DSCONSTITUENTS",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newItem"
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
					"newItemtype"
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
					"newItemtype"
				]
			}
		}
	},
	{
		"displayName": "fgusemask",
		"name": "FGUSEMASK",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newItemtype"
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
					"newItemtype"
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
					"newItemtype"
				]
			}
		}
	},
	{
		"displayName": "fguserevision",
		"name": "FGUSEREVISION",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newItemtype"
				]
			}
		}
	},
	{
		"displayName": "fgrevid",
		"name": "FGREVID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newItemtype"
				]
			}
		}
	},
	{
		"displayName": "fgrevapprovalmode",
		"name": "FGREVAPPROVALMODE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newItemtype"
				]
			}
		}
	},
	{
		"displayName": "fgrevreleasemode",
		"name": "FGREVRELEASEMODE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newItemtype"
				]
			}
		}
	},
	{
		"displayName": "qtrevretention",
		"name": "QTREVRETENTION",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newItemtype"
				]
			}
		}
	},
	{
		"displayName": "fgrevretentionmode",
		"name": "FGREVRETENTIONMODE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newItemtype"
				]
			}
		}
	},
	{
		"displayName": "fgrevroutetype",
		"name": "FGREVROUTETYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newItemtype"
				]
			}
		}
	},
	{
		"displayName": "fgrevelabclause",
		"name": "FGREVELABCLAUSE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newItemtype"
				]
			}
		}
	},
	{
		"displayName": "fgrevconsclause",
		"name": "FGREVCONSCLAUSE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newItemtype"
				]
			}
		}
	},
	{
		"displayName": "fgrevaprovclause",
		"name": "FGREVAPROVCLAUSE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newItemtype"
				]
			}
		}
	},
	{
		"displayName": "fgrevhomologclause",
		"name": "FGREVHOMOLOGCLAUSE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newItemtype"
				]
			}
		}
	},
	{
		"displayName": "fgdocviewwatermark",
		"name": "FGDOCVIEWWATERMARK",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newItemtype"
				]
			}
		}
	},
	{
		"displayName": "fgconverttopdf",
		"name": "FGCONVERTTOPDF",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newItemtype"
				]
			}
		}
	},
	{
		"displayName": "fgfiletype",
		"name": "FGFILETYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newItemtype"
				]
			}
		}
	},
	{
		"displayName": "idcomplexfilecont",
		"name": "IDCOMPLEXFILECONT",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newItemtype"
				]
			}
		}
	},
	{
		"displayName": "idassettype",
		"name": "IDASSETTYPE",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"relateAssetTypeToCharacteristic"
				]
			}
		}
	}
]
    
    
    export default properties;
