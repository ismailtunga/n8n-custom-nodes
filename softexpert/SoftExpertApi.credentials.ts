import {
	ICredentialType,
	NodePropertyTypes,
} from 'n8n-workflow';


export class SoftExpertApi implements ICredentialType {
	name = 'softExpertApi';
	displayName = 'Soft Expert Api';
	properties = [
		{
			displayName: 'Server',
			name: 'server',
			type: 'string' as NodePropertyTypes,
			default: '',
		},
		{
			displayName: 'User',
			name: 'user',
			type: 'string' as NodePropertyTypes,
			default: '',
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string' as NodePropertyTypes,
			default: '',
		},
	];
}
