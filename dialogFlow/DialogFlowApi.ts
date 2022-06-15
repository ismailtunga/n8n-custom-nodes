
import { OptionsWithUri } from 'request';
import {
	IExecuteFunctions,
	IHookFunctions,
	ILoadOptionsFunctions,
	IExecuteSingleFunctions,
} from 'n8n-core';

async function query(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, body: any = {}, headers: any = {}){
    const options: OptionsWithUri = {
		headers: {
			'Authorization': 'Bearer 327a284745da4d1b89c4a88d8f1c7c43'
		},
		method: "POST",
		body,
		uri: "https://api.dialogflow.com/v1/query?v=20150910",
		json: true
    };
    
    return await this.helpers.request(options);
}    


export default {
    query
}
    