
import { IExecuteFunctions } from "n8n-core";
import {
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
  ILoadOptionsFunctions,
  INodePropertyOptions,
} from "n8n-workflow";
import properties from "./stockmount_properties" ;


import StockMountApi from "./StockMountApi"
    



export class Stockmount implements INodeType {
  description: INodeTypeDescription = {
    displayName: "Stock Mount",
    name: "stockmount",
    group: ["transform"],
    version: 1,
    description: "Consumes Stock Mount API",
    icon: "file:stockmount.png",
    defaults: {
      name: "Stock Mount",
      color: "#772244",
    },
    
    credentials: [
        {
          name: "StockMount",
          required: true,
        },
    ],
    
    inputs: ["main"],
    outputs: ["main"],
    properties:properties
  };

  methods = {
    loadOptions: {
        
            async GetCurrencies(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
                
                const credentials = this.getCredentials("StockMount");

                if (credentials === undefined) {
                    throw new Error("No credentials got returned!");
                }

                const root: any = {
                    credentials: {
                         ApiKey: credentials.ApiKey,
 ApiPassword: credentials.ApiPassword
                    },
                    flow: {}
                }

                
                    if(true){
                        
    const headers = {
        
    }
    
    const body: any = {}
    const query: any = {}
    const pathParameters: any = {}
    
    body.ApiKey = root.credentials.ApiKey
    body.ApiPassword = root.credentials.ApiPassword

    

    

    root.flow.login = await StockMountApi.login.call(this,body,headers,query,pathParameters);
    
                    }
                    console.log(root.flow);
                    

                    if(true){
                        
    const headers = {
        
    }
    
    const body: any = {}
    const query: any = {}
    const pathParameters: any = {}
    
    body.ApiCode = root.flow.login.Response.ApiCode

    

    

    root.flow.getCurrencies = await StockMountApi.getCurrencies.call(this,body,headers,query,pathParameters);
    
                    }
                    console.log(root.flow);
                    

                    if(true){
                        
    const returnData: INodePropertyOptions[] = [];
    for (const item of root.flow.getCurrencies.Response) {
        returnData.push({
          name: item.Name,
          value: item.CurrencyId,
        });
      }

    return returnData;
    
                    }
                    console.log(root.flow);
                    
                
            }
        
    } 
  }

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();
    
    
    const credentials = this.getCredentials("StockMount");

    if (credentials === undefined) {
        throw new Error("No credentials got returned!");
    }
    

    const root: any = {
        credentials: {
            
            ApiKey: credentials.ApiKey
            ,

            ApiPassword: credentials.ApiPassword
            
        },
        node: {},
        flow: {}
    }
    let returnItems : INodeExecutionData[] = [];
    for (let i = 0; i < items.length; i++) {
        root.node.operation = this.getNodeParameter("operation", i,'')
root.node.StoreId = this.getNodeParameter("StoreId", i,'')
root.node.IntegrationId = this.getNodeParameter("IntegrationId", i,'')
root.node.OrderStatus = this.getNodeParameter("OrderStatus", i,'')
root.node.SmallestOrderDetailId = this.getNodeParameter("SmallestOrderDetailId", i,'')
root.node.BiggestOrderDetailId = this.getNodeParameter("BiggestOrderDetailId", i,'')
root.node.InvoiceStatus = this.getNodeParameter("InvoiceStatus", i,'')
root.node.OrderId = this.getNodeParameter("OrderId", i,'')
root.node.StartDate = this.getNodeParameter("StartDate", i,'')
root.node.EndDate = this.getNodeParameter("EndDate", i,'')
root.node.LastModificationTimeFrom = this.getNodeParameter("LastModificationTimeFrom", i,'')
root.node.LastModificationTimeTo = this.getNodeParameter("LastModificationTimeTo", i,'')
root.node.PageIndex = this.getNodeParameter("PageIndex", i,'')
root.node.RowsByPage = this.getNodeParameter("RowsByPage", i,'')
root.node.IntegrationOrderDetailId = this.getNodeParameter("IntegrationOrderDetailId", i,'')
root.node.OrderItemStatus = this.getNodeParameter("OrderItemStatus", i,'')
root.node.IntegrationOrderCode = this.getNodeParameter("IntegrationOrderCode", i,'')
root.node.ShipmentCompany = this.getNodeParameter("ShipmentCompany", i,'')
root.node.ShipmentTrackingCode = this.getNodeParameter("ShipmentTrackingCode", i,'')
root.node.ShipmentBranch = this.getNodeParameter("ShipmentBranch", i,'')
root.node.CampaignNumber = this.getNodeParameter("CampaignNumber", i,'')
root.node.ShipmentCompanyId = this.getNodeParameter("ShipmentCompanyId", i,'')
root.node.OrderDetailId = this.getNodeParameter("OrderDetailId", i,'')
root.node.SendShipmentInformation = this.getNodeParameter("SendShipmentInformation", i,'')
root.node.OrderDetails = this.getNodeParameter("OrderDetails", i,'')
root.node.Order = this.getNodeParameter("Order", i,'')
root.node.ProductSourceId = this.getNodeParameter("ProductSourceId", i,'')
root.node.ProductId = this.getNodeParameter("ProductId", i,'')
root.node.Code = this.getNodeParameter("Code", i,'')
root.node.Description = this.getNodeParameter("Description", i,'')
root.node.Code2 = this.getNodeParameter("Code2", i,'')
root.node.Barcode = this.getNodeParameter("Barcode", i,'')
root.node.Name = this.getNodeParameter("Name", i,'')
root.node.Subtitle = this.getNodeParameter("Subtitle", i,'')
root.node.Price = this.getNodeParameter("Price", i,'')
root.node.Quantity = this.getNodeParameter("Quantity", i,'')
root.node.Brand = this.getNodeParameter("Brand", i,'')
root.node.TaxRate = this.getNodeParameter("TaxRate", i,'')
root.node.Model = this.getNodeParameter("Model", i,'')
root.node.Category = this.getNodeParameter("Category", i,'')
root.node.CurrencyId = this.getNodeParameter("CurrencyId", i,'')
root.node.Images = this.getNodeParameter("Images", i,'')
root.node.MarketPrice = this.getNodeParameter("MarketPrice", i,'')
root.node.Status = this.getNodeParameter("Status", i,'')
root.node.Volume = this.getNodeParameter("Volume", i,'')
root.node.Height = this.getNodeParameter("Height", i,'')
root.node.Length = this.getNodeParameter("Length", i,'')
root.node.Width = this.getNodeParameter("Width", i,'')
root.node.VariantName1 = this.getNodeParameter("VariantName1", i,'')
root.node.VariantName2 = this.getNodeParameter("VariantName2", i,'')
root.node.VariantName3 = this.getNodeParameter("VariantName3", i,'')
root.node.VariantName4 = this.getNodeParameter("VariantName4", i,'')
root.node.Variants = this.getNodeParameter("Variants", i,'')
root.node.Specs = this.getNodeParameter("Specs", i,'')
        
            
                
    const headers = {
        
    }
    
    const body: any = {}
    const query: any = {}
    const pathParameters: any = {}
    
    body.ApiKey = root.credentials.ApiKey
    body.ApiPassword = root.credentials.ApiPassword

    

    

    root.flow.login = await StockMountApi.login.call(this,body,headers,query,pathParameters);
    
            
            

            if(root.node.operation == "GET_STORES"){
                
    const headers = {
        
    }
    
    const body: any = {}
    const query: any = {}
    const pathParameters: any = {}
    
    body.ApiCode = root.flow.login.Response.ApiCode
    body.StoreId = root.node.StoreId
    body.IntegrationId = root.node.IntegrationId

    

    

    root.flow.getStores = await StockMountApi.getStore.call(this,body,headers,query,pathParameters);
    
            }
            

            if(root.node.operation == "GET_SALES"){
                
    const headers = {
        
    }
    
    const body: any = {}
    const query: any = {}
    const pathParameters: any = {}
    
    body.ApiCode = root.flow.login.Response.ApiCode
    body.StoreId = root.node.StoreId
    body.OrderStatus = root.node.OrderStatus
    body.SmallestOrderDetailId = root.node.SmallestOrderDetailId
    body.BiggestOrderDetailId = root.node.BiggestOrderDetailId
    body.InvoiceStatus = root.node.InvoiceStatus
    body.OrderId = root.node.OrderId
    body.StartDate = root.node.StartDate
    body.EndDate = root.node.EndDate
    body.LastModificationTimeFrom = root.node.LastModificationTimeFrom
    body.LastModificationTimeTo = root.node.LastModificationTimeTo
    body.PageIndex = root.node.PageIndex
    body.RowsByPage = root.node.RowsByPage

    

    

    root.flow.getSales = await StockMountApi.getSales.call(this,body,headers,query,pathParameters);
    
            }
            

            if(root.node.operation == "CONFIRM_OR_REJECT_ORDER_ITEM"){
                
    const headers = {
        
    }
    
    const body: any = {}
    const query: any = {}
    const pathParameters: any = {}
    
    body.ApiCode = root.flow.login.Response.ApiCode
    body.StoreId = root.node.StoreId
    body.IntegrationId = root.node.IntegrationId
    body.IntegrationOrderDetailId = root.node.IntegrationOrderDetailId
    body.Status = root.node.OrderItemStatus

    

    

    root.flow.confirmOrRejectOrderItem = await StockMountApi.confirmOrRejectOrderItem.call(this,body,headers,query,pathParameters);
    
            }
            

            if(root.node.operation == "GET_INTEGRATION_SHIPMENT_COMPANIES"){
                
    const headers = {
        
    }
    
    const body: any = {}
    const query: any = {}
    const pathParameters: any = {}
    
    body.ApiCode = root.flow.login.Response.ApiCode
    body.IntegrationId = root.node.IntegrationId

    

    

    root.flow.getIntegrationShipmentCompanies = await StockMountApi.getIntegrationShipmentCompanies.call(this,body,headers,query,pathParameters);
    
            }
            

            if(root.node.operation == "SET_ORDER_SHIPMENT_INFORMATION"){
                
    const headers = {
        
    }
    
    const body: any = {}
    const query: any = {}
    const pathParameters: any = {}
    
    body.ApiCode = root.flow.login.Response.ApiCode
    body.StoreId = root.node.StoreId
    body.IntegrationId = root.node.IntegrationId
    body.IntegrationOrderCode = root.node.IntegrationOrderCode
    body.ShipmentCompany = root.node.ShipmentCompany
    body.ShipmentTrackingCode = root.node.ShipmentTrackingCode
    body.ShipmentBranch = root.node.ShipmentBranch
    body.CampaignNumber = root.node.CampaignNumber
    body.ShipmentCompanyId = root.node.ShipmentCompanyId
    body.OrderDetailId = root.node.OrderDetailId
    body.SendShipmentInformation = root.node.SendShipmentInformation

    

    

    root.flow.setOrderShipmentInformation = await StockMountApi.setOrderShipmentInformation.call(this,body,headers,query,pathParameters);
    
            }
            

            if(root.node.operation == "GET_INTEGRATION_ORDER_LISTING_STATUS"){
                
    const headers = {
        
    }
    
    const body: any = {}
    const query: any = {}
    const pathParameters: any = {}
    
    body.ApiCode = root.flow.login.Response.ApiCode
    body.IntegrationId = root.node.IntegrationId
    body.StoreId = root.node.StoreId

    

    

    root.flow.getIntegrationOrderListingStatus = await StockMountApi.getIntegrationOrderListingStatus.call(this,body,headers,query,pathParameters);
    
            }
            

            if(root.node.operation == "GET_ORDER_DETAIL_STATUS"){
                
    const headers = {
        
    }
    
    const body: any = {}
    const query: any = {}
    const pathParameters: any = {}
    
    body.ApiCode = root.flow.login.Response.ApiCode
    body.OrderDetails = root.node.OrderDetails

    

    

    root.flow.getOrderDetailStatus = await StockMountApi.getOrderDetailStatus.call(this,body,headers,query,pathParameters);
    
            }
            

            if(root.node.operation == "SET_ORDER"){
                
    const headers = {
        
    }
    
    const body: any = {}
    const query: any = {}
    const pathParameters: any = {}
    
    body.ApiCode = root.flow.login.Response.ApiCode
    body.Order = root.node.Order
    body.StoreId = root.node.StoreId

    

    

    root.flow.setOrder = await StockMountApi.setOrder.call(this,body,headers,query,pathParameters);
    
            }
            

            if(root.node.operation == "SET_ORDER_DETAIL"){
                
    const headers = {
        
    }
    
    const body: any = {}
    const query: any = {}
    const pathParameters: any = {}
    
    body.ApiCode = root.flow.login.Response.ApiCode
    body.OrderDetails = root.node.OrderDetails

    

    

    root.flow.setOrderDetail = await StockMountApi.setOrderDetailStatus.call(this,body,headers,query,pathParameters);
    
            }
            

            if(root.node.operation == "GET_ORDER"){
                
    const headers = {
        
    }
    
    const body: any = {}
    const query: any = {}
    const pathParameters: any = {}
    
    body.ApiCode = root.flow.login.Response.ApiCode
    body.OrderId = root.node.OrderId

    

    

    root.flow.getOrder = await StockMountApi.getOrder.call(this,body,headers,query,pathParameters);
    
            }
            

            if(root.node.operation == "GET_PRODUCT_SOURCES"){
                
    const headers = {
        
    }
    
    const body: any = {}
    const query: any = {}
    const pathParameters: any = {}
    
    body.ApiCode = root.flow.login.Response.ApiCode

    

    

    root.flow.getProductSources = await StockMountApi.getProductSources.call(this,body,headers,query,pathParameters);
    
            }
            

            if(root.node.operation == "GET_PRODUCT_CATEGORIES"){
                
    const headers = {
        
    }
    
    const body: any = {}
    const query: any = {}
    const pathParameters: any = {}
    
    body.ApiCode = root.flow.login.Response.ApiCode
    body.ProductSourceId = root.node.ProductSourceId

    

    

    root.flow.getProductCategories = await StockMountApi.getProductCategories.call(this,body,headers,query,pathParameters);
    
            }
            

            if(root.node.operation == "GET_PRODUCT"){
                
    const headers = {
        
    }
    
    const body: any = {}
    const query: any = {}
    const pathParameters: any = {}
    
    body.ApiCode = root.flow.login.Response.ApiCode
    body.ProductId = root.node.ProductId
    body.ProductSourceId = root.node.ProductSourceId
    body.Code = root.node.Code

    

    

    root.flow.getProduct = await StockMountApi.getProduct.call(this,body,headers,query,pathParameters);
    
            }
            

            if(root.node.operation == "ADD_PRODUCT"){
                
    const headers = {
        
    }
    
    const body: any = {}
    const query: any = {}
    const pathParameters: any = {}
    
    body.ApiCode = root.flow.login.Response.ApiCode
    body.ProductId = root.node.ProductId
    body.ProductSourceId = root.node.ProductSourceId
    body.Description = root.node.Description
    body.Code = root.node.Code
    body.Code2 = root.node.Code2
    body.Barcode = root.node.Barcode
    body.Name = root.node.Name
    body.Subtitle = root.node.Subtitle
    body.Price = root.node.Price
    body.Quantity = root.node.Quantity
    body.Brand = root.node.Brand
    body.TaxRate = root.node.TaxRate
    body.Model = root.node.Model
    body.Category = root.node.Category
    body.CurrencyId = root.node.CurrencyId
    body.Images = root.node.Images
    body.MarketPrice = root.node.MarketPrice
    body.Status = root.node.Status
    body.Volume = root.node.Volume
    body.Height = root.node.Height
    body.Length = root.node.Length
    body.Width = root.node.Width
    body.VariantName1 = root.node.VariantName1
    body.VariantName2 = root.node.VariantName2
    body.VariantName3 = root.node.VariantName3
    body.VariantName4 = root.node.VariantName4
    body.Variants = root.node.Variants
    body.Specs = root.node.Specs

    

    

    root.flow.addProduct = await StockMountApi.addProduct.call(this,body,headers,query,pathParameters);
    
            }
            

            if(root.node.operation == "UPDATE_PRODUCT"){
                
    const headers = {
        
    }
    
    const body: any = {}
    const query: any = {}
    const pathParameters: any = {}
    
    body.ApiCode = root.flow.login.Response.ApiCode
    body.ProductId = root.node.ProductId
    body.ProductSourceId = root.node.ProductSourceId
    body.Description = root.node.Description
    body.Code = root.node.Code
    body.Code2 = root.node.Code2
    body.Barcode = root.node.Barcode
    body.Name = root.node.Name
    body.Subtitle = root.node.Subtitle
    body.Price = root.node.Price
    body.Quantity = root.node.Quantity
    body.Brand = root.node.Brand
    body.TaxRate = root.node.TaxRate
    body.Model = root.node.Model
    body.Category = root.node.Category
    body.CurrencyId = root.node.CurrencyId
    body.Images = root.node.Images
    body.MarketPrice = root.node.MarketPrice
    body.Status = root.node.Status
    body.Volume = root.node.Volume
    body.Height = root.node.Height
    body.Length = root.node.Length
    body.Width = root.node.Width
    body.VariantName1 = root.node.VariantName1
    body.VariantName2 = root.node.VariantName2
    body.VariantName3 = root.node.VariantName3
    body.VariantName4 = root.node.VariantName4
    body.Variants = root.node.Variants
    body.Specs = root.node.Specs

    

    

    root.flow.updateProduct = await StockMountApi.updateProduct.call(this,body,headers,query,pathParameters);
    
            }
            

            if(root.node.operation == "STOP_PRODUCT"){
                
    const headers = {
        
    }
    
    const body: any = {}
    const query: any = {}
    const pathParameters: any = {}
    
    body.ApiCode = root.flow.login.Response.ApiCode
    body.ProductId = root.node.ProductId
    body.ProductSourceId = root.node.ProductSourceId
    body.Code = root.node.Code

    

    

    root.flow.stopProduct = await StockMountApi.stopProduct.call(this,body,headers,query,pathParameters);
    
            }
            

            if(root.node.operation == "DELETE_PRODUCT"){
                
    const headers = {
        
    }
    
    const body: any = {}
    const query: any = {}
    const pathParameters: any = {}
    
    body.ApiCode = root.flow.login.Response.ApiCode
    body.ProductId = root.node.ProductId
    body.ProductSourceId = root.node.ProductSourceId
    body.Code = root.node.Code

    

    

    root.flow.deleteProduct = await StockMountApi.deleteProduct.call(this,body,headers,query,pathParameters);
    
            }
            

            if(root.node.operation == "GET_PRODUCTS"){
                
    const headers = {
        
    }
    
    const body: any = {}
    const query: any = {}
    const pathParameters: any = {}
    
    body.ApiCode = root.flow.login.Response.ApiCode
    body.ProductId = root.node.ProductId
    body.ProductSourceId = root.node.ProductSourceId
    body.Code = root.node.Code

    

    

    root.flow.getProducts = await StockMountApi.getProducts.call(this,body,headers,query,pathParameters);
    
            }
            

            if(root.node.operation == "UPDATE_PRODUCT_PRICE"){
                
    const headers = {
        
    }
    
    const body: any = {}
    const query: any = {}
    const pathParameters: any = {}
    
    body.ApiCode = root.flow.login.Response.ApiCode
    body.ProductId = root.node.ProductId
    body.ProductSourceId = root.node.ProductSourceId
    body.Description = root.node.Description
    body.Code = root.node.Code
    body.Code2 = root.node.Code2
    body.Barcode = root.node.Barcode
    body.Name = root.node.Name
    body.Subtitle = root.node.Subtitle
    body.Price = root.node.Price
    body.Quantity = root.node.Quantity
    body.Brand = root.node.Brand
    body.TaxRate = root.node.TaxRate
    body.Model = root.node.Model
    body.Category = root.node.Category
    body.CurrencyId = root.node.CurrencyId
    body.Images = root.node.Images
    body.MarketPrice = root.node.MarketPrice
    body.Status = root.node.Status
    body.Volume = root.node.Volume
    body.Height = root.node.Height
    body.Length = root.node.Length
    body.Width = root.node.Width
    body.VariantName1 = root.node.VariantName1
    body.VariantName2 = root.node.VariantName2
    body.VariantName3 = root.node.VariantName3
    body.VariantName4 = root.node.VariantName4
    body.Variants = root.node.Variants
    body.Specs = root.node.Specs

    

    

    root.flow.updateProductPrice = await StockMountApi.updateProductPrice.call(this,body,headers,query,pathParameters);
    
            }
            
        
        returnItems.push({json: root.flow})
    }

    return this.prepareOutputData(returnItems);
  }
}