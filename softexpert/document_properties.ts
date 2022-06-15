
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
				"name": "new capture instance",
				"value": "newCaptureInstance"
			},
			{
				"name": "cancel document",
				"value": "cancelDocument"
			},
			{
				"name": "check access permission",
				"value": "checkAccessPermission"
			},
			{
				"name": "delete access permission",
				"value": "deleteAccessPermission"
			},
			{
				"name": "delete document",
				"value": "deleteDocument"
			},
			{
				"name": "delete revision",
				"value": "deleteRevision"
			},
			{
				"name": "download eletronic file",
				"value": "downloadEletronicFile"
			},
			{
				"name": "edit document",
				"value": "editDocument"
			},
			{
				"name": "get key words",
				"value": "getKeyWords"
			},
			{
				"name": "get key words data",
				"value": "getKeyWordsData"
			},
			{
				"name": "list access permission",
				"value": "listAccessPermission"
			},
			{
				"name": "list pendency document",
				"value": "listPendencyDocument"
			},
			{
				"name": "new access permission",
				"value": "newAccessPermission"
			},
			{
				"name": "new document",
				"value": "newDocument"
			},
			{
				"name": "new revision",
				"value": "newRevision"
			},
			{
				"name": "release pendency document",
				"value": "releasePendencyDocument"
			},
			{
				"name": "search access audit",
				"value": "searchAccessAudit"
			},
			{
				"name": "search category",
				"value": "searchCategory"
			},
			{
				"name": "search document",
				"value": "searchDocument"
			},
			{
				"name": "set attribute value",
				"value": "setAttributeValue"
			},
			{
				"name": "upload eletronic file",
				"value": "uploadEletronicFile"
			},
			{
				"name": "view document data",
				"value": "viewDocumentData"
			},
			{
				"name": "new document container association",
				"value": "newDocumentContainerAssociation"
			},
			{
				"name": "delete document container association",
				"value": "deleteDocumentContainerAssociation"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "processid",
		"name": "processid",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newCaptureInstance"
				]
			}
		}
	},
	{
		"displayName": "workflowtitle",
		"name": "workflowtitle",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newCaptureInstance"
				]
			}
		}
	},
	{
		"displayName": "documentbatchid",
		"name": "documentbatchid",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newCaptureInstance"
				]
			}
		}
	},
	{
		"displayName": "userid",
		"name": "userid",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newCaptureInstance"
				]
			}
		}
	},
	{
		"displayName": "captbatchid",
		"name": "captbatchid",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newCaptureInstance"
				]
			}
		}
	},
	{
		"displayName": "iddocument",
		"name": "iddocument",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"cancelDocument",
					"checkAccessPermission",
					"deleteAccessPermission",
					"deleteDocument",
					"deleteRevision",
					"downloadEletronicFile",
					"editDocument",
					"listAccessPermission",
					"newAccessPermission",
					"newDocument",
					"newRevision",
					"releasePendencyDocument",
					"searchAccessAudit",
					"setAttributeValue",
					"uploadEletronicFile",
					"viewDocumentData"
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
					"cancelDocument",
					"checkAccessPermission",
					"deleteAccessPermission",
					"deleteDocument",
					"deleteRevision",
					"downloadEletronicFile",
					"editDocument",
					"listAccessPermission",
					"listPendencyDocument",
					"newAccessPermission",
					"newDocument",
					"newRevision",
					"releasePendencyDocument",
					"searchAccessAudit",
					"searchDocument",
					"uploadEletronicFile",
					"viewDocumentData"
				]
			}
		}
	},
	{
		"displayName": "dscancel",
		"name": "dscancel",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"cancelDocument"
				]
			}
		}
	},
	{
		"displayName": "idcategory",
		"name": "idcategory",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"cancelDocument",
					"deleteDocument",
					"downloadEletronicFile",
					"editDocument",
					"listAccessPermission",
					"newAccessPermission",
					"newDocument",
					"newRevision",
					"uploadEletronicFile",
					"viewDocumentData"
				]
			}
		}
	},
	{
		"displayName": "permissiontype",
		"name": "permissiontype",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"checkAccessPermission"
				]
			}
		}
	},
	{
		"displayName": "usertype",
		"name": "usertype",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"deleteAccessPermission",
					"newAccessPermission"
				]
			}
		}
	},
	{
		"displayName": "justify",
		"name": "justify",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"deleteDocument",
					"deleteRevision",
					"releasePendencyDocument"
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
					"deleteRevision",
					"downloadEletronicFile",
					"editDocument",
					"setAttributeValue",
					"uploadEletronicFile",
					"viewDocumentData"
				]
			}
		}
	},
	{
		"displayName": "fgconverttopdf",
		"name": "fgconverttopdf",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"downloadEletronicFile"
				]
			}
		}
	},
	{
		"displayName": "fgwatermark",
		"name": "fgwatermark",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"downloadEletronicFile"
				]
			}
		}
	},
	{
		"displayName": "nmfile",
		"name": "nmfile",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"downloadEletronicFile"
				]
			}
		}
	},
	{
		"displayName": "fgfilelink",
		"name": "fgfilelink",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"downloadEletronicFile"
				]
			}
		}
	},
	{
		"displayName": "title",
		"name": "title",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"editDocument",
					"newDocument"
				]
			}
		}
	},
	{
		"displayName": "summary",
		"name": "summary",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"editDocument"
				]
			}
		}
	},
	{
		"displayName": "letters",
		"name": "letters",
		"type": "collection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"getKeyWords"
				]
			}
		},
		"options": [
			{
				"displayName": "document",
				"name": "document",
				"type": "string",
				"default": ""
			}
		]
	},
	{
		"displayName": "words",
		"name": "words",
		"type": "collection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"getKeyWordsData"
				]
			}
		},
		"options": [
			{
				"displayName": "document",
				"name": "document",
				"type": "string",
				"default": ""
			}
		]
	},
	{
		"displayName": "permission",
		"name": "permission",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newAccessPermission"
				]
			}
		}
	},
	{
		"displayName": "permissionstype",
		"name": "permissionstype",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newAccessPermission"
				]
			}
		}
	},
	{
		"displayName": "fgaddlowerlevel",
		"name": "fgaddlowerlevel",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newAccessPermission"
				]
			}
		}
	},
	{
		"displayName": "dsresume",
		"name": "dsresume",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newDocument"
				]
			}
		}
	},
	{
		"displayName": "dtdocument",
		"name": "dtdocument",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newDocument"
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
					"newDocument",
					"searchDocument"
				]
			}
		}
	},
	{
		"displayName": "participants",
		"name": "participants",
		"type": "collection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"newDocument",
					"newRevision"
				]
			}
		},
		"options": [
			{
				"displayName": "item",
				"name": "item",
				"type": "collection",
				"default": {},
				"options": [
					{
						"displayName": "control",
						"name": "CONTROL",
						"type": "number",
						"default": ""
					},
					{
						"displayName": "entcontrol",
						"name": "ENTCONTROL",
						"type": "string",
						"default": ""
					},
					{
						"displayName": "step",
						"name": "STEP",
						"type": "string",
						"default": ""
					},
					{
						"displayName": "sequence",
						"name": "SEQUENCE",
						"type": "number",
						"default": ""
					},
					{
						"displayName": "qtdeadline",
						"name": "QTDEADLINE",
						"type": "number",
						"default": ""
					}
				]
			}
		]
	},
	{
		"displayName": "fgmodel",
		"name": "fgmodel",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newDocument"
				]
			}
		}
	},
	{
		"displayName": "file",
		"name": "file",
		"type": "collection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"newDocument",
					"newRevision",
					"uploadEletronicFile"
				]
			}
		},
		"options": [
			{
				"displayName": "item",
				"name": "item",
				"type": "collection",
				"default": {},
				"options": [
					{
						"displayName": "nmfile",
						"name": "NMFILE",
						"type": "string",
						"default": ""
					},
					{
						"displayName": "binfile",
						"name": "BINFILE",
						"type": "string",
						"default": ""
					},
					{
						"displayName": "container",
						"name": "CONTAINER",
						"type": "string",
						"default": ""
					},
					{
						"displayName": "error",
						"name": "ERROR",
						"type": "string",
						"default": ""
					}
				]
			}
		]
	},
	{
		"displayName": "keyword",
		"name": "keyword",
		"type": "collection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"newDocument"
				]
			}
		},
		"options": [
			{
				"displayName": "item",
				"name": "item",
				"type": "collection",
				"default": {},
				"options": [
					{
						"displayName": "keyword id",
						"name": "KeywordID",
						"type": "string",
						"default": ""
					}
				]
			}
		]
	},
	{
		"displayName": "documentdata",
		"name": "documentdata",
		"type": "collection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"newRevision"
				]
			}
		},
		"options": [
			{
				"displayName": "nmtitle",
				"name": "NMTITLE",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "attributtes",
				"name": "ATTRIBUTTES",
				"type": "string",
				"default": ""
			}
		]
	},
	{
		"displayName": "fgstatus",
		"name": "fgstatus",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newRevision"
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
					"newRevision"
				]
			}
		}
	},
	{
		"displayName": "approv",
		"name": "approv",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"releasePendencyDocument"
				]
			}
		}
	},
	{
		"displayName": "periodbegin",
		"name": "periodbegin",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"searchAccessAudit"
				]
			}
		}
	},
	{
		"displayName": "periodend",
		"name": "periodend",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"searchAccessAudit"
				]
			}
		}
	},
	{
		"displayName": "filters",
		"name": "filters",
		"type": "collection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"searchDocument"
				]
			}
		},
		"options": [
			{
				"displayName": "idcategory",
				"name": "IDCATEGORY",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "iddocument",
				"name": "IDDOCUMENT",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "nmtitle",
				"name": "NMTITLE",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "nmauthor",
				"name": "NMAUTHOR",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "content",
				"name": "CONTENT",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "synonym",
				"name": "SYNONYM",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "status",
				"name": "STATUS",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "permission",
				"name": "PERMISSION",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "iduserperm",
				"name": "IDUSERPERM",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "departmentperm",
				"name": "DEPARTMENTPERM",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "iduserregister",
				"name": "IDUSERREGISTER",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "functionperm",
				"name": "FUNCTIONPERM",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "keyword",
				"name": "KEYWORD",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "opkeyword",
				"name": "OPKEYWORD",
				"type": "number",
				"default": ""
			},
			{
				"displayName": "dtdoclastday",
				"name": "DTDOCLASTDAY",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "dtdocbegin",
				"name": "DTDOCBEGIN",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "dtdocend",
				"name": "DTDOCEND",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "dtreglastday",
				"name": "DTREGLASTDAY",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "dtregbegin",
				"name": "DTREGBEGIN",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "dtregend",
				"name": "DTREGEND",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "dtvalidbegin",
				"name": "DTVALIDBEGIN",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "dtvalidend",
				"name": "DTVALIDEND",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "dtrevlastday",
				"name": "DTREVLASTDAY",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "dtrevbegin",
				"name": "DTREVBEGIN",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "dtrevend",
				"name": "DTREVEND",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "idproject",
				"name": "IDPROJECT",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "nmproject",
				"name": "NMPROJECT",
				"type": "string",
				"default": ""
			}
		]
	},
	{
		"displayName": "idattribute",
		"name": "idattribute",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"setAttributeValue"
				]
			}
		}
	},
	{
		"displayName": "vlattribute",
		"name": "vlattribute",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"setAttributeValue"
				]
			}
		}
	},
	{
		"displayName": "container",
		"name": "container",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"uploadEletronicFile"
				]
			}
		}
	},
	{
		"displayName": "upper level category id",
		"name": "UpperLevelCategoryID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newDocumentContainerAssociation",
					"deleteDocumentContainerAssociation"
				]
			}
		}
	},
	{
		"displayName": "upper level document id",
		"name": "UpperLevelDocumentID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newDocumentContainerAssociation",
					"deleteDocumentContainerAssociation"
				]
			}
		}
	},
	{
		"displayName": "revision id",
		"name": "RevisionID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newDocumentContainerAssociation",
					"deleteDocumentContainerAssociation"
				]
			}
		}
	},
	{
		"displayName": "struct id",
		"name": "StructID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newDocumentContainerAssociation",
					"deleteDocumentContainerAssociation"
				]
			}
		}
	},
	{
		"displayName": "lower level category id",
		"name": "LowerLevelCategoryID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newDocumentContainerAssociation",
					"deleteDocumentContainerAssociation"
				]
			}
		}
	},
	{
		"displayName": "lower level document id",
		"name": "LowerLevelDocumentID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newDocumentContainerAssociation",
					"deleteDocumentContainerAssociation"
				]
			}
		}
	}
]
    
    
    export default properties;
