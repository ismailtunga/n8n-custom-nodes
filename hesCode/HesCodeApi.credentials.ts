import { ICredentialType, INodeProperties } from "n8n-workflow";

export class HesCodeApi implements ICredentialType {
  name = "hesCodeApi";
  displayName = "Hes Code API";
  properties: INodeProperties[] = [
    {
      displayName: "Username",
      name: "username",
      type: "string",
      default: "",
      placeholder: "",
      description: "",
      typeOptions: {
        loadOptionsMethod: "",
      },
      displayOptions: {
        show: {},
      },
      options: [],
    },
    {
      displayName: "Password",
      name: "password",
      type: "string",
      default: "",
      placeholder: "",
      description: "",
      typeOptions: {
        password: true,
      },
      displayOptions: {
        show: {},
      },
      options: [],
    },
    {
      options: [],
      displayName: "Url",
      name: "url",
      type: "string",
      default: "https://hesservis.turkiye.gov.tr/services/g2g/saglik/hes",
      placeholder: "",
      description: "The service to respond",
      typeOptions: {
        loadOptionsMethod: "",
      },
      displayOptions: {
        show: {},
      },
    },
  ];
}
