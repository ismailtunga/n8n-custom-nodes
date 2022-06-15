
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
import { IExecuteFunctions } from "n8n-core";
import {
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
} from "n8n-workflow";
import properties from "./WsReportServices_properties";
const soap = require('soap');
const path = require("path");

export class WsReportServices implements INodeType {
  description: INodeTypeDescription = {
    displayName: "Yurtiçi Cargo Tracking",
    name: "wsReportServices",
    group: ["transform"],
    version: 1,
    icon: "file:yurticikargo.png",
    description: "Consume Yurtiçi Cargo Tracking Service",
    defaults: {
      name: "Yurtiçi Cargo Tracking",
      color: "#772244",
    },
    credentials: [
      {
        name: "yurticiApi",
        required: true,
      },
    ],
    inputs: ["main"],
    outputs: ["main"],
    properties: properties
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();

    const credentials = this.getCredentials("yurticiApi");
    if (credentials === undefined) throw new Error("No credentials got returned!");

    let endpoint = "http://webservices.yurticikargo.com:8080/KOPSWebServices/WsReportServices";
    let client = await soap.createClientAsync(path.join(__dirname, "WsReportServices.xml"), {
      endpoint: endpoint
    });

    let operation: string;
    let returnItems: INodeExecutionData[] = [];
    for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
      operation = this.getNodeParameter("operation", itemIndex) as string;
      let params = { ...this.getNode().parameters };
      delete params.operation;
      resolveParams(params, this, itemIndex);

      switch (operation) {
        case "getCancelledInfo":
        case "getCumulativeInvoiceDetail":
        case "getCumulativeInvoiceDetailReport":
        case "getCumulativeInvoiceDetailSeg":
        case "getDeliveryCollectionInfo":
        case "getDeliveryCollectionInfoByCustId":
        case "getDispatchCargo":
        case "getDispatchCargo2":
        case "getDispatchList":
        case "getIncomingCargo":
        case "getIncomingCargoBarCode":
        case "getIncomingCargoBarCode2":
        case "getRejectCargoBySpecialField":
        case "getShipmentBySpecialField":
        case "listInvDocumentInterfaceByReferencecase": {
          params = { ...params, userName: credentials.user, password: credentials.password }
          break;
        }

        case "getInvoiceDetail":
        case "getRejectCargo":
        case "getReturnCargo":
        case "getShipmentsByCargoRefCode":
        case "getShipmentsByDocIdcase": {
          params = { ...params, wsUserName: credentials.user, wsPassword: credentials.password }
          break;
        }
      }

      console.log(params);
      let result = await client[operation + "Async"](params) as INodeExecutionData;

      if (result[0].Status == "FAILURE") {
        throw { message: result[0] }
      }
      console.dir(result, { depth: null });
      returnItems.push({ json: result[0] });
    }

    return this.prepareOutputData(returnItems);
  }
}

function resolveParams(obj, node: IExecuteFunctions, index) {
  for (const [key, _] of Object.entries(obj)) {
    obj[key] = node.getNodeParameter(key, index);
  }
}
