
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
import { IExecuteFunctions } from "n8n-core";
import {
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
} from "n8n-workflow";
import properties from "./forms_properties" ;
const soap = require('soap');
const path = require("path"); 

export class SoftExpertForms implements INodeType {
  description: INodeTypeDescription = {
    displayName: "SoftExpert Forms",
    name: "softExpertForms",
    group: ["transform"],
    version: 1,
    icon: "file:forms.png",
    description: "Consume SoftExpert Forms Service",
    defaults: {
      name: "SoftExpert Forms",
      color: "#772244",
	},
	credentials: [
		{
		  name: "softExpertApi",
		  required: true,
		},
	  ],
    inputs: ["main"],
    outputs: ["main"],
    properties:properties
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();


    const credentials = this.getCredentials("softExpertApi");

    if (credentials === undefined) {
      throw new Error("No credentials got returned!");
    }

    let user: string = credentials.user as string;
    let password: string = credentials.password as string;
    let server: string = credentials.server as string;
    server = server.endsWith("/") ? server.slice(0,-1) : server;
    let endpoint = "SERVER/softexpert/webserviceproxy/se/ws/fm_ws.php".replace("SERVER",server);
    let client = await soap.createClientAsync(path.join(__dirname, "forms.xml"),{
      endpoint: endpoint
    });
    client.setSecurity(new soap.BasicAuthSecurity(user,password));
	  
	let operation: string;
	let returnItems : INodeExecutionData[] = [];
    for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
		operation = this.getNodeParameter("operation", itemIndex) as string;
    let params = {...this.getNode().parameters};
    delete params.operation;
    resolveParams(params,this,itemIndex);
    console.log(params);
    let result = await client[operation+"Async"](params) as INodeExecutionData;
		
		if(result[0].Status == "FAILURE"){
			throw {message: result[0]}
		}
		console.dir(result,{depth: null});
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
