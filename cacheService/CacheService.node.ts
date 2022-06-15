import { IExecuteFunctions } from "n8n-core";
import {
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
  ILoadOptionsFunctions,
  INodePropertyOptions,
} from "n8n-workflow";
import properties from "./cache_service_properties";

import CacheServiceApi from "./CacheService";

export class CacheService implements INodeType {
  description: INodeTypeDescription = {
    displayName: "Cache Service",
    name: "cacheService",
    group: ["transform"],
    version: 1,
    description: "Helps Storing Long Query Result As Cache",
    icon: "file:cache.png",
    defaults: {
      name: "Cache Service",
      color: "#772244",
    },

    credentials: [
      {
        name: "CacheService",
        required: true,
      },
    ],

    inputs: ["main"],
    outputs: ["main"],
    properties: properties,
  };

  methods = {
    loadOptions: {},
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();

    const credentials = this.getCredentials("CacheService");

    if (credentials === undefined) {
      throw new Error("No credentials got returned!");
    }

    const root: any = {
      credentials: {
        apiKey: credentials.apiKey,
        baseURL: credentials.apiURL,
      },
      node: {},
      flow: {},
    };
    let returnItems: INodeExecutionData[] = [];
    for (let i = 0; i < items.length; i++) {
      root.node.operation = this.getNodeParameter("operation", i, "");
      root.node.name = this.getNodeParameter("name", i, "");
      root.node.query = this.getNodeParameter("query", i, "");
      root.node.data = this.getNodeParameter("data", i, "");
      root.node.expiresIn = this.getNodeParameter("expiresIn", i, "");

      CacheServiceApi.defaults.baseURL = credentials.apiURL

      CacheServiceApi.defaults.headers = {
        ...CacheServiceApi.defaults.headers,
        ...{
          apiKey: root.credentials.apiKey,
        },
      };

      if (root.node.operation == "store") {
        const headers = {};

        const body: any = {};
        const query: any = {};
        const pathParameters: any = {};

        body.query = { name: root.node.name, ...JSON.parse(root.node.query) };
        body.data = root.node.data;
        body.expiresIn = root.node.expiresIn;

        root.flow.store = await CacheServiceApi.store.call(
          this,
          body,
          headers,
          query,
          pathParameters
        );
      }

      if (root.node.operation == "get") {
        const headers = {};

        const body: any = {};
        const query: any = {};
        const pathParameters: any = {};

        pathParameters.cacheQuery = { name: root.node.name, ...JSON.parse(root.node.query) };

        root.flow.get = await CacheServiceApi.get.call(
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
