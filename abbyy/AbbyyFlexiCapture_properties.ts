
import {
	INodeProperties
} from "n8n-workflow";

const properties: INodeProperties[] =
	[
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"default": "",
			"options": [
				{
					"name": "read document",
					"value": "ReadDocument"
				},
				{
					"name": "open session",
					"value": "OpenSession"
				},
				{
					"name": "get session info",
					"value": "GetSessionInfo"
				},
				{
					"name": "get projects",
					"value": "GetProjects"
				},
				{
					"name": "get projects for user",
					"value": "GetProjectsForUser"
				},
				{
					"name": "get projects for station type",
					"value": "GetProjectsForStationType"
				},
				{
					"name": "get processing stages",
					"value": "GetProcessingStages"
				},
				{
					"name": "get templates",
					"value": "GetTemplates"
				},
				{
					"name": "get batch type templates",
					"value": "GetBatchTypeTemplates"
				},
				{
					"name": "close session",
					"value": "CloseSession"
				},
				{
					"name": "open project",
					"value": "OpenProject"
				},
				{
					"name": "close project",
					"value": "CloseProject"
				},
				{
					"name": "get batch types",
					"value": "GetBatchTypes"
				},
				{
					"name": "get allowed batch types",
					"value": "GetAllowedBatchTypes"
				},
				{
					"name": "add new batch",
					"value": "AddNewBatch"
				},
				{
					"name": "delete batch",
					"value": "DeleteBatch"
				},
				{
					"name": "add new image",
					"value": "AddNewImage"
				},
				{
					"name": "get batch ids range",
					"value": "GetBatchIdsRange"
				},
				{
					"name": "add new document",
					"value": "AddNewDocument"
				},
				{
					"name": "add new page",
					"value": "AddNewPage"
				},
				{
					"name": "move batch item",
					"value": "MoveBatchItem"
				},
				{
					"name": "process batch",
					"value": "ProcessBatch"
				},
				{
					"name": "get batch percent completed",
					"value": "GetBatchPercentCompleted"
				},
				{
					"name": "get documents",
					"value": "GetDocuments"
				},
				{
					"name": "get document results list",
					"value": "GetDocumentResultsList"
				},
				{
					"name": "load document result",
					"value": "LoadDocumentResult"
				},
				{
					"name": "is session exists",
					"value": "IsSessionExists"
				},
				{
					"name": "get batch type",
					"value": "GetBatchType"
				},
				{
					"name": "get batches",
					"value": "GetBatches"
				},
				{
					"name": "get filtered batches",
					"value": "GetFilteredBatches"
				},
				{
					"name": "get batch",
					"value": "GetBatch"
				},
				{
					"name": "update batch",
					"value": "UpdateBatch"
				},
				{
					"name": "open batch",
					"value": "OpenBatch"
				},
				{
					"name": "close batch",
					"value": "CloseBatch"
				},
				{
					"name": "get document",
					"value": "GetDocument"
				},
				{
					"name": "delete page",
					"value": "DeletePage"
				},
				{
					"name": "delete document",
					"value": "DeleteDocument"
				},
				{
					"name": "replace page image",
					"value": "ReplacePageImage"
				},
				{
					"name": "set document properties",
					"value": "SetDocumentProperties"
				},
				{
					"name": "load custom file",
					"value": "LoadCustomFile"
				},
				{
					"name": "save custom file",
					"value": "SaveCustomFile"
				},
				{
					"name": "remove custom file",
					"value": "RemoveCustomFile"
				},
				{
					"name": "get custom file names",
					"value": "GetCustomFileNames"
				},
				{
					"name": "load attachment",
					"value": "LoadAttachment"
				},
				{
					"name": "save attachment",
					"value": "SaveAttachment"
				},
				{
					"name": "remove attachment",
					"value": "RemoveAttachment"
				},
				{
					"name": "get attachment names",
					"value": "GetAttachmentNames"
				},
				{
					"name": "write to log",
					"value": "WriteToLog"
				},
				{
					"name": "get available tasks",
					"value": "GetAvailableTasks"
				},
				{
					"name": "get available tasks by stage id",
					"value": "GetAvailableTasksByStageId"
				},
				{
					"name": "get task info",
					"value": "GetTaskInfo"
				},
				{
					"name": "create task",
					"value": "CreateTask"
				},
				{
					"name": "open task",
					"value": "OpenTask"
				},
				{
					"name": "get task",
					"value": "GetTask"
				},
				{
					"name": "get task by stage id",
					"value": "GetTaskByStageId"
				},
				{
					"name": "get current task",
					"value": "GetCurrentTask"
				},
				{
					"name": "get task documents",
					"value": "GetTaskDocuments"
				},
				{
					"name": "close task",
					"value": "CloseTask"
				},
				{
					"name": "cancel task",
					"value": "CancelTask"
				},
				{
					"name": "postpone task",
					"value": "PostponeTask"
				},
				{
					"name": "get postponed tasks",
					"value": "GetPostponedTasks"
				},
				{
					"name": "send task to exception",
					"value": "SendTaskToException"
				},
				{
					"name": "send task",
					"value": "SendTask"
				},
				{
					"name": "get new ticket",
					"value": "GetNewTicket"
				},
				{
					"name": "update ticket",
					"value": "UpdateTicket"
				},
				{
					"name": "release ticket",
					"value": "ReleaseTicket"
				},
				{
					"name": "has rights for batch type",
					"value": "HasRightsForBatchType"
				},
				{
					"name": "get setting value",
					"value": "GetSettingValue"
				},
				{
					"name": "set setting value",
					"value": "SetSettingValue"
				},
				{
					"name": "find user",
					"value": "FindUser"
				},
				{
					"name": "add user if not exist",
					"value": "AddUserIfNotExist"
				},
				{
					"name": "get user",
					"value": "GetUser"
				},
				{
					"name": "get users",
					"value": "GetUsers"
				},
				{
					"name": "get available users",
					"value": "GetAvailableUsers"
				},
				{
					"name": "create request",
					"value": "CreateRequest"
				},
				{
					"name": "delete request",
					"value": "DeleteRequest"
				},
				{
					"name": "get request status",
					"value": "GetRequestStatus"
				},
				{
					"name": "set request status",
					"value": "SetRequestStatus"
				},
				{
					"name": "get requests",
					"value": "GetRequests"
				},
				{
					"name": "get available queues",
					"value": "GetAvailableQueues"
				},
				{
					"name": "get user statistics",
					"value": "GetUserStatistics"
				},
				{
					"name": "get roles",
					"value": "GetRoles"
				},
				{
					"name": "get user roles",
					"value": "GetUserRoles"
				},
				{
					"name": "set task priority",
					"value": "SetTaskPriority"
				},
				{
					"name": "set document priority",
					"value": "SetDocumentPriority"
				},
				{
					"name": "get current user identity",
					"value": "GetCurrentUserIdentity"
				}
			],
			"placeholder": "Placeholder value",
			"description": "The description text"
		},
		{
			"displayName": "role type",
			"name": "roleType",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"OpenSession",
						"GetProjectsForUser",
						"GetAllowedBatchTypes",
						"HasRightsForBatchType"
					]
				}
			}
		},
		{
			"displayName": "station type",
			"name": "stationType",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"OpenSession",
						"GetNewTicket"
					]
				}
			}
		},
		{
			"displayName": "session id",
			"name": "sessionId",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GetSessionInfo",
						"CloseSession",
						"OpenProject",
						"CloseProject",
						"AddNewBatch",
						"DeleteBatch",
						"AddNewImage",
						"AddNewDocument",
						"AddNewPage",
						"MoveBatchItem",
						"ProcessBatch",
						"GetDocuments",
						"GetDocumentResultsList",
						"LoadDocumentResult",
						"IsSessionExists",
						"GetBatches",
						"GetFilteredBatches",
						"UpdateBatch",
						"OpenBatch",
						"CloseBatch",
						"GetDocument",
						"DeletePage",
						"DeleteDocument",
						"ReplacePageImage",
						"SetDocumentProperties",
						"SaveCustomFile",
						"RemoveCustomFile",
						"LoadAttachment",
						"SaveAttachment",
						"RemoveAttachment",
						"GetAvailableTasks",
						"GetAvailableTasksByStageId",
						"CreateTask",
						"OpenTask",
						"GetTask",
						"GetTaskByStageId",
						"GetCurrentTask",
						"CloseTask",
						"CancelTask",
						"PostponeTask",
						"GetPostponedTasks",
						"SendTaskToException",
						"SendTask",
						"GetNewTicket",
						"UpdateTicket",
						"ReleaseTicket",
						"HasRightsForBatchType",
						"DeleteRequest",
						"GetRequests",
						"GetAvailableQueues",
						"SetTaskPriority",
						"SetDocumentPriority"
					]
				}
			}
		},
		{
			"displayName": "user id",
			"name": "userId",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GetProjectsForUser",
						"GetProjectsForStationType",
						"GetAllowedBatchTypes",
						"CreateTask",
						"GetSettingValue",
						"SetSettingValue",
						"GetUser",
						"GetUserStatistics"
					]
				}
			}
		},
		{
			"displayName": "workstation type",
			"name": "workstationType",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GetProjectsForStationType"
					]
				}
			}
		},
		{
			"displayName": "project id",
			"name": "projectId",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GetProcessingStages",
						"GetTemplates",
						"GetBatchTypeTemplates",
						"CloseProject",
						"GetBatchTypes",
						"GetAllowedBatchTypes",
						"AddNewBatch",
						"GetBatches",
						"GetFilteredBatches",
						"LoadAttachment",
						"SaveAttachment",
						"RemoveAttachment",
						"GetAttachmentNames",
						"GetAvailableTasks",
						"GetAvailableTasksByStageId",
						"GetTask",
						"GetTaskByStageId",
						"GetPostponedTasks",
						"HasRightsForBatchType",
						"GetSettingValue",
						"SetSettingValue",
						"GetAvailableUsers",
						"GetAvailableQueues",
						"GetRoles",
						"GetUserRoles"
					]
				}
			}
		},
		{
			"displayName": "batch type id",
			"name": "batchTypeId",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GetProcessingStages",
						"GetBatchTypeTemplates",
						"GetBatchType",
						"GetFilteredBatches",
						"HasRightsForBatchType",
						"GetSettingValue",
						"SetSettingValue",
						"GetAvailableUsers"
					]
				}
			}
		},
		{
			"displayName": "stage type",
			"name": "stageType",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GetProcessingStages",
						"GetTask",
						"CloseTask"
					]
				}
			}
		},
		{
			"displayName": "stage name",
			"name": "stageName",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GetProcessingStages"
					]
				}
			}
		},
		{
			"displayName": "project name or guid",
			"name": "projectNameOrGuid",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"OpenProject"
					]
				}
			}
		},
		{
			"displayName": "batch",
			"name": "batch",
			"type": "collection",
			"default": {},
			"displayOptions": {
				"show": {
					"operation": [
						"AddNewBatch",
						"UpdateBatch"
					]
				}
			},
			"options": [
				{
					"displayName": "id",
					"name": "Id",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "name",
					"name": "Name",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "project id",
					"name": "ProjectId",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "batch type id",
					"name": "BatchTypeId",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "priority",
					"name": "Priority",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "description",
					"name": "Description",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "has attachments",
					"name": "HasAttachments",
					"type": "boolean",
					"default": ""
				},
				{
					"displayName": "properties",
					"name": "Properties",
					"type": "collection",
					"default": {},
					"options": [
						{
							"displayName": "registration property",
							"name": "RegistrationProperty",
							"type": "collection",
							"default": {},
							"options": [
								{
									"displayName": "name",
									"name": "Name",
									"type": "string",
									"default": ""
								},
								{
									"displayName": "value",
									"name": "Value",
									"type": "string",
									"default": ""
								}
							]
						}
					]
				},
				{
					"displayName": "creation date",
					"name": "CreationDate",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "documents count",
					"name": "DocumentsCount",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "pages count",
					"name": "PagesCount",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "recognized symbols count",
					"name": "RecognizedSymbolsCount",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "verification symbols count",
					"name": "VerificationSymbolsCount",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "uncertain symbols count",
					"name": "UncertainSymbolsCount",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "assembled documents count",
					"name": "AssembledDocumentsCount",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "recognized documents count",
					"name": "RecognizedDocumentsCount",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "verified documents count",
					"name": "VerifiedDocumentsCount",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "exported documents count",
					"name": "ExportedDocumentsCount",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "stage external id",
					"name": "StageExternalId",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "error text",
					"name": "ErrorText",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "owner id",
					"name": "OwnerId",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "creator id",
					"name": "CreatorId",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "sla start date",
					"name": "SLAStartDate",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "sla expiration date",
					"name": "SLAExpirationDate",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "elapsed processing seconds",
					"name": "ElapsedProcessingSeconds",
					"type": "number",
					"default": ""
				}
			]
		},
		{
			"displayName": "owner id",
			"name": "ownerId",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"AddNewBatch"
					]
				}
			}
		},
		{
			"displayName": "batch id",
			"name": "batchId",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"DeleteBatch",
						"AddNewImage",
						"GetBatchIdsRange",
						"AddNewPage",
						"MoveBatchItem",
						"ProcessBatch",
						"GetBatchPercentCompleted",
						"GetDocuments",
						"GetDocumentResultsList",
						"LoadDocumentResult",
						"GetBatch",
						"OpenBatch",
						"CloseBatch",
						"GetDocument",
						"DeletePage",
						"DeleteDocument",
						"ReplacePageImage",
						"SetDocumentProperties",
						"LoadAttachment",
						"SaveAttachment",
						"RemoveAttachment",
						"GetAttachmentNames",
						"CreateTask",
						"GetRequests",
						"SetDocumentPriority"
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
						"AddNewImage",
						"AddNewDocument",
						"AddNewPage",
						"ReplacePageImage",
						"SaveCustomFile",
						"SaveAttachment",
					]
				}
			},
			"options": [
				{
					"displayName": "name",
					"name": "Name",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "bytes",
					"name": "Bytes",
					"type": "string",
					"default": ""
				}
			]
		},
		{
			"displayName": "ids count",
			"name": "idsCount",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GetBatchIdsRange"
					]
				}
			}
		},
		{
			"displayName": "document",
			"name": "document",
			"type": "collection",
			"default": {},
			"displayOptions": {
				"show": {
					"operation": [
						"AddNewDocument"
					]
				}
			},
			"options": [
				{
					"displayName": "id",
					"name": "Id",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "batch id",
					"name": "BatchId",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "parent id",
					"name": "ParentId",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "doc index",
					"name": "DocIndex",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "template name",
					"name": "TemplateName",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "processing stage type",
					"name": "ProcessingStageType",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "comment",
					"name": "Comment",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "pages",
					"name": "Pages",
					"type": "collection",
					"default": {},
					"options": [
						{
							"displayName": "page",
							"name": "Page",
							"type": "collection",
							"default": {},
							"options": [
								{
									"displayName": "id",
									"name": "Id",
									"type": "number",
									"default": ""
								},
								{
									"displayName": "page index",
									"name": "PageIndex",
									"type": "number",
									"default": ""
								},
								{
									"displayName": "source file name",
									"name": "SourceFileName",
									"type": "string",
									"default": ""
								},
								{
									"displayName": "source page number",
									"name": "SourcePageNumber",
									"type": "number",
									"default": ""
								},
								{
									"displayName": "source type",
									"name": "SourceType",
									"type": "number",
									"default": ""
								},
								{
									"displayName": "source details",
									"name": "SourceDetails",
									"type": "string",
									"default": ""
								},
								{
									"displayName": "comment",
									"name": "Comment",
									"type": "string",
									"default": ""
								},
								{
									"displayName": "error text",
									"name": "ErrorText",
									"type": "string",
									"default": ""
								},
								{
									"displayName": "external id",
									"name": "ExternalId",
									"type": "string",
									"default": ""
								},
								{
									"displayName": "has attachments",
									"name": "HasAttachments",
									"type": "boolean",
									"default": ""
								},
								{
									"displayName": "uncertain symbols",
									"name": "UncertainSymbols",
									"type": "number",
									"default": ""
								},
								{
									"displayName": "verification symbols",
									"name": "VerificationSymbols",
									"type": "number",
									"default": ""
								},
								{
									"displayName": "total symbols",
									"name": "TotalSymbols",
									"type": "number",
									"default": ""
								},
								{
									"displayName": "file version",
									"name": "FileVersion",
									"type": "number",
									"default": ""
								},
								{
									"displayName": "flags",
									"name": "Flags",
									"type": "number",
									"default": ""
								}
							]
						}
					]
				},
				{
					"displayName": "is processed",
					"name": "IsProcessed",
					"type": "boolean",
					"default": ""
				},
				{
					"displayName": "has processing errors",
					"name": "HasProcessingErrors",
					"type": "boolean",
					"default": ""
				},
				{
					"displayName": "has document errors",
					"name": "HasDocumentErrors",
					"type": "boolean",
					"default": ""
				},
				{
					"displayName": "error text",
					"name": "ErrorText",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "external id",
					"name": "ExternalId",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "properties",
					"name": "Properties",
					"type": "collection",
					"default": {},
					"options": [
						{
							"displayName": "registration property",
							"name": "RegistrationProperty",
							"type": "collection",
							"default": {},
							"options": [
								{
									"displayName": "name",
									"name": "Name",
									"type": "string",
									"default": ""
								},
								{
									"displayName": "value",
									"name": "Value",
									"type": "string",
									"default": ""
								}
							]
						}
					]
				},
				{
					"displayName": "priority",
					"name": "Priority",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "file version",
					"name": "FileVersion",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "owner id",
					"name": "OwnerId",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "stage external id",
					"name": "StageExternalId",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "task id",
					"name": "TaskId",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "uncertain symbols",
					"name": "UncertainSymbols",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "verification symbols",
					"name": "VerificationSymbols",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "total symbols",
					"name": "TotalSymbols",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "has errors",
					"name": "HasErrors",
					"type": "boolean",
					"default": ""
				},
				{
					"displayName": "has warnings",
					"name": "HasWarnings",
					"type": "boolean",
					"default": ""
				},
				{
					"displayName": "has assembling errors",
					"name": "HasAssemblingErrors",
					"type": "boolean",
					"default": ""
				},
				{
					"displayName": "has attachments",
					"name": "HasAttachments",
					"type": "boolean",
					"default": ""
				},
				{
					"displayName": "flags",
					"name": "Flags",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "children order",
					"name": "ChildrenOrder",
					"type": "collection",
					"default": {},
					"options": [
						{
							"displayName": "order item",
							"name": "OrderItem",
							"type": "collection",
							"default": {},
							"options": [
								{
									"displayName": "id",
									"name": "Id",
									"type": "number",
									"default": ""
								},
								{
									"displayName": "index",
									"name": "Index",
									"type": "number",
									"default": ""
								}
							]
						}
					]
				}
			]
		},
		{
			"displayName": "exclude from automatic assembling",
			"name": "excludeFromAutomaticAssembling",
			"type": "boolean",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"AddNewDocument"
					]
				}
			}
		},
		{
			"displayName": "previous item id",
			"name": "previousItemId",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"AddNewDocument",
						"AddNewPage",
						"MoveBatchItem"
					]
				}
			}
		},
		{
			"displayName": "document id",
			"name": "documentId",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"AddNewPage",
						"GetDocumentResultsList",
						"LoadDocumentResult",
						"GetDocument",
						"DeletePage",
						"DeleteDocument",
						"ReplacePageImage",
						"SetDocumentProperties",
						"SetDocumentPriority"
					]
				}
			}
		},
		{
			"displayName": "page",
			"name": "page",
			"type": "collection",
			"default": {},
			"displayOptions": {
				"show": {
					"operation": [
						"AddNewPage"
					]
				}
			},
			"options": [
				{
					"displayName": "id",
					"name": "Id",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "page index",
					"name": "PageIndex",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "source file name",
					"name": "SourceFileName",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "source page number",
					"name": "SourcePageNumber",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "source type",
					"name": "SourceType",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "source details",
					"name": "SourceDetails",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "comment",
					"name": "Comment",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "error text",
					"name": "ErrorText",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "external id",
					"name": "ExternalId",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "has attachments",
					"name": "HasAttachments",
					"type": "boolean",
					"default": ""
				},
				{
					"displayName": "uncertain symbols",
					"name": "UncertainSymbols",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "verification symbols",
					"name": "VerificationSymbols",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "total symbols",
					"name": "TotalSymbols",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "file version",
					"name": "FileVersion",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "flags",
					"name": "Flags",
					"type": "number",
					"default": ""
				}
			]
		},
		{
			"displayName": "item id",
			"name": "itemId",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MoveBatchItem"
					]
				}
			}
		},
		{
			"displayName": "new parent id",
			"name": "newParentId",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MoveBatchItem"
					]
				}
			}
		},
		{
			"displayName": "file name",
			"name": "fileName",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"LoadDocumentResult",
						"LoadCustomFile",
						"RemoveCustomFile",
						"LoadAttachment",
						"RemoveAttachment"
					]
				}
			}
		},
		{
			"displayName": "only private batches",
			"name": "onlyPrivateBatches",
			"type": "boolean",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GetBatches",
						"GetAvailableTasks",
						"GetAvailableTasksByStageId",
						"GetTask",
						"GetTaskByStageId"
					]
				}
			}
		},
		{
			"displayName": "stage types",
			"name": "stageTypes",
			"type": "collection",
			"default": {},
			"displayOptions": {
				"show": {
					"operation": [
						"GetFilteredBatches"
					]
				}
			},
			"options": [
				{
					"displayName": "int",
					"name": "int",
					"type": "number",
					"default": ""
				}
			]
		},
		{
			"displayName": "stage ext ids",
			"name": "stageExtIds",
			"type": "collection",
			"default": {},
			"displayOptions": {
				"show": {
					"operation": [
						"GetFilteredBatches"
					]
				}
			},
			"options": [
				{
					"displayName": "int",
					"name": "int",
					"type": "number",
					"default": ""
				}
			]
		},
		{
			"displayName": "name",
			"name": "name",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GetFilteredBatches"
					]
				}
			}
		},
		{
			"displayName": "batch purpose",
			"name": "batchPurpose",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GetFilteredBatches"
					]
				}
			}
		},
		{
			"displayName": "start date",
			"name": "startDate",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GetFilteredBatches"
					]
				}
			}
		},
		{
			"displayName": "stop date",
			"name": "stopDate",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GetFilteredBatches"
					]
				}
			}
		},
		{
			"displayName": "sla date begin range",
			"name": "slaDateBeginRange",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GetFilteredBatches"
					]
				}
			}
		},
		{
			"displayName": "sla date end range",
			"name": "slaDateEndRange",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GetFilteredBatches"
					]
				}
			}
		},
		{
			"displayName": "sla state flags",
			"name": "slaStateFlags",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GetFilteredBatches"
					]
				}
			}
		},
		{
			"displayName": "first record",
			"name": "firstRecord",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GetFilteredBatches"
					]
				}
			}
		},
		{
			"displayName": "records count",
			"name": "recordsCount",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GetFilteredBatches"
					]
				}
			}
		},
		{
			"displayName": "filter reg params",
			"name": "filterRegParams",
			"type": "collection",
			"default": {},
			"displayOptions": {
				"show": {
					"operation": [
						"GetFilteredBatches"
					]
				}
			},
			"options": [
				{
					"displayName": "registration property",
					"name": "RegistrationProperty",
					"type": "collection",
					"default": {},
					"options": [
						{
							"displayName": "name",
							"name": "Name",
							"type": "string",
							"default": ""
						},
						{
							"displayName": "value",
							"name": "Value",
							"type": "string",
							"default": ""
						}
					]
				}
			]
		},
		{
			"displayName": "page id",
			"name": "pageId",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"DeletePage",
						"ReplacePageImage"
					]
				}
			}
		},
		{
			"displayName": "properties",
			"name": "properties",
			"type": "collection",
			"default": {},
			"displayOptions": {
				"show": {
					"operation": [
						"SetDocumentProperties"
					]
				}
			},
			"options": [
				{
					"displayName": "registration property",
					"name": "RegistrationProperty",
					"type": "collection",
					"default": {},
					"options": [
						{
							"displayName": "name",
							"name": "Name",
							"type": "string",
							"default": ""
						},
						{
							"displayName": "value",
							"name": "Value",
							"type": "string",
							"default": ""
						}
					]
				}
			]
		},
		{
			"displayName": "type",
			"name": "type",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"LoadAttachment",
						"SaveAttachment",
						"RemoveAttachment",
						"GetAttachmentNames"
					]
				}
			}
		},
		{
			"displayName": "object id",
			"name": "objectId",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"LoadAttachment",
						"SaveAttachment",
						"RemoveAttachment",
						"GetAttachmentNames"
					]
				}
			}
		},
		{
			"displayName": "client time",
			"name": "clientTime",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"WriteToLog"
					]
				}
			}
		},
		{
			"displayName": "records",
			"name": "records",
			"type": "collection",
			"default": {},
			"displayOptions": {
				"show": {
					"operation": [
						"WriteToLog"
					]
				}
			},
			"options": [
				{
					"displayName": "log record",
					"name": "LogRecord",
					"type": "collection",
					"default": {},
					"options": [
						{
							"displayName": "type",
							"name": "Type",
							"type": "number",
							"default": ""
						},
						{
							"displayName": "session id",
							"name": "SessionId",
							"type": "number",
							"default": ""
						},
						{
							"displayName": "user id",
							"name": "UserId",
							"type": "number",
							"default": ""
						},
						{
							"displayName": "machine id",
							"name": "MachineId",
							"type": "string",
							"default": ""
						},
						{
							"displayName": "role id",
							"name": "RoleId",
							"type": "number",
							"default": ""
						},
						{
							"displayName": "task id",
							"name": "TaskId",
							"type": "number",
							"default": ""
						},
						{
							"displayName": "project id",
							"name": "ProjectId",
							"type": "number",
							"default": ""
						},
						{
							"displayName": "batch id",
							"name": "BatchId",
							"type": "number",
							"default": ""
						},
						{
							"displayName": "document id",
							"name": "DocumentId",
							"type": "number",
							"default": ""
						},
						{
							"displayName": "comment",
							"name": "Comment",
							"type": "string",
							"default": ""
						},
						{
							"displayName": "details",
							"name": "Details",
							"type": "string",
							"default": ""
						},
						{
							"displayName": "time",
							"name": "Time",
							"type": "number",
							"default": ""
						}
					]
				}
			]
		},
		{
			"displayName": "processing stage",
			"name": "processingStage",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GetAvailableTasks",
						"GetPostponedTasks"
					]
				}
			}
		},
		{
			"displayName": "stage ids",
			"name": "stageIds",
			"type": "collection",
			"default": {},
			"displayOptions": {
				"show": {
					"operation": [
						"GetAvailableTasksByStageId",
						"GetTaskByStageId"
					]
				}
			},
			"options": [
				{
					"displayName": "stage id",
					"name": "stageId",
					"type": "number",
					"default": ""
				}
			]
		},
		{
			"displayName": "task id",
			"name": "taskId",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GetTaskInfo",
						"OpenTask",
						"GetTaskDocuments",
						"CloseTask",
						"CancelTask",
						"PostponeTask",
						"SendTaskToException",
						"SendTask",
						"GetRequests",
						"SetTaskPriority"
					]
				}
			}
		},
		{
			"displayName": "stage external id",
			"name": "stageExternalId",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"CreateTask",
						"GetAvailableUsers"
					]
				}
			}
		},
		{
			"displayName": "priority",
			"name": "priority",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"CreateTask",
						"SetTaskPriority",
						"SetDocumentPriority"
					]
				}
			}
		},
		{
			"displayName": "comment",
			"name": "comment",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"CreateTask",
						"PostponeTask",
						"SendTaskToException",
						"SendTask"
					]
				}
			}
		},
		{
			"displayName": "doc ids",
			"name": "docIds",
			"type": "collection",
			"default": {},
			"displayOptions": {
				"show": {
					"operation": [
						"CreateTask"
					]
				}
			},
			"options": [
				{
					"displayName": "doc id",
					"name": "DocId",
					"type": "number",
					"default": ""
				}
			]
		},
		{
			"displayName": "set as current task",
			"name": "setAsCurrentTask",
			"type": "boolean",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"CreateTask"
					]
				}
			}
		},
		{
			"displayName": "only preprocessed tasks",
			"name": "onlyPreprocessedTasks",
			"type": "boolean",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GetTask",
						"GetTaskByStageId"
					]
				}
			}
		},
		{
			"displayName": "need postprocessing",
			"name": "needPostprocessing",
			"type": "boolean",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"SendTaskToException"
					]
				}
			}
		},
		{
			"displayName": "stage id",
			"name": "stageId",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"SendTask"
					]
				}
			}
		},
		{
			"displayName": "ticket id",
			"name": "ticketId",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"UpdateTicket",
						"ReleaseTicket"
					]
				}
			}
		},
		{
			"displayName": "setting name",
			"name": "settingName",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GetSettingValue",
						"SetSettingValue"
					]
				}
			}
		},
		{
			"displayName": "setting value",
			"name": "settingValue",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"SetSettingValue"
					]
				}
			}
		},
		{
			"displayName": "user login",
			"name": "userLogin",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"FindUser"
					]
				}
			}
		},
		{
			"displayName": "request",
			"name": "request",
			"type": "collection",
			"default": {},
			"displayOptions": {
				"show": {
					"operation": [
						"CreateRequest"
					]
				}
			},
			"options": [
				{
					"displayName": "id",
					"name": "Id",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "batch id",
					"name": "BatchId",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "task id",
					"name": "TaskId",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "session id",
					"name": "SessionId",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "status",
					"name": "Status",
					"type": "number",
					"default": ""
				}
			]
		},
		{
			"displayName": "request id",
			"name": "requestId",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"DeleteRequest",
						"GetRequestStatus",
						"SetRequestStatus"
					]
				}
			}
		},
		{
			"displayName": "status",
			"name": "status",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"SetRequestStatus"
					]
				}
			}
		},
		{
			"displayName": "from date",
			"name": "fromDate",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GetUserStatistics"
					]
				}
			}
		},
		{
			"displayName": "to date",
			"name": "toDate",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GetUserStatistics"
					]
				}
			}
		},
		{
			"displayName": "project name",
			"name": "projectName",
			"type": "options",
			"default": "",
			"typeOptions": {
				"loadOptionsMethod": "getProjects",
			},
			"displayOptions": {
				"show": {
					"operation": [
						"ReadDocument"
					]
				}
			}
		},
		{
			"displayName": "file from",
			"name": "fileFrom",
			"type": "options",
			"default": "",
			"options": [
				{
					"name": "url",
					"value": "FromUrl"
				},
				{
					"name": "path",
					"value": "FromPath"
				}
			],
			"displayOptions": {
				"show": {
					"operation": [
						"ReadDocument"
					]
				}
			}
		},
		{
			"displayName": "file url",
			"name": "fileUrl",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"fileFrom": [
						"FromUrl"
					]
				}
			}
		},
		{
			"displayName": "file path",
			"name": "filePath",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"fileFrom": [
						"FromPath"
					]
				}
			}
		},
		// {
		// 	"displayName": "result to",
		// 	"name": "resultTo",
		// 	"type": "options",
		// 	"default": "",
		// 	"options": [
		// 		{
		// 			"name": "json",
		// 			"value": "Json"
		// 		},
		// 		{
		// 			"name": "webhook",
		// 			"value": "Webhook"
		// 		}
		// 	],
		// 	"displayOptions": {
		// 		"show": {
		// 			"operation": [
		// 				"ReadDocument"
		// 			]
		// 		}
		// 	}
		// },
		// {
		// 	"displayName": "webhook url",
		// 	"name": "webhookUrl",
		// 	"type": "string",
		// 	"default": "",
		// 	"displayOptions": {
		// 		"show": {
		// 			"resultTo": [
		// 				"Webhook"
		// 			]
		// 		}
		// 	}
		// }
	]


export default properties;