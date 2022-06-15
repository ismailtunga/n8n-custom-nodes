
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
				"name": "new workflow",
				"value": "newWorkflow"
			},
			{
				"name": "new workflow edit data",
				"value": "newWorkflowEditData"
			},
			{
				"name": "new workflow type edit data",
				"value": "newWorkflowTypeEditData"
			},
			{
				"name": "edit workflow data",
				"value": "editWorkflowData"
			},
			{
				"name": "edit entity record",
				"value": "editEntityRecord"
			},
			{
				"name": "new child entity record",
				"value": "newChildEntityRecord"
			},
			{
				"name": "new child entity record list",
				"value": "newChildEntityRecordList"
			},
			{
				"name": "edit child entity record",
				"value": "editChildEntityRecord"
			},
			{
				"name": "delete child entity record",
				"value": "deleteChildEntityRecord"
			},
			{
				"name": "clear child entity record",
				"value": "clearChildEntityRecord"
			},
			{
				"name": "edit attribute value",
				"value": "editAttributeValue"
			},
			{
				"name": "new attachment",
				"value": "newAttachment"
			},
			{
				"name": "new assoc document",
				"value": "newAssocDocument"
			},
			{
				"name": "new assoc workflow",
				"value": "newAssocWorkflow"
			},
			{
				"name": "execute system activity",
				"value": "executeSystemActivity"
			},
			{
				"name": "execute activity",
				"value": "executeActivity"
			},
			{
				"name": "new access exception",
				"value": "newAccessException"
			},
			{
				"name": "cancel workflow",
				"value": "cancelWorkflow"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "process id",
		"name": "ProcessID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newWorkflow",
					"newWorkflowEditData"
				]
			}
		}
	},
	{
		"displayName": "workflow title",
		"name": "WorkflowTitle",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newWorkflow",
					"newWorkflowEditData",
					"newWorkflowTypeEditData"
				]
			}
		}
	},
	{
		"displayName": "user id",
		"name": "UserID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newWorkflow",
					"newWorkflowEditData",
					"newWorkflowTypeEditData",
					"editWorkflowData",
					"newAttachment",
					"executeActivity",
					"cancelWorkflow"
				]
			}
		}
	},
	{
		"displayName": "requester",
		"name": "Requester",
		"type": "collection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"newWorkflowEditData",
					"newWorkflowTypeEditData",
					"editWorkflowData"
				]
			}
		},
		"options": [
			{
				"displayName": "user",
				"name": "User",
				"type": "collection",
				"default": {},
				"options": [
					{
						"displayName": "user id",
						"name": "UserID",
						"type": "string",
						"default": ""
					}
				]
			},
			{
				"displayName": "customer",
				"name": "Customer",
				"type": "collection",
				"default": {},
				"options": [
					{
						"displayName": "customer id",
						"name": "CustomerID",
						"type": "string",
						"default": ""
					},
					{
						"displayName": "contact",
						"name": "Contact",
						"type": "string",
						"default": ""
					}
				]
			}
		]
	},
	{
		"displayName": "entity list",
		"name": "EntityList",
		"type": "fixedCollection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"newWorkflowEditData",
					"newWorkflowTypeEditData"
				]
			}
		},
		"typeOptions": {
			"multipleValues": true
		},
		"options": [
			{
				"displayName": "entity",
				"name": "Entity",
				"type": "collection",
				"default": {},
				"values": [
					{
						"displayName": "entity id",
						"name": "EntityID",
						"type": "string",
						"default": ""
					},
					{
						"displayName": "entity attribute list",
						"name": "EntityAttributeList",
						"type": "fixedCollection",
						"default": {},
						"typeOptions": {
							"multipleValues": true
						},
						"options": [
							{
								"displayName": "entity attribute",
								"name": "EntityAttribute",
								"type": "collection",
								"default": {},
								"values": [
									{
										"displayName": "entity attribute id",
										"name": "EntityAttributeID",
										"type": "string",
										"default": ""
									},
									{
										"displayName": "entity attribute value",
										"name": "EntityAttributeValue",
										"type": "string",
										"default": ""
									}
								]
							}
						]
					},
					{
						"displayName": "relationship list",
						"name": "RelationshipList",
						"type": "fixedCollection",
						"default": {},
						"typeOptions": {
							"multipleValues": true
						},
						"options": [
							{
								"displayName": "relationship",
								"name": "Relationship",
								"type": "collection",
								"default": {},
								"values": [
									{
										"displayName": "relationship id",
										"name": "RelationshipID",
										"type": "string",
										"default": ""
									},
									{
										"displayName": "relationship attribute list",
										"name": "RelationshipAttributeList",
										"type": "collection",
										"default": {},
										"options": [
											{
												"displayName": "relationship attribute",
												"name": "RelationshipAttribute",
												"type": "collection",
												"default": {},
												"options": [
													{
														"displayName": "relationship attribute id",
														"name": "RelationshipAttributeID",
														"type": "string",
														"default": ""
													},
													{
														"displayName": "relationship attribute value",
														"name": "RelationshipAttributeValue",
														"type": "string",
														"default": ""
													}
												]
											}
										]
									}
								]
							}
						]
					},
					{
						"displayName": "entity attribute file list",
						"name": "EntityAttributeFileList",
						"type": "fixedCollection",
						"default": {},
						"typeOptions": {
							"multipleValues": true
						},
						"options": [
							{
								"displayName": "entity attribute file",
								"name": "EntityAttributeFile",
								"type": "collection",
								"default": {},
								"values": [
									{
										"displayName": "entity attribute id",
										"name": "EntityAttributeID",
										"type": "string",
										"default": ""
									},
									{
										"displayName": "file name",
										"name": "FileName",
										"type": "string",
										"default": ""
									},
									{
										"displayName": "file content",
										"name": "FileContent",
										"type": "string",
										"default": ""
									}
								]
							}
						]
					}
				]
			}
		]
	},
	{
		"displayName": "attribute list",
		"name": "AttributeList",
		"type": "fixedCollection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"newWorkflowEditData",
					"newWorkflowTypeEditData",
					"editAttributeValue"
				]
			}
		},
		"typeOptions": {
			"multipleValues": true
		},
		"options": [
			{
				"displayName": "attribute",
				"name": "Attribute",
				"type": "collection",
				"default": {},
				"values": [
					{
						"displayName": "attribute id",
						"name": "AttributeID",
						"type": "string",
						"default": ""
					},
					{
						"displayName": "attribute value list",
						"name": "AttributeValueList",
						"type": "collection",
						"default": {},
						"options": [
							{
								"displayName": "attribute value",
								"name": "AttributeValue",
								"type": "string",
								"default": ""
							}
						]
					}
				]
			}
		]
	},
	{
		"displayName": "workflow type id",
		"name": "WorkflowTypeID",
		"type": "boolean",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newWorkflowTypeEditData"
				]
			}
		}
	},
	{
		"displayName": "workflow id",
		"name": "WorkflowID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"editWorkflowData",
					"editEntityRecord",
					"newChildEntityRecord",
					"newChildEntityRecordList",
					"editChildEntityRecord",
					"deleteChildEntityRecord",
					"clearChildEntityRecord",
					"editAttributeValue",
					"newAttachment",
					"newAssocDocument",
					"newAssocWorkflow",
					"executeSystemActivity",
					"executeActivity",
					"newAccessException",
					"cancelWorkflow"
				]
			}
		}
	},
	{
		"displayName": "entity id",
		"name": "EntityID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"editEntityRecord"
				]
			}
		}
	},
	{
		"displayName": "entity attribute list",
		"name": "EntityAttributeList",
		"type": "fixedCollection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"editEntityRecord",
					"newChildEntityRecord",
					"editChildEntityRecord"
				]
			}
		},
		"typeOptions": {
			"multipleValues": true
		},
		"options": [
			{
				"displayName": "entity attribute",
				"name": "EntityAttribute",
				"type": "collection",
				"default": {},
				"values": [
					{
						"displayName": "entity attribute id",
						"name": "EntityAttributeID",
						"type": "string",
						"default": ""
					},
					{
						"displayName": "entity attribute value",
						"name": "EntityAttributeValue",
						"type": "string",
						"default": ""
					}
				]
			}
		]
	},
	{
		"displayName": "relationship list",
		"name": "RelationshipList",
		"type": "fixedCollection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"editEntityRecord",
					"newChildEntityRecord",
					"editChildEntityRecord"
				]
			}
		},
		"typeOptions": {
			"multipleValues": true
		},
		"options": [
			{
				"displayName": "relationship",
				"name": "Relationship",
				"type": "collection",
				"default": {},
				"values": [
					{
						"displayName": "relationship id",
						"name": "RelationshipID",
						"type": "string",
						"default": ""
					},
					{
						"displayName": "relationship attribute",
						"name": "RelationshipAttribute",
						"type": "collection",
						"default": {},
						"options": [
							{
								"displayName": "relationship attribute id",
								"name": "RelationshipAttributeID",
								"type": "string",
								"default": ""
							},
							{
								"displayName": "relationship attribute value",
								"name": "RelationshipAttributeValue",
								"type": "string",
								"default": ""
							}
						]
					}
				]
			}
		]
	},
	{
		"displayName": "entity attribute file list",
		"name": "EntityAttributeFileList",
		"type": "fixedCollection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"editEntityRecord",
					"newChildEntityRecord",
					"editChildEntityRecord"
				]
			}
		},
		"typeOptions": {
			"multipleValues": true
		},
		"options": [
			{
				"displayName": "entity attribute file",
				"name": "EntityAttributeFile",
				"type": "collection",
				"default": {},
				"values": [
					{
						"displayName": "entity attribute id",
						"name": "EntityAttributeID",
						"type": "string",
						"default": ""
					},
					{
						"displayName": "file name",
						"name": "FileName",
						"type": "string",
						"default": ""
					},
					{
						"displayName": "file content",
						"name": "FileContent",
						"type": "string",
						"default": ""
					}
				]
			}
		]
	},
	{
		"displayName": "main entity id",
		"name": "MainEntityID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newChildEntityRecord",
					"newChildEntityRecordList",
					"editChildEntityRecord",
					"deleteChildEntityRecord",
					"clearChildEntityRecord"
				]
			}
		}
	},
	{
		"displayName": "child relationship id",
		"name": "ChildRelationshipID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newChildEntityRecord",
					"newChildEntityRecordList",
					"editChildEntityRecord",
					"deleteChildEntityRecord",
					"clearChildEntityRecord"
				]
			}
		}
	},
	{
		"displayName": "entity record list",
		"name": "EntityRecordList",
		"type": "fixedCollection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"newChildEntityRecordList"
				]
			}
		},
		"typeOptions": {
			"multipleValues": true
		},
		"options": [
			{
				"displayName": "entity record",
				"name": "EntityRecord",
				"type": "collection",
				"default": {},
				"values": [
					{
						"displayName": "entity attribute list",
						"name": "EntityAttributeList",
						"type": "fixedCollection",
						"default": {},
						"typeOptions": {
							"multipleValues": true
						},
						"options": [
							{
								"displayName": "entity attribute",
								"name": "EntityAttribute",
								"type": "collection",
								"default": {},
								"values": [
									{
										"displayName": "entity attribute id",
										"name": "EntityAttributeID",
										"type": "string",
										"default": ""
									},
									{
										"displayName": "entity attribute value",
										"name": "EntityAttributeValue",
										"type": "string",
										"default": ""
									}
								]
							}
						]
					},
					{
						"displayName": "relationship list",
						"name": "RelationshipList",
						"type": "fixedCollection",
						"default": {},
						"typeOptions": {
							"multipleValues": true
						},
						"options": [
							{
								"displayName": "relationship",
								"name": "Relationship",
								"type": "collection",
								"default": {},
								"values": [
									{
										"displayName": "relationship id",
										"name": "RelationshipID",
										"type": "string",
										"default": ""
									},
									{
										"displayName": "relationship attribute",
										"name": "RelationshipAttribute",
										"type": "collection",
										"default": {},
										"options": [
											{
												"displayName": "relationship attribute id",
												"name": "RelationshipAttributeID",
												"type": "string",
												"default": ""
											},
											{
												"displayName": "relationship attribute value",
												"name": "RelationshipAttributeValue",
												"type": "string",
												"default": ""
											}
										]
									}
								]
							}
						]
					},
					{
						"displayName": "entity attribute file list",
						"name": "EntityAttributeFileList",
						"type": "fixedCollection",
						"default": {},
						"typeOptions": {
							"multipleValues": true
						},
						"options": [
							{
								"displayName": "entity attribute file",
								"name": "EntityAttributeFile",
								"type": "collection",
								"default": {},
								"values": [
									{
										"displayName": "entity attribute id",
										"name": "EntityAttributeID",
										"type": "string",
										"default": ""
									},
									{
										"displayName": "file name",
										"name": "FileName",
										"type": "string",
										"default": ""
									},
									{
										"displayName": "file content",
										"name": "FileContent",
										"type": "string",
										"default": ""
									}
								]
							}
						]
					}
				]
			}
		]
	},
	{
		"displayName": "child record oid",
		"name": "ChildRecordOID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"editChildEntityRecord",
					"deleteChildEntityRecord"
				]
			}
		}
	},
	{
		"displayName": "activity id",
		"name": "ActivityID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newAttachment",
					"newAssocDocument",
					"newAssocWorkflow",
					"executeSystemActivity",
					"executeActivity"
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
					"newAttachment"
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
					"newAttachment"
				]
			}
		}
	},
	{
		"displayName": "attachment id",
		"name": "AttachmentID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newAttachment"
				]
			}
		}
	},
	{
		"displayName": "attachment name",
		"name": "AttachmentName",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newAttachment"
				]
			}
		}
	},
	{
		"displayName": "summary",
		"name": "Summary",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newAttachment"
				]
			}
		}
	},
	{
		"displayName": "document id",
		"name": "DocumentID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newAssocDocument"
				]
			}
		}
	},
	{
		"displayName": "assoc workflow list",
		"name": "AssocWorkflowList",
		"type": "fixedCollection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"newAssocWorkflow"
				]
			}
		},
		"typeOptions": {
			"multipleValues": true
		},
		"options": [
			{
				"displayName": "assoc workflow",
				"name": "AssocWorkflow",
				"type": "collection",
				"default": {},
				"values": [
					{
						"displayName": "assoc workflow id",
						"name": "AssocWorkflowID",
						"type": "string",
						"default": ""
					},
					{
						"displayName": "assoc workflow type",
						"name": "AssocWorkflowType",
						"type": "number",
						"default": ""
					}
				]
			}
		]
	},
	{
		"displayName": "activity order",
		"name": "ActivityOrder",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newAssocWorkflow",
					"executeSystemActivity",
					"executeActivity"
				]
			}
		}
	},
	{
		"displayName": "action sequence",
		"name": "ActionSequence",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"executeActivity"
				]
			}
		}
	},
	{
		"displayName": "access exception list",
		"name": "AccessExceptionList",
		"type": "fixedCollection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"newAccessException"
				]
			}
		},
		"typeOptions": {
			"multipleValues": true
		},
		"options": [
			{
				"displayName": "access exception",
				"name": "AccessException",
				"type": "collection",
				"default": {},
				"values": [
					{
						"displayName": "user id",
						"name": "UserID",
						"type": "string",
						"default": ""
					}
				]
			}
		]
	},
	{
		"displayName": "explanation",
		"name": "Explanation",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"cancelWorkflow"
				]
			}
		}
	}
]
    
    
    export default properties;
