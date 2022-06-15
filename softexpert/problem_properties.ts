
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
				"name": "new problem edit data",
				"value": "newProblemEditData"
			},
			{
				"name": "new problem",
				"value": "newProblem"
			},
			{
				"name": "cancel problem",
				"value": "cancelProblem"
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
				"name": "new assoc document",
				"value": "newAssocDocument"
			},
			{
				"name": "new attachment",
				"value": "newAttachment"
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
				"name": "edit loss event",
				"value": "editLossEvent"
			},
			{
				"name": "edit problem data",
				"value": "editProblemData"
			},
			{
				"name": "new access exception",
				"value": "newAccessException"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "problem type id",
		"name": "ProblemTypeID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newProblemEditData",
					"newProblem"
				]
			}
		}
	},
	{
		"displayName": "problem title",
		"name": "ProblemTitle",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"newProblemEditData",
					"newProblem"
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
					"newProblemEditData",
					"newProblem",
					"cancelProblem",
					"newAttachment",
					"executeActivity",
					"editProblemData"
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
					"newProblemEditData",
					"editProblemData"
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
					"newProblemEditData"
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
					"newProblemEditData",
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
		"displayName": "problem id",
		"name": "ProblemID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"cancelProblem",
					"editEntityRecord",
					"newChildEntityRecord",
					"newChildEntityRecordList",
					"editChildEntityRecord",
					"deleteChildEntityRecord",
					"clearChildEntityRecord",
					"editAttributeValue",
					"newAssocDocument",
					"newAttachment",
					"executeSystemActivity",
					"executeActivity",
					"editLossEvent",
					"editProblemData",
					"newAccessException"
				]
			}
		}
	},
	{
		"displayName": "explanation",
		"name": "Explanation",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"cancelProblem"
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
					"newAssocDocument",
					"newAttachment",
					"executeSystemActivity",
					"executeActivity"
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
		"displayName": "activity order",
		"name": "ActivityOrder",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
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
		"displayName": "loss event type",
		"name": "LossEventType",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"editLossEvent"
				]
			}
		}
	},
	{
		"displayName": "root loss problem id",
		"name": "RootLossProblemID",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"editLossEvent"
				]
			}
		}
	},
	{
		"displayName": "occurrence date",
		"name": "OccurrenceDate",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"editLossEvent"
				]
			}
		}
	},
	{
		"displayName": "recognition date",
		"name": "RecognitionDate",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"editLossEvent"
				]
			}
		}
	},
	{
		"displayName": "record date",
		"name": "RecordDate",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"editLossEvent"
				]
			}
		}
	},
	{
		"displayName": "gross loss value",
		"name": "GrossLossValue",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"editLossEvent"
				]
			}
		}
	},
	{
		"displayName": "value item list",
		"name": "ValueItemList",
		"type": "fixedCollection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"editLossEvent"
				]
			}
		},
		"typeOptions": {
			"multipleValues": true
		},
		"options": [
			{
				"displayName": "value item",
				"name": "ValueItem",
				"type": "collection",
				"default": {},
				"values": [
					{
						"displayName": "item name",
						"name": "ItemName",
						"type": "string",
						"default": ""
					},
					{
						"displayName": "item value",
						"name": "ItemValue",
						"type": "number",
						"default": ""
					}
				]
			}
		]
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
	}
]
    
    
    export default properties;
