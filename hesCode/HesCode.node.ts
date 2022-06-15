import { IExecuteFunctions } from "n8n-core";
import {
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
  ILoadOptionsFunctions,
  INodePropertyOptions,
} from "n8n-workflow";
import properties from "./hes_code_properties";

import HesCodeApi from "./HesCodeApi";

export class HesCode implements INodeType {
  description: INodeTypeDescription = {
    displayName: "HES Code",
    name: "hesCode",
    group: ["transform"],
    version: 1,
    description: "Queries hes code from api provided ministry of health",
    icon: "file:hes_code.png",
    defaults: {
      name: "HES Code",
      color: "#772244",
    },

    credentials: [
      {
        name: "hesCodeApi",
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

    const credentials = this.getCredentials("hesCodeApi");

    if (credentials === undefined) {
      throw new Error("No credentials got returned!");
    }

    const root: any = {
      credentials: {
        username: credentials.username,
        password: credentials.password,
        url: credentials.url,
      },
      node: {},
      flow: {},
    };

    let returnItems: INodeExecutionData[] = [];
    for (let i = 0; i < items.length; i++) {
      root.node.codes = this.getNodeParameter("codes", i, "");

      HesCodeApi.defaults.baseURL = root.credentials.url;
      HesCodeApi.defaults.headers = {
        Authorization: "Basic " + Buffer.from(root.credentials.username + ":" +root.credentials.password).toString("base64")
      }
      console.log(HesCodeApi.defaults)
      const headers = {};

      const body: any = root.node.codes.split(',').map( hes_code => ({hes_code}) );
      const query: any = {};
      const pathParameters: any = {};

      root.flow.checkHesCodes = await HesCodeApi.checkHesCodes.call(
        this,
        body,
        headers,
        query,
        pathParameters
      );

      returnItems.push({ json: root.flow.checkHesCodes });
    }

    return this.prepareOutputData(returnItems);
  }
}
