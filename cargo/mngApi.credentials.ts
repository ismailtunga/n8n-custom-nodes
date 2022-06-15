import {
    ICredentialType,
    NodePropertyTypes,
} from 'n8n-workflow';

export class mngApi implements ICredentialType {
    name = 'mngApi';
    displayName = 'MNG Kargo';
    properties = [
        {
            displayName: 'Müşteri No',
            name: 'user',
            type: 'string' as NodePropertyTypes,
            default: '',
        },
        {
            displayName: 'Şifre',
            name: 'password',
            type: 'string' as NodePropertyTypes,
            typeOptions: {
                password: true
            },
            default: '',
        },
    ];
}