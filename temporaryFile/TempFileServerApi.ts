
import { OptionsWithUri } from 'request';
import {
	IExecuteFunctions,
	IHookFunctions,
	ILoadOptionsFunctions,
	IExecuteSingleFunctions,
} from 'n8n-core';

function urljoin(...strs: Array<string>) {
    return strs.filter(s => !!s)
        .map((str) => {
            let startSliceIndex = str.startsWith("/") ? 1 : 0;
            let endSliceIndex = str.endsWith("/") ? str.length - 1 : str.length;
            return str.slice(startSliceIndex, endSliceIndex);
        })
        .join("/");
}

function getQueryString(query: any = {}){
    return Object.entries(query).map( ([key , value]) => key+"="+value ).join('&')
}

const defaults = {
    baseURL: "https://gateway.qbitra.io/temp-file/",
    headers: {
        
    }
}


async function upload(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, body: any = {}, headers: any = {}, query: any = {},pathParameters: any ={}){
    const uri = urljoin(defaults.baseURL,`/file`+'?'+getQueryString(query))
    console.log(uri);
    const options: OptionsWithUri = {
		headers: {...defaults.headers, ...headers},
		method: "POST",
		body,
		uri,
		json: true
    };
    
    return await this.helpers.request(options);
}    


export default {
    upload,defaults
}

    