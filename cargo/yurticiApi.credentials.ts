import {
    ICredentialType,
    NodePropertyTypes,
} from 'n8n-workflow';

export class yurticiApi implements ICredentialType {
    name = 'yurticiApi';
    displayName = 'Yurtiçi Kargo';
    properties = [
        {
            displayName: 'WS Username',
            name: 'user',
            type: 'string' as NodePropertyTypes,
            default: '',
        },
        {
            displayName: 'WS Password',
            name: 'password',
            type: 'string' as NodePropertyTypes,
            typeOptions: {
                password: true
            },
            default: '',
        },
    ];
}