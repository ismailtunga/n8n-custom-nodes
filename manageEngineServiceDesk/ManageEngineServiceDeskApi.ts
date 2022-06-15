
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
    return Object.entries(query).map( ([key , value]) => key+"="+encodeURI(value as string) ).join('&')
}

const defaults = {
    baseURL: "undefined",
    headers: {
        TECHNICIAN_KEY: ""
    }
}


async function add(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, body: any = {}, headers: any = {}, query: any = {},pathParameters: any ={}){
    const uri = urljoin(defaults.baseURL,`/api/v3/requests`+'?'+getQueryString(query))
    console.log(uri);
    const options: OptionsWithUri = {
		headers: {...defaults.headers, ...headers},
		method: "POST",
		uri,
		json: true
    };
    console.log(options);
    return await this.helpers.request(options);
}    


async function update(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, body: any = {}, headers: any = {}, query: any = {},pathParameters: any ={}){
    console.log(query);
    const uri = urljoin(defaults.baseURL,`/api/v3/requests/${pathParameters.request_id}`+'?'+getQueryString(query))
    console.log(uri);
    const options: OptionsWithUri = {
		headers: {...defaults.headers, ...headers},
		method: "PUT",
		body,
		uri,
		json: true
    };
    
    return await this.helpers.request(options);
}    


async function remove(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, body: any = {}, headers: any = {}, query: any = {},pathParameters: any ={}){
    const uri = urljoin(defaults.baseURL,`/api/v3/requests/${pathParameters.request_id}/move_to_trash`+'?'+getQueryString(query))
    console.log(uri);
    const options: OptionsWithUri = {
		headers: {...defaults.headers, ...headers},
		method: "DELETE",
		body,
		uri,
		json: true
    };
    
    return await this.helpers.request(options);
}    


async function get(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, body: any = {}, headers: any = {}, query: any = {},pathParameters: any ={}){
    const uri = urljoin(defaults.baseURL,`/api/v3/requests`+'?'+getQueryString(query))
    console.log(uri);
    const options: OptionsWithUri = {
		headers: {...defaults.headers, ...headers},
		method: "GET",
		body,
		uri,
		json: true
    };
    
    return await this.helpers.request(options);
}

async function getOne(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, body: any = {}, headers: any = {}, query: any = {},pathParameters: any ={}){
    const uri = urljoin(defaults.baseURL,`/api/v3/requests/${pathParameters.requestId}`+'?'+getQueryString(query))
    console.log(uri);
    const options: OptionsWithUri = {
		headers: {...defaults.headers, ...headers},
		method: "GET",
		body,
		uri,
		json: true
    };
    
    return await this.helpers.request(options);
}


export default {
    add , update , remove , get,getOne,defaults
}

    