
import { IExecuteFunctions } from "n8n-core";
import {
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
  ILoadOptionsFunctions,
  INodePropertyOptions,
} from "n8n-workflow";
import properties from "./temporary_file_properties" ;


import TempFileServerApi from "./TempFileServerApi"
    



export class TemporaryFile implements INodeType {
  description: INodeTypeDescription = {
    displayName: "Temporary File",
    name: "temporaryFile",
    group: ["transform"],
    version: 1,
    description: "allows you to upload temporary files from base64",
    defaults: {
      name: "Temporary File",
      color: "#772244",
    },
    icon: "file:qbitra_bot.png",
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
    
    
    

    const root: any = {
        credentials: {
            
        },
        node: {},
        flow: {}
    }
    let returnItems : INodeExecutionData[] = [];
    for (let i = 0; i < items.length; i++) {
        root.node.base64 = this.getNodeParameter("base64", i,'')
root.node.removeAfterFirstAccess = this.getNodeParameter("removeAfterFirstAccess", i,'')
root.node.expireIn = this.getNodeParameter("expireIn", i,'')
root.node.extension = this.getNodeParameter("extension", i,'')
        
            
                
    const headers = {
        
    }
    
    const body: any = {}
    const query: any = {}
    const pathParameters: any = {}
    
    body.base64 = root.node.base64
    body.removeAfter = root.node.expireIn
    body.removeOnFirstAccess = root.node.removeAfterFirstAccess
    body.extension = root.node.extension

    

    

    root.flow.upload = await TempFileServerApi.upload.call(this,body,headers,query,pathParameters);
    
            
            
        
        returnItems.push({json: root.flow})
    }

    return this.prepareOutputData(returnItems);
  }
}