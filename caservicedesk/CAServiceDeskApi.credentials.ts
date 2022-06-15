import { ICredentialType, NodePropertyTypes } from "n8n-workflow";

export class CAServiceDeskApi implements ICredentialType {
  name = "CAServiceDeskApi";
  displayName = "CA Service Desk Api";
  properties = [
    {
      displayName: "URL",
      name: "url",
      type: "string" as NodePropertyTypes,
      default: "",
    },
    {
      displayName: "Username",
      name: "username",
      type: "string" as NodePropertyTypes,
      default: "",
    },
    {
      displayName: "Password",
      name: "password",
      type: "string" as NodePropertyTypes,
      default: "",
      typeOptions: {
        password: true,
      },
    },
  ];
}
