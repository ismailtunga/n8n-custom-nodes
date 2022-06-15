
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
				"name": "del_object type",
				"value": "del_objectType"
			},
			{
				"name": "delete_asset conf site",
				"value": "delete_assetConfSite"
			},
			{
				"name": "import_asset",
				"value": "import_asset"
			},
			{
				"name": "import_asset_oee",
				"value": "import_asset_oee"
			},
			{
				"name": "import_asset_site",
				"value": "import_asset_site"
			},
			{
				"name": "import_asset_state",
				"value": "import_asset_state"
			},
			{
				"name": "import_asset_status",
				"value": "import_asset_status"
			},
			{
				"name": "import_asset_structure_insert_update",
				"value": "import_asset_structure_insert_update"
			},
			{
				"name": "import_asset conf site",
				"value": "import_assetConfSite"
			},
			{
				"name": "import_attrib_assoc",
				"value": "import_attrib_assoc"
			},
			{
				"name": "import_del_asset",
				"value": "import_del_asset"
			},
			{
				"name": "import_del_asset_site",
				"value": "import_del_asset_site"
			},
			{
				"name": "import_del_asset_state",
				"value": "import_del_asset_state"
			},
			{
				"name": "import_del_asset_structure",
				"value": "import_del_asset_structure"
			},
			{
				"name": "import_object security",
				"value": "import_objectSecurity"
			},
			{
				"name": "import_object type",
				"value": "import_objectType"
			},
			{
				"name": "import plan activity",
				"value": "importPlanActivity"
			},
			{
				"name": "import asset downtime",
				"value": "importAssetDowntime"
			},
			{
				"name": "import cmdb relationship",
				"value": "importCMDBRelationship"
			},
			{
				"name": "delete cmdb relationship",
				"value": "deleteCMDBRelationship"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "idobjecttype",
		"name": "idobjecttype",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"del_objectType",
					"import_asset",
					"import_objectSecurity",
					"import_objectType"
				]
			}
		}
	},
	{
		"displayName": "idsite",
		"name": "idsite",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"delete_assetConfSite",
					"import_assetConfSite"
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
					"import_asset",
					"import_asset_oee",
					"import_asset_site",
					"import_asset_state",
					"import_asset_status",
					"import_asset_structure_insert_update",
					"import_attrib_assoc",
					"import_del_asset",
					"import_del_asset_site",
					"import_del_asset_state",
					"import_del_asset_structure"
				]
			}
		}
	},
	{
		"displayName": "nmobject",
		"name": "nmobject",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset"
				]
			}
		}
	},
	{
		"displayName": "idteam",
		"name": "idteam",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset",
					"importPlanActivity"
				]
			}
		}
	},
	{
		"displayName": "fgapplication",
		"name": "fgapplication",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset",
					"import_asset_structure_insert_update",
					"import_del_asset_structure"
				]
			}
		}
	},
	{
		"displayName": "dtstartoper",
		"name": "dtstartoper",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset"
				]
			}
		}
	},
	{
		"displayName": "quantity",
		"name": "quantity",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset"
				]
			}
		}
	},
	{
		"displayName": "cavity",
		"name": "cavity",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset"
				]
			}
		}
	},
	{
		"displayName": "manufacturer",
		"name": "manufacturer",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset"
				]
			}
		}
	},
	{
		"displayName": "idserialnumber",
		"name": "idserialnumber",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset"
				]
			}
		}
	},
	{
		"displayName": "idmodel",
		"name": "idmodel",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset"
				]
			}
		}
	},
	{
		"displayName": "idcalendar",
		"name": "idcalendar",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset",
					"importPlanActivity"
				]
			}
		}
	},
	{
		"displayName": "supplier",
		"name": "supplier",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset"
				]
			}
		}
	},
	{
		"displayName": "vlequipmentcost",
		"name": "vlequipmentcost",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset"
				]
			}
		}
	},
	{
		"displayName": "vlcost",
		"name": "vlcost",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset"
				]
			}
		}
	},
	{
		"displayName": "dtrevision",
		"name": "dtrevision",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset"
				]
			}
		}
	},
	{
		"displayName": "attributes",
		"name": "attributes",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset"
				]
			}
		}
	},
	{
		"displayName": "dsdescription",
		"name": "dsdescription",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset"
				]
			}
		}
	},
	{
		"displayName": "characteristics",
		"name": "characteristics",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset"
				]
			}
		}
	},
	{
		"displayName": "dsobservation",
		"name": "dsobservation",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset",
					"import_asset_state"
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
					"import_asset_oee"
				]
			}
		}
	},
	{
		"displayName": "dtend",
		"name": "dtend",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset_oee"
				]
			}
		}
	},
	{
		"displayName": "qtquality",
		"name": "qtquality",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset_oee"
				]
			}
		}
	},
	{
		"displayName": "qttotal",
		"name": "qttotal",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset_oee"
				]
			}
		}
	},
	{
		"displayName": "qtproduced",
		"name": "qtproduced",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset_oee"
				]
			}
		}
	},
	{
		"displayName": "qtplanned",
		"name": "qtplanned",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset_oee"
				]
			}
		}
	},
	{
		"displayName": "date",
		"name": "date",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset_site"
				]
			}
		}
	},
	{
		"displayName": "hour",
		"name": "hour",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset_site"
				]
			}
		}
	},
	{
		"displayName": "type",
		"name": "type",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset_site"
				]
			}
		}
	},
	{
		"displayName": "location",
		"name": "location",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset_site"
				]
			}
		}
	},
	{
		"displayName": "user",
		"name": "user",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset_site"
				]
			}
		}
	},
	{
		"displayName": "comments",
		"name": "comments",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset_site"
				]
			}
		}
	},
	{
		"displayName": "fgupdatechildrensite",
		"name": "fgupdatechildrensite",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset_site"
				]
			}
		}
	},
	{
		"displayName": "dtstate",
		"name": "dtstate",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset_state"
				]
			}
		}
	},
	{
		"displayName": "tmstate",
		"name": "tmstate",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset_state"
				]
			}
		}
	},
	{
		"displayName": "idstate",
		"name": "idstate",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset_state"
				]
			}
		}
	},
	{
		"displayName": "fgasstatus",
		"name": "fgasstatus",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset_status"
				]
			}
		}
	},
	{
		"displayName": "reserve",
		"name": "reserve",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset_status"
				]
			}
		}
	},
	{
		"displayName": "dsjustify",
		"name": "dsjustify",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset_status"
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
					"import_asset_structure_insert_update",
					"import_attrib_assoc",
					"import_del_asset_structure"
				]
			}
		}
	},
	{
		"displayName": "idobjectchild",
		"name": "idobjectchild",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset_structure_insert_update",
					"import_del_asset_structure"
				]
			}
		}
	},
	{
		"displayName": "idrevisionchild",
		"name": "idrevisionchild",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset_structure_insert_update",
					"import_del_asset_structure"
				]
			}
		}
	},
	{
		"displayName": "vlquantity",
		"name": "vlquantity",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_asset_structure_insert_update"
				]
			}
		}
	},
	{
		"displayName": "nmsite",
		"name": "nmsite",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_assetConfSite"
				]
			}
		}
	},
	{
		"displayName": "fgenabled",
		"name": "fgenabled",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_assetConfSite"
				]
			}
		}
	},
	{
		"displayName": "idsiteowner",
		"name": "idsiteowner",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_assetConfSite"
				]
			}
		}
	},
	{
		"displayName": "idattribute",
		"name": "idattribute",
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
		"displayName": "fginsertlistvalue",
		"name": "fginsertlistvalue",
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
		"displayName": "dsvalue",
		"name": "dsvalue",
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
		"displayName": "accesstype",
		"name": "accesstype",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_objectSecurity"
				]
			}
		}
	},
	{
		"displayName": "permission",
		"name": "permission",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_objectSecurity"
				]
			}
		}
	},
	{
		"displayName": "idaccesstype",
		"name": "idaccesstype",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_objectSecurity"
				]
			}
		}
	},
	{
		"displayName": "idfunction",
		"name": "idfunction",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_objectSecurity"
				]
			}
		}
	},
	{
		"displayName": "insert",
		"name": "insert",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_objectSecurity"
				]
			}
		}
	},
	{
		"displayName": "edit",
		"name": "edit",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_objectSecurity"
				]
			}
		}
	},
	{
		"displayName": "delete",
		"name": "delete",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_objectSecurity"
				]
			}
		}
	},
	{
		"displayName": "security",
		"name": "security",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_objectSecurity"
				]
			}
		}
	},
	{
		"displayName": "list",
		"name": "list",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_objectSecurity"
				]
			}
		}
	},
	{
		"displayName": "view",
		"name": "view",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_objectSecurity"
				]
			}
		}
	},
	{
		"displayName": "nmobjecttype",
		"name": "nmobjecttype",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_objectType"
				]
			}
		}
	},
	{
		"displayName": "idobjecttypeowner",
		"name": "idobjecttypeowner",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_objectType"
				]
			}
		}
	},
	{
		"displayName": "fgusemask",
		"name": "fgusemask",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_objectType"
				]
			}
		}
	},
	{
		"displayName": "idmask",
		"name": "idmask",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_objectType"
				]
			}
		}
	},
	{
		"displayName": "fgeditid",
		"name": "fgeditid",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_objectType"
				]
			}
		}
	},
	{
		"displayName": "fguserevisionobjtype",
		"name": "fguserevisionobjtype",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_objectType"
				]
			}
		}
	},
	{
		"displayName": "fgrevidobjtype",
		"name": "fgrevidobjtype",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_objectType"
				]
			}
		}
	},
	{
		"displayName": "fgrevapprovalmodeobjtype",
		"name": "fgrevapprovalmodeobjtype",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_objectType"
				]
			}
		}
	},
	{
		"displayName": "fgrevreleasemodeobjtype",
		"name": "fgrevreleasemodeobjtype",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_objectType"
				]
			}
		}
	},
	{
		"displayName": "qtrevretentionobjtype",
		"name": "qtrevretentionobjtype",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_objectType"
				]
			}
		}
	},
	{
		"displayName": "fgrevretentionmodeobjtype",
		"name": "fgrevretentionmodeobjtype",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_objectType"
				]
			}
		}
	},
	{
		"displayName": "fgrevroutetypeobjtype",
		"name": "fgrevroutetypeobjtype",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_objectType"
				]
			}
		}
	},
	{
		"displayName": "fgrevelabclauseobjtype",
		"name": "fgrevelabclauseobjtype",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_objectType"
				]
			}
		}
	},
	{
		"displayName": "fgrevconsclauseobjtype",
		"name": "fgrevconsclauseobjtype",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_objectType"
				]
			}
		}
	},
	{
		"displayName": "fgrevaprovclauseobjtype",
		"name": "fgrevaprovclauseobjtype",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_objectType"
				]
			}
		}
	},
	{
		"displayName": "fgrevhomologclauseobjtype",
		"name": "fgrevhomologclauseobjtype",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"import_objectType"
				]
			}
		}
	},
	{
		"displayName": "fgoption",
		"name": "fgoption",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importPlanActivity"
				]
			}
		}
	},
	{
		"displayName": "fgplantype",
		"name": "fgplantype",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importPlanActivity"
				]
			}
		}
	},
	{
		"displayName": "idplanactivity",
		"name": "idplanactivity",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importPlanActivity"
				]
			}
		}
	},
	{
		"displayName": "nmplanactivity",
		"name": "nmplanactivity",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importPlanActivity"
				]
			}
		}
	},
	{
		"displayName": "idmodelactivity",
		"name": "idmodelactivity",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importPlanActivity"
				]
			}
		}
	},
	{
		"displayName": "fgplanconf",
		"name": "fgplanconf",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importPlanActivity"
				]
			}
		}
	},
	{
		"displayName": "idasset",
		"name": "idasset",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importPlanActivity"
				]
			}
		}
	},
	{
		"displayName": "idteamprog",
		"name": "idteamprog",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importPlanActivity"
				]
			}
		}
	},
	{
		"displayName": "idteamexec",
		"name": "idteamexec",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importPlanActivity"
				]
			}
		}
	},
	{
		"displayName": "fgdatefrequency",
		"name": "fgdatefrequency",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importPlanActivity"
				]
			}
		}
	},
	{
		"displayName": "fgfreqtype",
		"name": "fgfreqtype",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importPlanActivity"
				]
			}
		}
	},
	{
		"displayName": "qtfrequence",
		"name": "qtfrequence",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importPlanActivity"
				]
			}
		}
	},
	{
		"displayName": "fgfrequnit",
		"name": "fgfrequnit",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importPlanActivity"
				]
			}
		}
	},
	{
		"displayName": "fgdateview",
		"name": "fgdateview",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importPlanActivity"
				]
			}
		}
	},
	{
		"displayName": "dtnextexecution",
		"name": "dtnextexecution",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importPlanActivity"
				]
			}
		}
	},
	{
		"displayName": "fgmeterfrequency",
		"name": "fgmeterfrequency",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importPlanActivity"
				]
			}
		}
	},
	{
		"displayName": "vlmeterfrequency",
		"name": "vlmeterfrequency",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importPlanActivity"
				]
			}
		}
	},
	{
		"displayName": "vlantecipation",
		"name": "vlantecipation",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importPlanActivity"
				]
			}
		}
	},
	{
		"displayName": "vlnextexecution",
		"name": "vlnextexecution",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importPlanActivity"
				]
			}
		}
	},
	{
		"displayName": "fgautocreate",
		"name": "fgautocreate",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importPlanActivity"
				]
			}
		}
	},
	{
		"displayName": "fgautostatus",
		"name": "fgautostatus",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importPlanActivity"
				]
			}
		}
	},
	{
		"displayName": "qtdaybefore",
		"name": "qtdaybefore",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importPlanActivity"
				]
			}
		}
	},
	{
		"displayName": "fgkeepcreating",
		"name": "fgkeepcreating",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importPlanActivity"
				]
			}
		}
	},
	{
		"displayName": "idevalmethod",
		"name": "idevalmethod",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importPlanActivity"
				]
			}
		}
	},
	{
		"displayName": "dsevalcrit",
		"name": "dsevalcrit",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importPlanActivity"
				]
			}
		}
	},
	{
		"displayName": "qtnotifyb4day",
		"name": "qtnotifyb4day",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importPlanActivity"
				]
			}
		}
	},
	{
		"displayName": "fg option",
		"name": "FgOption",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importAssetDowntime"
				]
			}
		}
	},
	{
		"displayName": "id asset",
		"name": "IdAsset",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importAssetDowntime"
				]
			}
		}
	},
	{
		"displayName": "id downtime reason",
		"name": "IdDowntimeReason",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importAssetDowntime"
				]
			}
		}
	},
	{
		"displayName": "dt start",
		"name": "DtStart",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importAssetDowntime"
				]
			}
		}
	},
	{
		"displayName": "qt start",
		"name": "QtStart",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importAssetDowntime"
				]
			}
		}
	},
	{
		"displayName": "dt end",
		"name": "DtEnd",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importAssetDowntime"
				]
			}
		}
	},
	{
		"displayName": "qt end",
		"name": "QtEnd",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importAssetDowntime"
				]
			}
		}
	},
	{
		"displayName": "ds comments",
		"name": "DsComments",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importAssetDowntime"
				]
			}
		}
	},
	{
		"displayName": "type from",
		"name": "TypeFrom",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importCMDBRelationship",
					"deleteCMDBRelationship"
				]
			}
		}
	},
	{
		"displayName": "identifier from",
		"name": "IdentifierFrom",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importCMDBRelationship",
					"deleteCMDBRelationship"
				]
			}
		}
	},
	{
		"displayName": "type to",
		"name": "TypeTo",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importCMDBRelationship",
					"deleteCMDBRelationship"
				]
			}
		}
	},
	{
		"displayName": "identifier to",
		"name": "IdentifierTo",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importCMDBRelationship",
					"deleteCMDBRelationship"
				]
			}
		}
	},
	{
		"displayName": "relationship name",
		"name": "RelationshipName",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importCMDBRelationship"
				]
			}
		}
	},
	{
		"displayName": "reverse relationship",
		"name": "ReverseRelationship",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"importCMDBRelationship"
				]
			}
		}
	}
]
    
    
    export default properties;
