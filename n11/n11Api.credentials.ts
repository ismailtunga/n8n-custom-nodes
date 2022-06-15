import {
    ICredentialType,
    NodePropertyTypes,
} from 'n8n-workflow';

export class n11Api implements ICredentialType {
    name = 'n11Api';
    displayName = 'n11 Api';
    properties = [
        {
            displayName: 'Server',
            name: 'server',
            type: 'string' as NodePropertyTypes,
            default: 'https://api.n11.com/ws',
        },
        {
            displayName: 'App Key',
            name: 'user',
            type: 'string' as NodePropertyTypes,
            default: '',
        },
        {
            displayName: 'App Secret',
            name: 'password',
            type: 'string' as NodePropertyTypes,
            typeOptions: {
                password: true
            },
            default: '',
        },
    ];
}
