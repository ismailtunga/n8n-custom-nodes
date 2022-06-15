
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
				"name": "get cities",
				"value": "GetCities"
			},
			{
				"name": "get city",
				"value": "GetCity"
			},
			{
				"name": "get district",
				"value": "GetDistrict"
			},
			{
				"name": "get neighborhoods",
				"value": "GetNeighborhoods"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "city code",
		"name": "cityCode",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"GetCity",
					"GetDistrict"
				]
			}
		}
	},
	{
		"displayName": "district id",
		"name": "districtId",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"GetNeighborhoods"
				]
			}
		}
	}
]
    
    
    export default properties;
