import { IExecuteFunctions } from "n8n-core";
import {
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
  ILoadOptionsFunctions,
  INodePropertyOptions,
} from "n8n-workflow";
import properties from "./trendyol_properties";

import TrendyolAPI from "./TrendyolAPI";

export class Trendyol implements INodeType {
  description: INodeTypeDescription = {
    displayName: "Trendyol",
    name: "trendyol",
    group: ["transform"],
    version: 1,
    description: "Consumes Trendyol API",
    icon: "file:trendyol.png",
    defaults: {
      name: "Trendyol",
      color: "#772244",
    },

    credentials: [
      {
        name: "TrendyolAPICredentials",
        required: true,
      },
    ],

    inputs: ["main"],
    outputs: ["main"],
    properties: properties,
  };

  methods = {
    loadOptions: {
      async BrandLoader(
        this: ILoadOptionsFunctions
      ): Promise<INodePropertyOptions[]> {
        const credentials = this.getCredentials("TrendyolAPICredentials");

        if (credentials === undefined) {
          throw new Error("No credentials got returned!");
        }

        const root: any = {
          credentials: {
            supplierId: credentials.supplierId,
            apiKey: credentials.apiKey,
            apiSecureKey: credentials.apiSecureKey,
          },
          flow: {},
        };

        const headers = {};

        const body: any = {};
        const query: any = {};
        const pathParameters: any = {};

        root.flow.getBrands = await TrendyolAPI.getBrands.call(
          this,
          body,
          headers,
          query,
          pathParameters
        );

        const returnData: INodePropertyOptions[] = [];
        for (const item of root.flow.getBrands.brands) {
          returnData.push({
            name: item.name,
            value: item.id,
          });
        }

        return returnData;
      },
      async CategoryLoader(
        this: ILoadOptionsFunctions
      ): Promise<INodePropertyOptions[]> {
        const credentials = this.getCredentials("TrendyolAPICredentials");

        if (credentials === undefined) {
          throw new Error("No credentials got returned!");
        }

        const root: any = {
          credentials: {
            supplierId: credentials.supplierId,
            apiKey: credentials.apiKey,
            apiSecureKey: credentials.apiSecureKey,
          },
          flow: {},
        };

        const headers = {};

        const body: any = {};
        const query: any = {};
        const pathParameters: any = {};

        root.flow.getCategories = await TrendyolAPI.productCategories.call(
          this,
          body,
          headers,
          query,
          pathParameters
        );

        const returnData: INodePropertyOptions[] = [];
        
        function pushCategoryDeep(item){

          returnData.push({
            name: item.name,
            value: item.id,
          });
          
          if(item.subCategories){
             for (const sub of item.subCategories) {
               pushCategoryDeep(sub)
             }
          }
        }

        for (const item of root.flow.getCategories.categories) {
          pushCategoryDeep(item)
        }

        return returnData;
      },
      async ShipmentLoader(
        this: ILoadOptionsFunctions
      ): Promise<INodePropertyOptions[]> {
        const credentials = this.getCredentials("TrendyolAPICredentials");

        if (credentials === undefined) {
          throw new Error("No credentials got returned!");
        }

        const root: any = {
          credentials: {
            supplierId: credentials.supplierId,
            apiKey: credentials.apiKey,
            apiSecureKey: credentials.apiSecureKey,
          },
          flow: {},
        };

        const headers = {};

        const body: any = {};
        const query: any = {};
        const pathParameters: any = {};

        root.flow.getShipmentLoaders = await TrendyolAPI.getShipmentProviders.call(
          this,
          body,
          headers,
          query,
          pathParameters
        );

        const returnData: INodePropertyOptions[] = [];
        for (const item of root.flow.getShipmentLoaders) {
          returnData.push({
            name: item.name,
            value: item.id,
          });
        }

        return returnData;
      },
    },
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();

    const credentials = this.getCredentials("TrendyolAPICredentials");

    if (credentials === undefined) {
      throw new Error("No credentials got returned!");
    }

    const root: any = {
      credentials: {
        supplierId: credentials.supplierId,
        apiKey: credentials.apiKey,
        apiSecureKey: credentials.apiSecureKey,
      },
      node: {},
      flow: {},
    };
    let returnItems: INodeExecutionData[] = [];
    for (let i = 0; i < items.length; i++) {
      root.node.operation = this.getNodeParameter("operation", i, "");
      root.node.items = this.getNodeParameter("items", i, "");
      root.node.batchRequestId = this.getNodeParameter("batchRequestId", i, "");
      root.node.approved = this.getNodeParameter("approved", i, "");
      root.node.barcode = this.getNodeParameter("barcode", i, "");
      root.node.startDate = this.getNodeParameter("startDate", i, "");
      root.node.endDate = this.getNodeParameter("endDate", i, "");
      root.node.page = this.getNodeParameter("page", i, "");
      root.node.dateQueryType = this.getNodeParameter("dateQueryType", i, "");
      root.node.size = this.getNodeParameter("size", i, "");

      if (root.node.operation == "CREATE_PRODUCT") {
        const headers = {};

        const body: any = {};
        const query: any = {};
        const pathParameters: any = {};

        body.items = root.node.items;

        root.flow.createProduct = await TrendyolAPI.createProduct.call(
          this,
          body,
          headers,
          query,
          pathParameters
        );
      }

      if (root.node.operation == "UPDATE_PRODUCT") {
        const headers = {};

        const body: any = {};
        const query: any = {};
        const pathParameters: any = {};

        body.items = root.node.items;

        pathParameters.supplierId = root.credentials.supplierId;

        root.flow.updateProduct = await TrendyolAPI.updateProduct.call(
          this,
          body,
          headers,
          query,
          pathParameters
        );
      }

      if (root.node.operation == "UPDATE_PRICE_AND_INVENTORY") {
        const headers = {};

        const body: any = {};
        const query: any = {};
        const pathParameters: any = {};

        body.items = root.node.items;

        pathParameters.supplierid = root.credentials.supplierId;

        root.flow.updateInventoryAndPrice = await TrendyolAPI.priceAndInventoryUpdate.call(
          this,
          body,
          headers,
          query,
          pathParameters
        );
      }

      if (root.node.operation == "FILTER_PRODUCTS") {
        const headers = {};

        const body: any = {};
        const query: any = {};
        const pathParameters: any = {};

        query.approved = root.node.approved;
        query.barcode = root.node.barcode;
        query.startDate = new Date(root.node.startDate).getTime();
        query.endDate = new Date(root.node.endDate).getTime();
        query.page = root.node.page;
        query.dateQueryType = root.node.dateQueryType;
        query.size = root.node.size;

        pathParameters.supplierId = root.credentials.supplierId;

        root.flow.filterProducts = await TrendyolAPI.filterProducts.call(
          this,
          body,
          headers,
          query,
          pathParameters
        );
      }

      if (root.node.operation == "GET_BATCH_REQUEST") {
        const headers = {};

        const body: any = {};
        const query: any = {};
        const pathParameters: any = {};

        pathParameters.supplierid = root.credentials.supplierId;
        pathParameters.batchRequestId = root.node.batchRequestId;

        root.flow.getBatchRequestId = await TrendyolAPI.getBatchRequest.call(
          this,
          body,
          headers,
          query,
          pathParameters
        );
      }

      returnItems.push({ json: root.flow });
    }

    return this.prepareOutputData(returnItems);
  }
}
