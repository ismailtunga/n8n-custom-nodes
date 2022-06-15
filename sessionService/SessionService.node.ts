import { IExecuteFunctions } from "n8n-core";
import {
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
  ILoadOptionsFunctions,
  INodePropertyOptions,
} from "n8n-workflow";
import properties from "./session_service_properties";

import SessionServerApi from "./SessionServerApi";

export class SessionService implements INodeType {
  description: INodeTypeDescription = {
    displayName: "Session Service",
    name: "sessionService",
    group: ["transform"],
    version: 1,
    description: "Consumes Session Service Api",
    defaults: {
      name: "Session Service",
      color: "#772244",
    },
    icon: "file:logo.png",
    credentials: [
      {
        name: "SessionServer",
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

    const credentials = this.getCredentials("SessionServer");

    if (credentials === undefined) {
      throw new Error("No credentials got returned!");
    }

    const root: any = {
      credentials: {
        clientId: credentials.clientId,
        clientSecret: credentials.clientSecret,
        url: credentials.url,
      },
      node: {},
      flow: {},
    };
    let returnItems: INodeExecutionData[] = [];
    for (let i = 0; i < items.length; i++) {
      root.node.operation = this.getNodeParameter("operation", i, "");
      root.node.id = this.getNodeParameter("id", i, "");
      root.node.data = this.getNodeParameter("data", i, "");

      SessionServerApi.defaults.baseURL = root.credentials.url;

      const headers = {};

      const body: any = {};
      const query: any = {};
      const pathParameters: any = {};

      body.clientId = root.credentials.clientId;
      body.clientSecret = root.credentials.clientSecret;

      root.flow.login = await SessionServerApi.login.call(
        this,
        body,
        headers,
        query,
        pathParameters
      );

      SessionServerApi.defaults.headers = {
        ...SessionServerApi.defaults.headers,
        ...{
          Authorization: root.flow.login.token,
        },
      };

      if (root.node.operation == "CREATE") {
        const headers = {};

        const body: any = {};
        const query: any = {};
        const pathParameters: any = {};

        root.flow.create = await SessionServerApi.create.call(
          this,
          body,
          headers,
          query,
          pathParameters
        );
      }

      if (root.node.operation == "PATCH") {
        const headers = {};

        const body: any = JSON.parse(root.node.data);
        const query: any = {};
        const pathParameters: any = {};

        pathParameters.id = root.node.id;

        root.flow.update = await SessionServerApi.update.call(
          this,
          body,
          headers,
          query,
          pathParameters
        );
      }

      if (root.node.operation == "DELETE") {
        const headers = {};

        const body: any = {};
        const query: any = {};
        const pathParameters: any = {};

        pathParameters.id = root.node.id;

        root.flow.remove = await SessionServerApi.remove.call(
          this,
          body,
          headers,
          query,
          pathParameters
        );
      }

      if (root.node.operation == "GET") {
        const headers = {};

        const body: any = {};
        const query: any = {};
        const pathParameters: any = {};

        pathParameters.id = root.node.id;

        root.flow.get = await SessionServerApi.get.call(
          this,
          body,
          headers,
          query,
          pathParameters
        );
      }
      
        let values: any = Object.values(root.flow);
      
        returnItems.push({ json: values[values.length - 1] });
      
      
    }

    return this.prepareOutputData(returnItems);
  }
}
