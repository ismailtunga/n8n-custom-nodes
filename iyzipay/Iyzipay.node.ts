
import { IExecuteFunctions } from "n8n-core";
import {
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
  ILoadOptionsFunctions,
  INodePropertyOptions,
  IDataObject
} from "n8n-workflow";
import properties from "./iyzipay_properties" ;
const IyzipayApi = require("iyzipay") ;

export class Iyzipay implements INodeType {
  description: INodeTypeDescription = {
    displayName: "Iyzipay",
    name: "iyzipay",
    group: ["transform"],
    version: 1,
    description: "Consumes iyzipay api",
    icon: "file:iyzipay.png",
    defaults: {
      name: "Iyzipay",
      color: "#772244",
    },
    
    credentials: [
        {
          name: "Iyzipay",
          required: true,
        },
    ],
    
    inputs: ["main"],
    outputs: ["main"],
    properties:properties
  };

  methods = {
    loadOptions: {
        
    } 
  }

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();
    
    
    const credentials = this.getCredentials("Iyzipay");

    if (credentials === undefined) {
        throw new Error("No credentials got returned!");
    }
    

    const root: any = {
        credentials: {
            
            apiKey: credentials.apiKey
            ,

            secretKey: credentials.secretKey
            ,

            uri: credentials.uri
            
        },
        node: {},
        flow: {}
    }
    let returnItems : INodeExecutionData[] = [];

    const iyzipay = new IyzipayApi(root.credentials);


    for (let i = 0; i < items.length; i++) {
        root.node.operation = this.getNodeParameter("operation", i,'')
        root.node.locale = this.getNodeParameter("locale", i,'')
        root.node.conversationId = this.getNodeParameter("conversationId", i,'')
        root.node.name = this.getNodeParameter("name", i,'')
        root.node.description = this.getNodeParameter("description", i,'')
        root.node.price = this.getNodeParameter("price", i,'')
        root.node.currency = this.getNodeParameter("currency", i,'')
        root.node.addressIgnorable = this.getNodeParameter("addressIgnorable", i,'')
        root.node.soldLimit = this.getNodeParameter("soldLimit", i,'')
        root.node.installmentRequest = this.getNodeParameter("installmentRequest", i,'')
        root.node.base64EncodedImage = this.getNodeParameter("base64EncodedImage", i,'')
        
        
        const result:IDataObject = await new Promise( (res,rej) => {
          eval(`${root.node.operation}(root.node, (err,data) => {
            if(err) rej(err)
            else res(data)
          })`)
        })
        
        returnItems.push({json: result})
    }

    return this.prepareOutputData(returnItems);
  }
}