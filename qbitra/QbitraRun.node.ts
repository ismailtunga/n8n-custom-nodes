import { IExecuteFunctions } from "n8n-core";
import {
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
  ILoadOptionsFunctions,
  INodePropertyOptions,
} from "n8n-workflow";

interface IParameter {
  key: string;
  value: string;
}

interface IAdditional {
  environments: Array<IParameter>;
}

function urljoin(...strs: Array<string>) {
  return strs
    .map((str) => {
      let startSliceIndex = str.startsWith("/") ? 1 : 0;
      let endSliceIndex = str.endsWith("/") ? str.length - 1 : str.length;
      return str.slice(startSliceIndex, endSliceIndex);
    })
    .join("/");
}

export class QbitraRun implements INodeType {
  description: INodeTypeDescription = {
    displayName: "QBitra Run",
    name: "qbitraRun",
    group: ["transform"],
    version: 1,
    description: "Runs dynamic and static tasks, manages queues on  Qbitra Run",
    icon: "file:logo.png",
    defaults: {
      name: "Qbitra Run",
      color: "#772244",
    },
    inputs: ["main"],
    outputs: ["main"],
    credentials: [
      {
        name: "qbitraRunApi",
        required: true,
      },
    ],
    properties: [
      {
        displayName: "Operation",
        name: "operation",
        type: "options",
        default: "",
        placeholder: "Placeholder value",
        description: "The description text",
        options: [
          {
            name: "Run Task",
            value: "RUN_TASK",
          },
          {
            name: "Run Dynamic Task",
            value: "RUN_DYNAMIC_TASK",
          },
          {
            name: "Add Queue Item",
            value: "ADD_QUEUE_ITEM",
          },
        ],
      },
      {
        displayName: "Task",
        name: "taskId",
        type: "options",
        default: "",
        placeholder: "Placeholder value",
        description: "The description text",
        typeOptions: {
          loadOptionsMethod: "getTasks",
        },
        displayOptions: {
          show: {
            operation: ["RUN_TASK"],
          },
        },
      },
      {
        displayName: "Script",
        name: "scriptId",
        type: "options",
        default: "",
        placeholder: "Placeholder value",
        description: "The description text",
        typeOptions: {
          loadOptionsMethod: "getScripts",
        },
        displayOptions: {
          show: {
            operation: ["RUN_DYNAMIC_TASK"],
          },
        },
      },
      {
        displayName: "Agents",
        name: "agentsId",
        type: "multiOptions",
        default: "",
        placeholder: "Placeholder value",
        description: "The description text",
        typeOptions: {
          loadOptionsMethod: "getAgents",
        },
        displayOptions: {
          show: {
            operation: ["RUN_DYNAMIC_TASK"],
          },
        },
      },
      {
        displayName: "Screenshot on error",
        name: "screenshotOnError",
        type: "boolean",
        default: false,
        description: "Save screenshot on error",
        displayOptions: {
          show: {
            operation: ["RUN_DYNAMIC_TASK"],
          },
        },
      },
      {
        displayName: "User permission",
        name: "userPermission",
        type: "boolean",
        default: false,
        description: "User permission on run",
        displayOptions: {
          show: {
            operation: ["RUN_DYNAMIC_TASK"],
          },
        },
      },
      {
        displayName: "Retry on fail",
        name: "retryOnFail",
        type: "boolean",
        default: false,
        description: "Retry on fail",
        displayOptions: {
          show: {
            operation: ["RUN_DYNAMIC_TASK"],
          },
        },
      },
      {
        displayName: "Max retries",
        name: "maxRetries",
        type: "number",
        default: 1,
        description: "Max retries on fail",
        displayOptions: {
          show: {
            operation: ["RUN_DYNAMIC_TASK"],
          },
        },
      },
      {
        displayName: "Assets",
        name: "assets",
        type: "multiOptions",
        default: "",
        placeholder: "Placeholder value",
        description: "The description text",
        typeOptions: {
          loadOptionsMethod: "getAssets",
        },
        displayOptions: {
          show: {
            operation: ["RUN_DYNAMIC_TASK"],
          },
        },
      },
      {
        displayName: "Queue",
        name: "queueId",
        type: "options",
        default: "",
        placeholder: "Placeholder value",
        description: "The description text",
        typeOptions: {
          loadOptionsMethod: "getQueues",
        },
        displayOptions: {
          show: {
            operation: ["ADD_QUEUE_ITEM"],
          },
        },
      },
      {
        displayName: "Reference",
        name: "reference",
        type: "string",
        default: "",
        placeholder: "Placeholder value",
        description: "The description text",
        required: true,
        displayOptions: {
          show: {
            operation: ["ADD_QUEUE_ITEM"],
          },
        },
      },
      {
        displayName: "Priority",
        name: "priority",
        type: "options",
        default: "",
        placeholder: "Placeholder value",
        description: "The description text",
        options: [
          {
            name: "Low",
            value: "Low",
          },
          {
            name: "High",
            value: "High",
          },
        ],
        displayOptions: {
          show: {
            operation: ["ADD_QUEUE_ITEM"],
          },
        },
      },
      {
        displayName: "Data",
        name: "data",
        type: "json",
        default: "",
        placeholder: "Placeholder value",
        description: "The description text",
        displayOptions: {
          show: {
            operation: ["ADD_QUEUE_ITEM"],
          },
        },
      },
      {
        displayName: "Additional Info",
        name: "additional",
        placeholder: "Add Environment",
        type: "fixedCollection",
        typeOptions: {
          multipleValues: true,
        },
        description: "Environments",
        default: {},
        displayOptions: {
          show: {
            operation: ["RUN_TASK", "RUN_DYNAMIC_TASK"],
          },
        },
        options: [
          {
            name: "environments",
            displayName: "Environment",
            values: [
              {
                displayName: "Key",
                name: "key",
                type: "string",
                default: "",
                description: "Key of the parameter.",
              },
              {
                displayName: "Value",
                name: "value",
                type: "string",
                default: "",
                description: "Value of the parameter.",
              },
            ],
          },
        ],
      },
    ],
  };

  methods = {
    loadOptions: {
      async getTasks(
        this: ILoadOptionsFunctions
      ): Promise<INodePropertyOptions[]> {
        const returnData: INodePropertyOptions[] = [];

        const credentials = this.getCredentials("qbitraRunApi");

        if (credentials === undefined) {
          throw new Error("No credentials got returned!");
        }

        let clientId: string = credentials.clientId as string;
        let clientSecret: string = credentials.clientSecret as string;
        let apiURL: string = credentials.apiURL as string;

        let response = await this.helpers.request(urljoin(apiURL, "login"), {
          method: "POST",
          body: {
            ClientId: clientId,
            ClientSecret: clientSecret,
          },
          json: true,
        });
        let token: string = response.token;

        let tasks = await this.helpers.request(urljoin(apiURL, "task"), {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          json: true,
        });

        for (const task of tasks) {
          returnData.push({
            name: task.Name,
            value: task.Id,
          });
        }

        return returnData;
      },
      async getQueues(
        this: ILoadOptionsFunctions
      ): Promise<INodePropertyOptions[]> {
        const returnData: INodePropertyOptions[] = [];

        const credentials = this.getCredentials("qbitraRunApi");

        if (credentials === undefined) {
          throw new Error("No credentials got returned!");
        }

        let clientId: string = credentials.clientId as string;
        let clientSecret: string = credentials.clientSecret as string;
        let apiURL: string = credentials.apiURL as string;

        let response = await this.helpers.request(urljoin(apiURL, "login"), {
          method: "POST",
          body: {
            ClientId: clientId,
            ClientSecret: clientSecret,
          },
          json: true,
        });
        let token: string = response.token;

        let tasks = await this.helpers.request(urljoin(apiURL, "queue"), {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          json: true,
        });

        for (const task of tasks) {
          returnData.push({
            name: task.Name,
            value: task.Id,
          });
        }

        return returnData;
      },
      async getScripts(
        this: ILoadOptionsFunctions
      ): Promise<INodePropertyOptions[]> {
        const returnData: INodePropertyOptions[] = [];

        const credentials = this.getCredentials("qbitraRunApi");

        if (credentials === undefined) {
          throw new Error("No credentials got returned!");
        }

        let clientId: string = credentials.clientId as string;
        let clientSecret: string = credentials.clientSecret as string;
        let apiURL: string = credentials.apiURL as string;
        let response = await this.helpers.request(urljoin(apiURL, "login"), {
          method: "POST",
          body: {
            ClientId: clientId,
            ClientSecret: clientSecret,
          },
          json: true,
        });
        let token: string = response.token;

        let tasks = await this.helpers.request(urljoin(apiURL, "script"), {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          json: true,
        });

        for (const task of tasks) {
          returnData.push({
            name: task.Name,
            value: task.Id,
          });
        }

        return returnData;
      },
      async getAgents(
        this: ILoadOptionsFunctions
      ): Promise<INodePropertyOptions[]> {
        const returnData: INodePropertyOptions[] = [];

        const credentials = this.getCredentials("qbitraRunApi");

        if (credentials === undefined) {
          throw new Error("No credentials got returned!");
        }

        let clientId: string = credentials.clientId as string;
        let clientSecret: string = credentials.clientSecret as string;
        let apiURL: string = credentials.apiURL as string;
        let response = await this.helpers.request(urljoin(apiURL, "login"), {
          method: "POST",
          body: {
            ClientId: clientId,
            ClientSecret: clientSecret,
          },
          json: true,
        });
        let token: string = response.token;

        let tasks = await this.helpers.request(urljoin(apiURL, "agent"), {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          json: true,
        });

        for (const task of tasks) {
          returnData.push({
            name: task.Name,
            value: task.Id,
          });
        }

        return returnData;
      },
      async getAssets(
        this: ILoadOptionsFunctions
      ): Promise<INodePropertyOptions[]> {
        const returnData: INodePropertyOptions[] = [];

        const credentials = this.getCredentials("qbitraRunApi");

        if (credentials === undefined) {
          throw new Error("No credentials got returned!");
        }

        let clientId: string = credentials.clientId as string;
        let clientSecret: string = credentials.clientSecret as string;
        let apiURL: string = credentials.apiURL as string;
        let response = await this.helpers.request(urljoin(apiURL, "login"), {
          method: "POST",
          body: {
            ClientId: clientId,
            ClientSecret: clientSecret,
          },
          json: true,
        });
        let token: string = response.token;

        let assets = await this.helpers.request(urljoin(apiURL, "asset"), {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          json: true,
        });

        for (const asset of assets) {
          returnData.push({
            name: asset.Name,
            value: asset.Id,
          });
        }

        return returnData;
      },
    },
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();

    const credentials = this.getCredentials("qbitraRunApi");

    if (credentials === undefined) {
      throw new Error("No credentials got returned!");
    }

    let clientId: string = credentials.clientId as string;
    let clientSecret: string = credentials.clientSecret as string;
    let apiURL: string = credentials.apiURL as string;

    let response = await this.helpers.request(urljoin(apiURL, "/login"), {
      method: "POST",
      body: {
        ClientId: clientId,
        ClientSecret: clientSecret,
      },
      json: true,
    });

    let token: string = response.token;

    let operation: string;

    let taskId: string;
    let additional: IAdditional;

    let queueId: string;
    let reference: string;
    let priority: string;
    let data: object;

    let scriptId: string;
    let agentsId: string[];
    let screenshotOnError: boolean;
    let userPermission: boolean;
    let retryOnFail: boolean;
    let maxRetries: number;
    let assets: string[];

    let body: {
      [key: string]: any;
    } = {};

    for (let i = 0; i < items.length; i++) {
      operation = this.getNodeParameter("operation", i) as string;
      switch (operation) {
        case "RUN_TASK":
          taskId = this.getNodeParameter("taskId", i, "") as string;
          additional = this.getNodeParameter(
            "additional",
            i,
            {}
          ) as IAdditional;

          if (additional.environments) {
            for (const parameter of additional.environments) {
              body[parameter.key] = parameter.value;
            }
          }

          await this.helpers.request(urljoin(apiURL, `/task/${taskId}/run`), {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: body,
            json: true,
          });
          break;
        case "ADD_QUEUE_ITEM":
          queueId = this.getNodeParameter("queueId", i, "") as string;
          reference = this.getNodeParameter("reference", i, "") as string;
          priority = this.getNodeParameter("priority", i, "") as string;
          data = this.getNodeParameter("data", i) as object;
          await this.helpers.request(urljoin(apiURL, `/queue/${queueId}/item`), {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: {
              Reference: reference,
              Priority: priority,
              Data: JSON.stringify(data),
            },
            json: true,
          });
          break;
        case "RUN_DYNAMIC_TASK":
          body = {};

          scriptId = this.getNodeParameter("scriptId", i, "") as string;
          agentsId = this.getNodeParameter("agentsId", i, "") as string[];
          screenshotOnError = this.getNodeParameter("screenshotOnError", i, "") as boolean;
          userPermission = this.getNodeParameter("userPermission", i, "") as boolean;
          retryOnFail = this.getNodeParameter("retryOnFail", i, "") as boolean;
          maxRetries = this.getNodeParameter("maxRetries", i, "") as number;
          assets = this.getNodeParameter("assets", i, "") as string[];

          additional = this.getNodeParameter(
            "additional",
            i,
            {}
          ) as IAdditional;

          body['task.scriptId'] = scriptId;
          body['task.agents'] = agentsId.join(';');
          body['task.screenshotOnError'] = screenshotOnError
          body['task.userPermission'] = userPermission
          body['task.retryOnFail'] = retryOnFail
          body['task.maxRetries'] = maxRetries

          if (assets) {
            body['task.assets'] = assets.join(';');
          }

          if (additional.environments) {
            for (const parameter of additional.environments) {
              body[parameter.key] = parameter.value;
            }
          }

          await this.helpers.request(urljoin(apiURL, `/task/dynamic/run`), {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: body,
            json: true,
          });
          break;
      }
    }
    return this.prepareOutputData(items);

  }
}