import {
    ICredentialType,
    NodePropertyTypes,
} from 'n8n-workflow';

export class AbbyyFlexiCaptureApi implements ICredentialType {
    name = 'abbyyFlexiCaptureApi';
    displayName = 'Abbyy Flexi Capture Api';
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
            typeOptions: {
                password: true,
            },
            default: '',
        },
    ];
}