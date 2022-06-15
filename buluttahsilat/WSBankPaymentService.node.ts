
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
import { IExecuteFunctions } from "n8n-core";
import {
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
} from "n8n-workflow";
import properties from "./WSBankPaymentService_properties" ;
const soap = require('soap');
const path = require("path"); 

export class WSBankPaymentService implements INodeType {
  description: INodeTypeDescription = {
    displayName: "Bulut Tahsilat",
    name: "Bulut Tahsilat",
    group: ["transform"],
    version: 1,
    icon: "file:buluttahsilat.png",
    description: "Consume Bulut Tahsilat Bank Payment Service",
    defaults: {
      name: "Bulut Tahsilat",
      color: "#772244",
	},
	credentials: [
		{
		  name: "BulutTahsilatApi",
		  required: true,
		},
	  ],
    inputs: ["main"],
    outputs: ["main"],
    properties:properties
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();


    const credentials = this.getCredentials("BulutTahsilatApi");

    if (credentials === undefined) {
      throw new Error("No credentials got returned!");
    }

    let username: string = credentials.username as string;
    let password: string = credentials.password as string;
    let client = await soap.createClientAsync(path.join(__dirname, "WSBankPaymentService.xml"));
    
	  
	let operation: string;
	let returnItems : INodeExecutionData[] = [];
    for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
		operation = this.getNodeParameter("operation", itemIndex) as string;
    let params = {...this.getNode().parameters};
    delete params.operation;
    params.userName =  username
    params.password = password  
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
