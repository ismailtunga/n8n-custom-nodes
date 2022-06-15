
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
                    "name": "get product by product id",
                    "value": "GetProductByProductId"
                },
                {
                    "name": "get product by seller code",
                    "value": "GetProductBySellerCode"
                },
                {
                    "name": "get product list",
                    "value": "GetProductList"
                },
                {
                    "name": "search products",
                    "value": "SearchProducts"
                },
                {
                    "name": "update product price by id",
                    "value": "UpdateProductPriceById"
                },
                {
                    "name": "update product price by seller code",
                    "value": "UpdateProductPriceBySellerCode"
                },
                {
                    "name": "delete product by id",
                    "value": "DeleteProductById"
                },
                {
                    "name": "delete product by seller code",
                    "value": "DeleteProductBySellerCode"
                },
                {
                    "name": "save product",
                    "value": "SaveProduct"
                },
                {
                    "name": "update product basic",
                    "value": "UpdateProductBasic"
                },
                {
                    "name": "update discount value by product id",
                    "value": "UpdateDiscountValueByProductId"
                },
                {
                    "name": "update discount value by seller code",
                    "value": "UpdateDiscountValueBySellerCode"
                },
                {
                    "name": "get product question list",
                    "value": "GetProductQuestionList"
                },
                {
                    "name": "get product question detail",
                    "value": "GetProductQuestionDetail"
                },
                {
                    "name": "save product answer",
                    "value": "SaveProductAnswer"
                },
                {
                    "name": "adapt unification products",
                    "value": "AdaptUnificationProducts"
                },
                {
                    "name": "product approval status",
                    "value": "ProductApprovalStatus"
                },
                {
                    "name": "update products by pims",
                    "value": "UpdateProductsByPims"
                }
            ],
            "placeholder": "Placeholder value",
            "description": "The description text"
        },
        {
            "displayName": "product id",
            "name": "productId",
            "type": "number",
            "default": "",
            "displayOptions": {
                "show": {
                    "operation": [
                        "GetProductByProductId",
                        "UpdateProductPriceById",
                        "DeleteProductById",
                        "UpdateProductBasic",
                        "UpdateDiscountValueByProductId"
                    ]
                }
            }
        },
        {
            "displayName": "seller code",
            "name": "sellerCode",
            "type": "string",
            "default": "",
            "displayOptions": {
                "show": {
                    "operation": [
                        "GetProductBySellerCode"
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
                        "GetProductList",
                        "SearchProducts",
                        "GetProductQuestionList"
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
        },
        {
            "displayName": "product search",
            "name": "productSearch",
            "type": "collection",
            "default": {},
            "displayOptions": {
                "show": {
                    "operation": [
                        "SearchProducts"
                    ]
                }
            },
            "options": [
                {
                    "displayName": "name",
                    "name": "name",
                    "type": "string",
                    "default": ""
                },
                {
                    "displayName": "sale date",
                    "name": "saleDate",
                    "type": "collection",
                    "default": {},
                    "options": [
                        {
                            "displayName": "start date",
                            "name": "startDate",
                            "type": "string",
                            "default": ""
                        },
                        {
                            "displayName": "end date",
                            "name": "endDate",
                            "type": "string",
                            "default": ""
                        }
                    ]
                },
                {
                    "displayName": "bundle",
                    "name": "bundle",
                    "type": "boolean",
                    "default": ""
                },
                {
                    "displayName": "mpn",
                    "name": "mpn",
                    "type": "string",
                    "default": ""
                },
                {
                    "displayName": "gtin",
                    "name": "gtin",
                    "type": "string",
                    "default": ""
                },
                {
                    "displayName": "oem",
                    "name": "oem",
                    "type": "string",
                    "default": ""
                }
            ]
        },
        {
            "displayName": "currency type",
            "name": "currencyType",
            "type": "number",
            "default": "",
            "displayOptions": {
                "show": {
                    "operation": [
                        "UpdateProductPriceById",
                        "UpdateProductPriceBySellerCode"
                    ]
                }
            }
        },
        {
            "displayName": "stock items",
            "name": "stockItems",
            "type": "collection",
            "default": {},
            "displayOptions": {
                "show": {
                    "operation": [
                        "UpdateProductPriceById",
                        "UpdateProductPriceBySellerCode",
                        "UpdateProductBasic"
                    ]
                }
            },
            "options": [
                {
                    "displayName": "stock item",
                    "name": "stockItem",
                    "type": "collection",
                    "default": {},
                    "options": [
                        {
                            "displayName": "seller stock code",
                            "name": "sellerStockCode",
                            "type": "string",
                            "default": ""
                        }
                    ]
                }
            ]
        },
        {
            "displayName": "product seller code",
            "name": "productSellerCode",
            "type": "string",
            "default": "",
            "displayOptions": {
                "show": {
                    "operation": [
                        "UpdateProductPriceBySellerCode",
                        "DeleteProductBySellerCode",
                        "UpdateProductBasic",
                        "UpdateDiscountValueBySellerCode"
                    ]
                }
            }
        },
        {
            "displayName": "product",
            "name": "product",
            "type": "collection",
            "default": {},
            "displayOptions": {
                "show": {
                    "operation": [
                        "SaveProduct"
                    ]
                }
            },
            "options": [
                {
                    "displayName": "product seller code",
                    "name": "productSellerCode",
                    "type": "string",
                    "default": ""
                },
                {
                    "displayName": "title",
                    "name": "title",
                    "type": "string",
                    "default": ""
                },
                {
                    "displayName": "subtitle",
                    "name": "subtitle",
                    "type": "string",
                    "default": ""
                },
                {
                    "displayName": "description",
                    "name": "description",
                    "type": "string",
                    "default": ""
                },
                {
                    "displayName": "domestic",
                    "name": "domestic",
                    "type": "boolean",
                    "default": ""
                },
                {
                    "displayName": "category",
                    "name": "category",
                    "type": "collection",
                    "default": {},
                    "options": [
                        {
                            "displayName": "id",
                            "name": "id",
                            "type": "number",
                            "default": ""
                        }
                    ]
                },
                {
                    "displayName": "special product info list",
                    "name": "specialProductInfoList",
                    "type": "fixedCollection",
                    "default": {},
                    "typeOptions": {
                        "multipleValues": true
                    },
                    "options": [
                        {
                            "displayName": "special product info",
                            "name": "specialProductInfo",
                            "type": "collection",
                            "default": {},
                            "values": [
                                {
                                    "displayName": "key",
                                    "name": "key",
                                    "type": "string",
                                    "default": ""
                                },
                                {
                                    "displayName": "value",
                                    "name": "value",
                                    "type": "string",
                                    "default": ""
                                }
                            ]
                        }
                    ]
                },
                {
                    "displayName": "currency type",
                    "name": "currencyType",
                    "type": "number",
                    "default": ""
                },
                {
                    "displayName": "images",
                    "name": "images",
                    "type": "collection",
                    "default": {},
                    "options": [
                        {
                            "displayName": "image",
                            "name": "image",
                            "type": "collection",
                            "default": {},
                            "options": [
                                {
                                    "displayName": "url",
                                    "name": "url",
                                    "type": "string",
                                    "default": ""
                                },
                                {
                                    "displayName": "order",
                                    "name": "order",
                                    "type": "number",
                                    "default": ""
                                }
                            ]
                        }
                    ]
                },
                {
                    "displayName": "approval status",
                    "name": "approvalStatus",
                    "type": "number",
                    "default": ""
                },
                {
                    "displayName": "group attribute",
                    "name": "groupAttribute",
                    "type": "string",
                    "default": ""
                },
                {
                    "displayName": "group item code",
                    "name": "groupItemCode",
                    "type": "string",
                    "default": ""
                },
                {
                    "displayName": "item name",
                    "name": "itemName",
                    "type": "string",
                    "default": ""
                },
                {
                    "displayName": "attributes",
                    "name": "attributes",
                    "type": "collection",
                    "default": {},
                    "options": [
                        {
                            "displayName": "attribute",
                            "name": "attribute",
                            "type": "collection",
                            "default": {},
                            "options": [
                                {
                                    "displayName": "name",
                                    "name": "name",
                                    "type": "string",
                                    "default": ""
                                },
                                {
                                    "displayName": "value",
                                    "name": "value",
                                    "type": "string",
                                    "default": ""
                                }
                            ]
                        }
                    ]
                },
                {
                    "displayName": "sale start date",
                    "name": "saleStartDate",
                    "type": "string",
                    "default": ""
                },
                {
                    "displayName": "sale end date",
                    "name": "saleEndDate",
                    "type": "string",
                    "default": ""
                },
                {
                    "displayName": "production date",
                    "name": "productionDate",
                    "type": "string",
                    "default": ""
                },
                {
                    "displayName": "expiration date",
                    "name": "expirationDate",
                    "type": "string",
                    "default": ""
                },
                {
                    "displayName": "product condition",
                    "name": "productCondition",
                    "type": "string",
                    "default": ""
                },
                {
                    "displayName": "preparing day",
                    "name": "preparingDay",
                    "type": "number",
                    "default": ""
                },
                {
                    "displayName": "discount",
                    "name": "discount",
                    "type": "collection",
                    "default": {},
                    "options": [
                        {
                            "displayName": "start date",
                            "name": "startDate",
                            "type": "string",
                            "default": ""
                        },
                        {
                            "displayName": "end date",
                            "name": "endDate",
                            "type": "string",
                            "default": ""
                        },
                        {
                            "displayName": "type",
                            "name": "type",
                            "type": "string",
                            "default": ""
                        },
                        {
                            "displayName": "value",
                            "name": "value",
                            "type": "string",
                            "default": ""
                        }
                    ]
                },
                {
                    "displayName": "shipment template",
                    "name": "shipmentTemplate",
                    "type": "string",
                    "default": ""
                },
                {
                    "displayName": "stock items",
                    "name": "stockItems",
                    "type": "collection",
                    "default": {},
                    "options": [
                        {
                            "displayName": "stock item",
                            "name": "stockItem",
                            "type": "collection",
                            "default": {},
                            "options": [
                                {
                                    "displayName": "bundle",
                                    "name": "bundle",
                                    "type": "boolean",
                                    "default": ""
                                },
                                {
                                    "displayName": "mpn",
                                    "name": "mpn",
                                    "type": "string",
                                    "default": ""
                                },
                                {
                                    "displayName": "gtin",
                                    "name": "gtin",
                                    "type": "string",
                                    "default": ""
                                },
                                {
                                    "displayName": "n11 catalog id",
                                    "name": "n11CatalogId",
                                    "type": "number",
                                    "default": ""
                                },
                                {
                                    "displayName": "oem",
                                    "name": "oem",
                                    "type": "string",
                                    "default": ""
                                },
                                {
                                    "displayName": "quantity",
                                    "name": "quantity",
                                    "type": "number",
                                    "default": ""
                                },
                                {
                                    "displayName": "seller stock code",
                                    "name": "sellerStockCode",
                                    "type": "string",
                                    "default": ""
                                },
                                {
                                    "displayName": "attributes",
                                    "name": "attributes",
                                    "type": "collection",
                                    "default": {},
                                    "options": [
                                        {
                                            "displayName": "attribute",
                                            "name": "attribute",
                                            "type": "collection",
                                            "default": {},
                                            "options": [
                                                {
                                                    "displayName": "name",
                                                    "name": "name",
                                                    "type": "string",
                                                    "default": ""
                                                },
                                                {
                                                    "displayName": "value",
                                                    "name": "value",
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
                    "displayName": "unit info",
                    "name": "unitInfo",
                    "type": "collection",
                    "default": {},
                    "options": [
                        {
                            "displayName": "unit type",
                            "name": "unitType",
                            "type": "number",
                            "default": ""
                        },
                        {
                            "displayName": "unit weight",
                            "name": "unitWeight",
                            "type": "number",
                            "default": ""
                        }
                    ]
                }
            ]
        },
        {
            "displayName": "product discount",
            "name": "productDiscount",
            "type": "collection",
            "default": {},
            "displayOptions": {
                "show": {
                    "operation": [
                        "UpdateProductBasic",
                        "UpdateDiscountValueByProductId",
                        "UpdateDiscountValueBySellerCode"
                    ]
                }
            },
            "options": [
                {
                    "displayName": "discount type",
                    "name": "discountType",
                    "type": "number",
                    "default": ""
                },
                {
                    "displayName": "discount value",
                    "name": "discountValue",
                    "type": "number",
                    "default": ""
                },
                {
                    "displayName": "discount start date",
                    "name": "discountStartDate",
                    "type": "string",
                    "default": ""
                },
                {
                    "displayName": "discount end date",
                    "name": "discountEndDate",
                    "type": "string",
                    "default": ""
                }
            ]
        },
        {
            "displayName": "description",
            "name": "description",
            "type": "string",
            "default": "",
            "displayOptions": {
                "show": {
                    "operation": [
                        "UpdateProductBasic"
                    ]
                }
            }
        },
        {
            "displayName": "images",
            "name": "images",
            "type": "collection",
            "default": {},
            "displayOptions": {
                "show": {
                    "operation": [
                        "UpdateProductBasic"
                    ]
                }
            },
            "options": [
                {
                    "displayName": "image",
                    "name": "image",
                    "type": "collection",
                    "default": {},
                    "options": [
                        {
                            "displayName": "url",
                            "name": "url",
                            "type": "string",
                            "default": ""
                        },
                        {
                            "displayName": "order",
                            "name": "order",
                            "type": "number",
                            "default": ""
                        }
                    ]
                }
            ]
        },
        {
            "displayName": "product question search",
            "name": "productQuestionSearch",
            "type": "collection",
            "default": {},
            "displayOptions": {
                "show": {
                    "operation": [
                        "GetProductQuestionList"
                    ]
                }
            },
            "options": [
                {
                    "displayName": "product id",
                    "name": "productId",
                    "type": "number",
                    "default": ""
                },
                {
                    "displayName": "buyer email",
                    "name": "buyerEmail",
                    "type": "string",
                    "default": ""
                },
                {
                    "displayName": "subject",
                    "name": "subject",
                    "type": "string",
                    "default": ""
                },
                {
                    "displayName": "question date",
                    "name": "questionDate",
                    "type": "string",
                    "default": ""
                }
            ]
        },
        {
            "displayName": "product question id",
            "name": "productQuestionId",
            "type": "number",
            "default": "",
            "displayOptions": {
                "show": {
                    "operation": [
                        "GetProductQuestionDetail",
                        "SaveProductAnswer"
                    ]
                }
            }
        },
        {
            "displayName": "answer",
            "name": "answer",
            "type": "string",
            "default": "",
            "displayOptions": {
                "show": {
                    "operation": [
                        "SaveProductAnswer"
                    ]
                }
            }
        },
        {
            "displayName": "product id list",
            "name": "productIdList",
            "type": "fixedCollection",
            "default": {},
            "displayOptions": {
                "show": {
                    "operation": [
                        "UpdateProductsByPims"
                    ]
                }
            },
            "typeOptions": {
                "multipleValues": true
            },
            "options": [
                {
                    "displayName": "product id",
                    "name": "productId",
                    "type": "number",
                    "default": ""
                }
            ]
        }
    ]


export default properties;
