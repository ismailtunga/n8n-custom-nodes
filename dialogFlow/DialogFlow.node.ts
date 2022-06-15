import { IExecuteFunctions } from "n8n-core";
import {
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
} from "n8n-workflow";
import properties from "./dialog_flow_properties";

import DialogFlowApi from "./DialogFlowApi";

export class DialogFlow implements INodeType {
  description: INodeTypeDescription = {
    displayName: "DialogFlow",
    name: "dialogFlow",
    group: ["transform"],
    version: 1,
    description: "",
    icon: "file:dialog_flow.png",
    defaults: {
      name: "DialogFlow",
      color: "#772244",
    },

    inputs: ["main"],
    outputs: ["main"],
    properties: properties,
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();

    const root: any = {
      credentials: {},
      node: {},
      flow: {},
    };
    let returnItems : INodeExecutionData[] = [];
    for (let i = 0; i < items.length; i++) {
      root.node.context = this.getNodeParameter("context", i, "");
      root.node.lang = this.getNodeParameter("lang", i, "");
      root.node.query = this.getNodeParameter("query", i, "");
      root.node.sessionId = this.getNodeParameter("sessionId", i, "");

      const body = {
        context: root.node.context,
        lang: root.node.lang,
        query: root.node.query,
        sessionId: root.node.sessionId,
      };
      console.log(body)
      let result =  await DialogFlowApi.query.call(this, body);
      console.log(result);
      returnItems.push({json: result})
    }

    return this.prepareOutputData(returnItems);
  }
}
