
import { IExecuteFunctions } from "n8n-core";
import {
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
  ILoadOptionsFunctions,
  INodePropertyOptions,
} from "n8n-workflow";
const HtmlToImageConverter = require('node-html-to-image') 
import properties from "./html_to_image_properties" ;


export class HtmlToImage implements INodeType {
  description: INodeTypeDescription = {
    displayName: "html to image",
    name: "htmlToImage",
    group: ["transform"],
    version: 1,
    description: "converts given html to image",
    defaults: {
      name: "html to image",
      color: "#772244",
    },
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
        root.node.html = this.getNodeParameter("html", i,'')
        root.node.width = this.getNodeParameter("width", i,'')
        root.node.height = this.getNodeParameter("height", i,'')
        
        const buffer = await HtmlToImageConverter({
          html: root.node.html,
          puppeteerArgs: {
            defaultViewport: {
              width: root.node.width || 1000 ,
              height: root.node.height || 1000
            }
          }
        })
        
        returnItems.push({json: {base64: buffer.toString('base64') }});
    }

    return this.prepareOutputData(returnItems);
  }
}