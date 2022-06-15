import {
	ICredentialType,
	NodePropertyTypes,
} from 'n8n-workflow';


export class BulutTahsilatApi implements ICredentialType {
	name = 'BulutTahsilatApi';
	displayName = 'Bulut Tahsilat Api';
	properties = [
		{
			displayName: 'Username',
			name: 'username',
			type: 'string' as NodePropertyTypes,
			default: '',
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string' as NodePropertyTypes,
			default: '',
			typeOptions: {
                password: true,
            },
		},
	];
}
