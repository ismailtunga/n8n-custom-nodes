
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
				"name": "bank payment list",
				"value": "BankPaymentList"
			},
			{
				"name": "bank payment list debit",
				"value": "BankPaymentListDebit"
			},
			{
				"name": "bank payment list all",
				"value": "BankPaymentListAll"
			},
			{
				"name": "bank payment list all sub firm",
				"value": "BankPaymentListAllSubFirm"
			},
			{
				"name": "bank payment list all with feature",
				"value": "BankPaymentListAllWithFeature"
			},
			{
				"name": "bank payment list for custom fields",
				"value": "BankPaymentListForCustomFields"
			},
			{
				"name": "update payment status info",
				"value": "UpdatePaymentStatusInfo"
			},
			{
				"name": "update payment status info with payment exp code",
				"value": "UpdatePaymentStatusInfoWithPaymentExpCode"
			},
			{
				"name": "update payment status info with payment id list",
				"value": "UpdatePaymentStatusInfoWithPaymentIDList"
			},
			{
				"name": "update payment status info with erp ref no",
				"value": "UpdatePaymentStatusInfoWithERPRefNo"
			},
			{
				"name": "sub firm add new",
				"value": "SubFirmAddNew"
			},
			{
				"name": "get sub firm info",
				"value": "GetSubFirmInfo"
			},
			{
				"name": "sub firm list",
				"value": "SubFirmList"
			},
			{
				"name": "sub firm update",
				"value": "SubFirmUpdate"
			},
			{
				"name": "sub firm iban add new",
				"value": "SubFirmIBANAddNew"
			},
			{
				"name": "sub firm iban delete",
				"value": "SubFirmIBANDelete"
			},
			{
				"name": "sub firm vkn add new",
				"value": "SubFirmVKNAddNew"
			},
			{
				"name": "sub firm vkn delete",
				"value": "SubFirmVKNDelete"
			},
			{
				"name": "sub firm get payment channel",
				"value": "SubFirmGetPaymentChannel"
			},
			{
				"name": "delete all matching criteria",
				"value": "DeleteAllMatchingCriteria"
			},
			{
				"name": "get firm bank balance",
				"value": "GetFirmBankBalance"
			},
			{
				"name": "get firm bank balance sub firm",
				"value": "GetFirmBankBalanceSubFirm"
			},
			{
				"name": "get firm bank daily balance",
				"value": "GetFirmBankDailyBalance"
			},
			{
				"name": "pos payment list",
				"value": "PosPaymentList"
			},
			{
				"name": "pos payment list with valor date",
				"value": "PosPaymentListWithValorDate"
			},
			{
				"name": "pos payment sum",
				"value": "PosPaymentSUM"
			},
			{
				"name": "pos return list",
				"value": "PosReturnList"
			},
			{
				"name": "get firm manager list",
				"value": "GetFirmManagerList"
			},
			{
				"name": "firm manager add new",
				"value": "FirmManagerAddNew"
			},
			{
				"name": "firm manager delete",
				"value": "FirmManagerDelete"
			},
			{
				"name": "get firm debt info",
				"value": "GetFirmDebtInfo"
			},
			{
				"name": "get v pos transaction list",
				"value": "GetVPosTransactionList"
			}
		],
		"placeholder": "Placeholder value",
		"description": "The description text"
	},
	{
		"displayName": "firm code",
		"name": "firmCode",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"BankPaymentList",
					"BankPaymentListDebit",
					"BankPaymentListAll",
					"BankPaymentListAllSubFirm",
					"BankPaymentListAllWithFeature",
					"BankPaymentListForCustomFields",
					"UpdatePaymentStatusInfo",
					"UpdatePaymentStatusInfoWithPaymentIDList"
				]
			}
		}
	},
	{
		"displayName": "payment status type id",
		"name": "paymentStatusTypeID",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"BankPaymentList",
					"BankPaymentListDebit",
					"BankPaymentListAll",
					"BankPaymentListAllSubFirm",
					"BankPaymentListAllWithFeature",
					"BankPaymentListForCustomFields",
					"UpdatePaymentStatusInfo",
					"UpdatePaymentStatusInfoWithPaymentExpCode",
					"UpdatePaymentStatusInfoWithPaymentIDList",
					"UpdatePaymentStatusInfoWithERPRefNo"
				]
			}
		}
	},
	{
		"displayName": "tax number",
		"name": "taxNumber",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"BankPaymentListAllSubFirm",
					"GetFirmBankBalanceSubFirm"
				]
			}
		}
	},
	{
		"displayName": "payment id",
		"name": "paymentID",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"UpdatePaymentStatusInfo",
					"UpdatePaymentStatusInfoWithPaymentExpCode",
					"UpdatePaymentStatusInfoWithERPRefNo"
				]
			}
		}
	},
	{
		"displayName": "firm api code",
		"name": "firmAPICode",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"UpdatePaymentStatusInfoWithPaymentExpCode",
					"UpdatePaymentStatusInfoWithERPRefNo",
					"SubFirmAddNew",
					"GetSubFirmInfo",
					"SubFirmList",
					"SubFirmUpdate",
					"SubFirmIBANAddNew",
					"SubFirmIBANDelete",
					"SubFirmVKNAddNew",
					"SubFirmVKNDelete",
					"SubFirmGetPaymentChannel",
					"GetFirmBankBalance",
					"GetFirmBankBalanceSubFirm",
					"GetFirmBankDailyBalance"
				]
			}
		}
	},
	{
		"displayName": "payment exp code",
		"name": "paymentExpCode",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"UpdatePaymentStatusInfoWithPaymentExpCode",
					"GetSubFirmInfo",
					"SubFirmUpdate",
					"SubFirmIBANAddNew",
					"SubFirmIBANDelete",
					"SubFirmVKNAddNew",
					"SubFirmVKNDelete",
					"SubFirmGetPaymentChannel",
					"DeleteAllMatchingCriteria",
					"GetFirmManagerList",
					"FirmManagerAddNew",
					"FirmManagerDelete"
				]
			}
		}
	},
	{
		"displayName": "payment i ds",
		"name": "paymentIDs",
		"type": "collection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"UpdatePaymentStatusInfoWithPaymentIDList"
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
		"displayName": "e rp ref no",
		"name": "eRPRefNo",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"UpdatePaymentStatusInfoWithERPRefNo"
				]
			}
		}
	},
	{
		"displayName": "sub firm",
		"name": "subFirm",
		"type": "collection",
		"default": {},
		"displayOptions": {
			"show": {
				"operation": [
					"SubFirmAddNew",
					"SubFirmUpdate"
				]
			}
		},
		"options": [
			{
				"displayName": "firm name",
				"name": "FirmName",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "address",
				"name": "Address",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "county",
				"name": "County",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "city id",
				"name": "CityID",
				"type": "number",
				"default": ""
			},
			{
				"displayName": "phone",
				"name": "Phone",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "tax office",
				"name": "TaxOffice",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "tax number",
				"name": "TaxNumber",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "auth pers name",
				"name": "AuthPersName",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "auth pers surname",
				"name": "AuthPersSurname",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "auth pers gsm",
				"name": "AuthPersGSM",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "auth pers gender id",
				"name": "AuthPersGenderID",
				"type": "number",
				"default": ""
			},
			{
				"displayName": "dealer code",
				"name": "DealerCode",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "business area",
				"name": "BusinessArea",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "accounting code",
				"name": "AccountingCode",
				"type": "string",
				"default": ""
			},
			{
				"displayName": "reserved field",
				"name": "ReservedField",
				"type": "string",
				"default": ""
			}
		]
	},
	{
		"displayName": "iban",
		"name": "iban",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"SubFirmIBANAddNew",
					"SubFirmIBANDelete",
					"GetFirmBankBalance",
					"GetFirmBankBalanceSubFirm",
					"GetFirmBankDailyBalance"
				]
			}
		}
	},
	{
		"displayName": "bank code",
		"name": "bankCode",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"SubFirmIBANAddNew",
					"SubFirmIBANDelete",
					"PosPaymentSUM"
				]
			}
		}
	},
	{
		"displayName": "vkn",
		"name": "vkn",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"SubFirmVKNAddNew",
					"SubFirmVKNDelete"
				]
			}
		}
	},
	{
		"displayName": "name",
		"name": "name",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"SubFirmVKNAddNew"
				]
			}
		}
	},
	{
		"displayName": "surname",
		"name": "surname",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"SubFirmVKNAddNew"
				]
			}
		}
	},
	{
		"displayName": "firm api code",
		"name": "firmApiCode",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"DeleteAllMatchingCriteria",
					"PosPaymentList",
					"PosPaymentListWithValorDate",
					"PosPaymentSUM",
					"PosReturnList",
					"GetFirmManagerList",
					"FirmManagerAddNew",
					"FirmManagerDelete",
					"GetFirmDebtInfo",
					"GetVPosTransactionList"
				]
			}
		}
	},
	{
		"displayName": "sum date type id",
		"name": "sumDateTypeID",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"PosPaymentSUM"
				]
			}
		}
	},
	{
		"displayName": "process type",
		"name": "processType",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"PosPaymentSUM"
				]
			}
		}
	},
	{
		"displayName": "manager user name",
		"name": "managerUserName",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"FirmManagerAddNew",
					"FirmManagerDelete"
				]
			}
		}
	},
	{
		"displayName": "transaction status id",
		"name": "transactionStatusID",
		"type": "number",
		"default": "",
		"displayOptions": {
			"show": {
				"operation": [
					"GetVPosTransactionList"
				]
			}
		}
	}
]
    
    
    export default properties;
