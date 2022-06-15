
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
import { IExecuteFunctions } from "n8n-core";
import {
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
} from "n8n-workflow";
import properties from "./CAServiceDesk_properties" ;
const soap = require('soap');
const path = require("path"); 

export class CAServiceDesk implements INodeType {
  description: INodeTypeDescription = {
    displayName: "CA Service Desk",
    name: "cAServiceDesk",
    group: ["transform"],
    version: 1,
    icon: "file:caservicedesk.png",
    description: "Consume CA Service Desk API",
    defaults: {
      name: "CAServiceDesk",
      color: "#772244",
	},
	credentials: [
		{
		  name: "CAServiceDeskApi",
		  required: true,
		},
	  ],
    inputs: ["main"],
    outputs: ["main"],
    properties:properties
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();


    const credentials = this.getCredentials("CAServiceDeskApi");

    if (credentials === undefined) {
      throw new Error("No credentials got returned!");
    }

    let user: string = credentials.username as string;
    let password: string = credentials.password as string;
    let server: string = credentials.url as string;
    let endpoint = server;
    let client = await soap.createClientAsync(
      path.join(__dirname, "CAServiceDesk.xml"),
      {
        endpoint: endpoint,
        attributesKey: '$attributes'
      }
    );
    console.log('changed')
    console.log({user,password})
    //client.setSecurity(new soap.BasicAuthSecurity(user, password));
    client.setSecurity(new soap.WSSecurity(user, password,{
      passwordType:'PasswordText',
      hasTimeStamp: false,
    }));

    
	let operation: string;
	let returnItems : INodeExecutionData[] = [];
    for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
		operation = this.getNodeParameter("operation", itemIndex) as string;
    let params = {...this.getNode().parameters};
    delete params.operation;
    resolveParams(params,this,itemIndex);
    console.dir(params,{depth: null});
    let result = await client[operation+"Async"](params) as INodeExecutionData;
    
		console.dir(result,{depth: null});
		if(result[0].Status == "FAILURE"){
			throw {message: result[0]}
		}
		returnItems.push({json: result[0]});
    }

    return this.prepareOutputData(returnItems);
  }
}

function resolveParams(obj,node: IExecuteFunctions, index){
	for(const [key , _] of Object.entries(obj)){
				obj[key] = node.getNodeParameter(key,index);
  } 
}
