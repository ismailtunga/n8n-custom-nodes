
import { IExecuteFunctions } from "n8n-core";
import {
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
  ILoadOptionsFunctions,
  INodePropertyOptions,
} from "n8n-workflow";
import properties from "./qbitra_bot_properties" ;


import QbitraBotApi from "./QbitraBotApi"
    



export class QbitraBot implements INodeType {
  description: INodeTypeDescription = {
    displayName: "Qbitra Bot",
    name: "qbitraBot",
    group: ["transform"],
    version: 1,
    description: "Consumes Qbitra Bot Api",
    icon: "file:qbitra_bot.png",
    defaults: {
      name: "Qbitra Bot",
      color: "#772244",
    },
    
    credentials: [
        {
          name: "QbitraBot",
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
    
    
    const credentials = this.getCredentials("QbitraBot");

    if (credentials === undefined) {
        throw new Error("No credentials got returned!");
    }
    

    const root: any = {
        credentials: {
            
            username: credentials.username
            ,

            password: credentials.password
            ,

            url: credentials.url
            
        },
        node: {},
        flow: {}
    }
    let returnItems : INodeExecutionData[] = [];
    for (let i = 0; i < items.length; i++) {
        root.node.operation = this.getNodeParameter("operation", i,'')
root.node.botId = this.getNodeParameter("botId", i,'')
root.node.target = this.getNodeParameter("target", i,'')
root.node.message = this.getNodeParameter("message", i,'')
        
            
                QbitraBotApi.defaults.baseURL = root.credentials.url
            
            

            
                
    const headers = {
        
    }
    
    const body: any = {}
    const query: any = {}
    const pathParameters: any = {}
    
    body.email = root.credentials.username
    body.password = root.credentials.password

    

    

    root.flow.login = await QbitraBotApi.login.call(this,body,headers,query,pathParameters);
    
            
            

            
                QbitraBotApi.defaults.headers = { ...QbitraBotApi.defaults.headers, ...{
            Authorization: 'Bearer ' + root.flow.login.payload.token
        }
    }
            
            

            if(root.node.operation == "message"){
                
    const headers = {
        
    }
    
    const body: any = {}
    const query: any = {}
    const pathParameters: any = {}
    

    

    
    pathParameters.botId = root.node.botId

    root.flow.getSessions = await QbitraBotApi.getSessions.call(this,body,headers,query,pathParameters);
    
            }
            

            if(root.node.operation == "message"){
                
    const headers = {
        
    }
    
    const body: any = {}
    const query: any = {}
    const pathParameters: any = {}
    
    body.message = root.node.message

    

    
    pathParameters.botId = root.node.botId
    pathParameters.sessionId = root.flow.getSessions.find( s => s.user.id == root.node.target ).id

    root.flow.sendMessage = await QbitraBotApi.sendMessage.call(this,body,headers,query,pathParameters);
    
            }
            
        
        returnItems.push({json: root.flow})
    }

    return this.prepareOutputData(returnItems);
  }
}