import {
	IWebhookFunctions,
} from 'n8n-core';

import {
	IDataObject,
	INodeTypeDescription,
	INodeType,
	IWebhookResponseData,
} from 'n8n-workflow';


export class QbitraRunHook implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Qbitra Run Hook',
		name: 'qbitraRunHook',
		group: ['trigger'],
		version: 1,
		description: 'Trigger when a task finish',
		icon: 'file:logo.png',
		defaults: {
			name: 'I Task Hook',
			color: '#885577',
		},
		inputs: [],
		outputs: ['main'],
		webhooks: [
			{
				name: 'default',
				httpMethod: 'POST',
				reponseMode: 'onReceived',
				// Each webhook property can either be hardcoded
				// like the above ones or referenced from a parameter
				// like the "path" property bellow
				path: '={{$parameter["path"]}}',
			},
		],
		properties: [
			{
				displayName: 'Path',
				name: 'path',
				type: 'string',
				default: '',
				placeholder: '',
				required: true,
				description: 'The path to listen to',
			},
		],
	};


	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {

		// The data to return and so start the workflow with
		const returnData: IDataObject[] = [];
		returnData.push(
			{
				body: this.getBodyData(),
				headers: this.getHeaderData(),
				query: this.getQueryData(),
			}
		);

		return {
			workflowData: [
				this.helpers.returnJsonArray(returnData)
			],
		};

	}
}
