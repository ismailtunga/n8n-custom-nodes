import { IExecuteFunctions } from "n8n-core";
import {
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
  ILoadOptionsFunctions,
  INodePropertyOptions,
} from "n8n-workflow";
import properties from "./manage_engine_service_desk_properties";

import ManageEngineServiceDeskApi from "./ManageEngineServiceDeskApi";

export class ManageEngineServiceDesk implements INodeType {
  description: INodeTypeDescription = {
    displayName: "ManageEngine - Service Desk",
    name: "manageEngineServiceDesk",
    group: ["transform"],
    version: 1,
    description: "Consumes Manage Engine Service Desk API",
    icon: "file:manage_engine_service_desk.png",
    defaults: {
      name: "ManageEngine - Service Desk",
      color: "#772244",
    },

    credentials: [
      {
        name: "ManageEngineServiceDesk",
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

    const credentials = this.getCredentials("ManageEngineServiceDesk");

    if (credentials === undefined) {
      throw new Error("No credentials got returned!");
    }

    const root: any = {
      credentials: {
        technician_key: credentials.technician_key,
        base_url: credentials.base_url,
      },
      node: {},
      flow: {},
    };
    let returnItems: INodeExecutionData[] = [];
    for (let i = 0; i < items.length; i++) {
      root.node.operation = this.getNodeParameter("operation", i, "");
      root.node.subject = this.getNodeParameter("subject", i, "");
      root.node.description = this.getNodeParameter("description", i, "");
      root.node.requester_name = this.getNodeParameter("requester_name", i, "");
      root.node.impact_details = this.getNodeParameter("impact_details", i, "");
      root.node.resolution = this.getNodeParameter("resolution", i, "");
      root.node.status = this.getNodeParameter("status", i, "");
      root.node.category = this.getNodeParameter("category", i, "");
      root.node.subcategory = this.getNodeParameter("subcategory", i, "");
      root.node.request_id = this.getNodeParameter("request_id", i, "");
      root.node.technician = this.getNodeParameter("technician", i, "");
      

      ManageEngineServiceDeskApi.defaults.baseURL = root.credentials.base_url;

      ManageEngineServiceDeskApi.defaults.headers = {
        ...ManageEngineServiceDeskApi.defaults.headers,
        ...{
          TECHNICIAN_KEY: root.credentials.technician_key,
        },
      };

      if (root.node.operation == "ADD_REQUEST") {
        const headers = {};

        const body: any = { request: { subcategory: {}, category: {}, status: {},requester: {}, resolution: {} } };
        const query: any = {};
        const pathParameters: any = {};

        body.request.subject = root.node.subject;
        body.request.description = root.node.description;
        body.request.requester.name = root.node.requester_name;
        body.request.impact_details = root.node.impact_details;
        body.request.resolution.content = root.node.resolution;
        body.request.status.name = root.node.status;
        body.request.category.name = root.node.category;
        body.request.subcategory.name = root.node.subcategory;

        query.input_data = JSON.stringify(body);
        root.flow.add = await ManageEngineServiceDeskApi.add.call(
          this,
          {},
          headers,
          query,
          pathParameters
        );
      }

      if (root.node.operation == "UPDATE_REQUEST") {
        const headers = {};

        const body: any = { request: { subcategory: {}, category: {}, status: {},requester: {}, resolution: {}, technician: {} } };
        const query: any = {};
        const pathParameters: any = {};

        body.request.subject = root.node.subject;

        if(!root.node.subject){
          delete body.request.subject
        }
        
        body.request.description = root.node.description;

        if(!root.node.description){
          delete body.request.description
        }

        body.request.requester.name = root.node.requester_name;

        if(!root.node.requester_name){
          delete body.request.requester
        }

        body.request.impact_details = root.node.impact_details;

        if(!root.node.impact_details){
          delete body.request.impact_details
        }

        body.request.resolution.content = root.node.resolution;

        if(!root.node.resolution){
          delete body.request.resolution
        }

        body.request.status.name = root.node.status;
        
        if(!root.node.status){
          delete body.request.status
        }

        body.request.category.name = root.node.category;
        
        if(!root.node.category){
          delete body.request.category
        }

        body.request.subcategory.name = root.node.subcategory;

        body.request.technician.name = root.node.technician;

        if(!root.node.subcategory){
          delete body.request.subcategory
        }        

        query.input_data = JSON.stringify(body)
        pathParameters.request_id = root.node.request_id;

        root.flow.update = await ManageEngineServiceDeskApi.update.call(
          this,
          {},
          headers,
          query,
          pathParameters
        );
      }

      if (root.node.operation == "DELETE_REQUEST") {
        const headers = {};

        const body: any = {};
        const query: any = {};
        const pathParameters: any = {};

        pathParameters.request_id = root.node.request_id;

        root.flow.delete = await ManageEngineServiceDeskApi.remove.call(
          this,
          body,
          headers,
          query,
          pathParameters
        );
      }

      if (root.node.operation == "GET_ALL") {
        const headers = {};

        const body: any = {};
        const query: any = {};
        const pathParameters: any = {};

        root.flow.getAll = await ManageEngineServiceDeskApi.get.call(
          this,
          body,
          headers,
          query,
          pathParameters
        );
      }

      if (root.node.operation == "GET_REQUEST") {
        const headers = {};

        const body: any = {};
        const query: any = {};
        const pathParameters: any = {};
        pathParameters.requestId = root.node.request_id;
        root.flow.getRequest = await ManageEngineServiceDeskApi.getOne.call(
          this,
          body,
          headers,
          query,
          pathParameters
        );
      }

      const results: Array<any> = Object.values(root.flow);
      returnItems.push({ json:  results[results.length -  1]});
    }

    return this.prepareOutputData(returnItems);
  }
}
