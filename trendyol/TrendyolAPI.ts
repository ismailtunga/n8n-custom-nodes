
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
    baseURL: "https://api.trendyol.com/sapigw/",
    headers: {
        
    }
}


async function getBrands(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, body: any = {}, headers: any = {}, query: any = {},pathParameters: any ={}){
    const uri = urljoin(defaults.baseURL,`/brands`+'?'+getQueryString(query))
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


async function productCategories(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, body: any = {}, headers: any = {}, query: any = {},pathParameters: any ={}){
    const uri = urljoin(defaults.baseURL,`/product-categories`+'?'+getQueryString(query))
    console.log(uri);
    const options: OptionsWithUri = {
		headers: {...defaults.headers, ...headers},
		method: "GET",
		body,
		uri,
    json: true,
    
    };
    
    return await this.helpers.request(options);
}    


async function getShipmentProviders(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, body: any = {}, headers: any = {}, query: any = {},pathParameters: any ={}){
    const uri = urljoin(defaults.baseURL,`/shipment-providers`+'?'+getQueryString(query))
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


async function getCategoryAttributes(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, body: any = {}, headers: any = {}, query: any = {},pathParameters: any ={}){
    const uri = urljoin(defaults.baseURL,`/product-categories/${pathParameters.categoriId}/attributes`+'?'+getQueryString(query))
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


async function createProduct(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, body: any = {}, headers: any = {}, query: any = {},pathParameters: any ={}){
    const uri = urljoin(defaults.baseURL,`/suppliers/${pathParameters.supplierid}/v2/products`+'?'+getQueryString(query))
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


async function updateProduct(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, body: any = {}, headers: any = {}, query: any = {},pathParameters: any ={}){
    const uri = urljoin(defaults.baseURL,`/suppliers/${pathParameters.supplierId}/v2/products`+'?'+getQueryString(query))
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


async function priceAndInventoryUpdate(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, body: any = {}, headers: any = {}, query: any = {},pathParameters: any ={}){
    const uri = urljoin(defaults.baseURL,`/suppliers/${pathParameters.supplierid}/products/price-and-inventory`+'?'+getQueryString(query))
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


async function filterProducts(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, body: any = {}, headers: any = {}, query: any = {},pathParameters: any ={}){
    const uri = urljoin(defaults.baseURL,`suppliers/{supplierId}/products`+'?'+getQueryString(query))
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


async function getBatchRequest(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, body: any = {}, headers: any = {}, query: any = {},pathParameters: any ={}){
    const uri = urljoin(defaults.baseURL,`/suppliers/${pathParameters.supplierid}/products/batch-requests/${pathParameters.batchRequestId}`+'?'+getQueryString(query))
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
    getBrands , productCategories , getShipmentProviders , getCategoryAttributes , createProduct , updateProduct , priceAndInventoryUpdate , filterProducts , getBatchRequest,defaults
}

    