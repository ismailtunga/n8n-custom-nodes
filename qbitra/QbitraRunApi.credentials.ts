import {
	ICredentialType,
	NodePropertyTypes,
} from 'n8n-workflow';


export class QbitraRunApi implements ICredentialType {
	name = 'qbitraRunApi';
	displayName = 'Qbitra Run Api Credentials';
	properties = [
		{
			displayName: 'Api URL',
			name: 'apiURL',
			type: 'string' as NodePropertyTypes,
			default: 'https://gateway.qbitra.io/api',
		},
		{
			displayName: 'Client Id',
			name: 'clientId',
			type: 'string' as NodePropertyTypes,
			default: '',
		},
		{
			displayName: 'Client Secret',
			name: 'clientSecret',
			type: 'string' as NodePropertyTypes,
			default: '',
		},
	];
}
