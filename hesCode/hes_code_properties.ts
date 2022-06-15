import { INodeProperties } from "n8n-workflow";

const properties: INodeProperties[] = [
  {
    displayName: "code(s)",
    name: "codes",
    type: "string",
    default: "",
    placeholder: "",
    description: "place comma between (,) if multiple hes codes will be added",
    displayOptions: {
      show: {},
    },
    options: [],
  },
];
export default properties;
