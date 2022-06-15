
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
				"name": "get top level categories",
				"value": "GetTopLevelCategories"
			},
			{
				"name": "get category attributes id",
				"value": "GetCategoryAttributesId"
			},
			{
				"name": "get category attribute value",
				"value": "GetCategoryAttributeValue"
			},
			{
				"name": "get sub categories",
				"value": "GetSubCategories"
			},
			{
				"name": "get category attributes",
				"value": "GetCategoryAttributes"
			},
			{
				"name": "get parent category",
				"value": "GetParentCategory"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "category id",
		"name": "categoryId",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"GetCategoryAttributesId",
					"GetSubCategories",
					"GetCategoryAttributes",
					"GetParentCategory"
				]
			}
		}
	},
	{
		"displayName": "category product attribute id",
		"name": "categoryProductAttributeId",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"GetCategoryAttributeValue"
				]
			}
		}
	},
	{
		"displayName": "paging data",
		"name": "pagingData",
		"type": "collection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"GetCategoryAttributeValue",
					"GetCategoryAttributes"
				]
			}
		},
		"options": [
			{
				"displayName": "current page",
				"name": "currentPage",
				"type": "number",
				"default": ""
			},
			{
				"displayName": "page size",
				"name": "pageSize",
				"type": "number",
				"default": ""
			}
		]
	}
]
    
    
    export default properties;
