
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
import { IExecuteFunctions } from "n8n-core";
import {
  IDataObject,
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
  ILoadOptionsFunctions,
  INodePropertyOptions
} from "n8n-workflow";
import properties from "./AbbyyFlexiCapture_properties";
const soap = require('soap');
const path = require("path");

export class AbbyyFlexiCapture implements INodeType {
  description: INodeTypeDescription = {
    displayName: "Abbyy Flexi Capture",
    name: "abbyyFlexiCapture",
    group: ["transform"],
    version: 1,
    icon: "file:abbyy_flexicapture_logo.png",
    description: "Consume Abbyy Flexi Capture Service",
    defaults: {
      name: "Abbyy Flexi Capture",
      color: "#772244",
    },
    credentials: [
      {
        name: "abbyyFlexiCaptureApi",
        required: true,
      },
    ],
    inputs: ["main"],
    outputs: ["main"],
    properties: properties
  };

  methods = {
    loadOptions: {
      async getProjects(
        this: ILoadOptionsFunctions
      ): Promise<INodePropertyOptions[]> {
        const returnData: INodePropertyOptions[] = [];

        const credentials = this.getCredentials("abbyyFlexiCaptureApi");

        if (credentials === undefined) {
          throw new Error("No credentials got returned!");
        }

        let user: string = credentials.user as string;
        let password: string = credentials.password as string;
        let server: string = credentials.server as string;
        server = server.endsWith("/") ? server.slice(0, -1) : server;
        let endpoint = "{SERVER}/FlexiCapture12/Server/API/v1/Soap".replace("{SERVER}", server);

        let client = await soap.createClientAsync(path.join(__dirname, "abbyy-wsdl.xml"), {
          endpoint: endpoint
        });

        client.setSecurity(new soap.BasicAuthSecurity(user, password));

        let projects = (await client.GetProjectsAsync())[0].projects.Project

        for (const project of projects) {
          returnData.push({
            name: project.Name,
            value: project.Name,
          });
        }

        return returnData;
      }
    }
  }

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();
    const credentials = this.getCredentials("abbyyFlexiCaptureApi");

    if (credentials === undefined) {
      throw new Error("No credentials got returned!");
    }

    let user: string = credentials.user as string;
    let password: string = credentials.password as string;
    let server: string = credentials.server as string;
    server = server.endsWith("/") ? server.slice(0, -1) : server;
    let endpoint = "{SERVER}/FlexiCapture12/Server/API/v1/Soap".replace("{SERVER}", server);

    let client = await soap.createClientAsync(path.join(__dirname, "abbyy-wsdl.xml"), {
      endpoint: endpoint
    });

    client.setSecurity(new soap.BasicAuthSecurity(user, password));

    let operation: string;
    let returnItems: INodeExecutionData[] = [];
    for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
      operation = this.getNodeParameter("operation", itemIndex) as string;
      let params = { ...this.getNode().parameters };
      delete params.operation;
      resolveParams(params, this, itemIndex);

      let result = operation === "ReadDocument" ? await readDocument(client, params, this.helpers) : await runOperation(client, params, operation)
      console.dir(result, { depth: null });
      returnItems.push({ json: result });
    }

    return this.prepareOutputData(returnItems)
  }
}

async function readDocument(client, params, helpers) {
  let sessionId = 0
  let batchId = 0
  let projectId = 0

  try {
    let userName = (await client.GetCurrentUserIdentityAsync())[0].userIdentity
    let userId = (await client.FindUserAsync({ userLogin: userName.Name }))[0].userId

    sessionId = (await client.OpenSessionAsync({ roleType: 11, stationType: 10 }))[0].sessionId

    projectId = (await client.OpenProjectAsync({ sessionId: sessionId, projectNameOrGuid: params.projectName }))[0].projectId

    let batchObj = { Id: 0, Name: createUUID(), ProjectId: 0, BatchTypeId: 0, Priority: 0, Description: null, HasAttachments: false, Properties: null, CreationDate: 0, DocumentsCount: 0, PagesCount: 0, RecognizedSymbolsCount: 0, VerificationSymbolsCount: 0, UncertainSymbolsCount: 0, AssembledDocumentsCount: 0, RecognizedDocumentsCount: 0, VerifiedDocumentsCount: 0, ExportedDocumentsCount: 0, StageExternalId: 0, ErrorText: null, OwnerId: 0, CreatorId: 0, SLAStartDate: 0, SLAExpirationDate: 0, ElapsedProcessingSeconds: 0 }
    batchId = (await client.AddNewBatchAsync({ sessionId: sessionId, projectId: projectId, batch: batchObj, ownerId: userId }))[0].batchId
    await client.OpenBatchAsync({ sessionId: sessionId, batchId: batchId })

    let file = params.fileFrom === "FromUrl" ? await downloadFile(params.fileUrl, helpers) : await loadFile(params.filePath)
    await client.AddNewImageAsync({
      sessionId: sessionId, batchId: batchId, file: {
        Name: createUUID(),
        Bytes: file
      }
    })
    await client.CloseBatchAsync({ sessionId: sessionId, batchId: batchId })

    await client.ProcessBatchAsync({ sessionId: sessionId, batchId: batchId })

    let completed = 0
    while (completed < 100) {
      completed = (await client.GetBatchPercentCompletedAsync({ batchId: batchId }))[0].result
      console.log(`%${completed} completed`)
      await sleep(1000)
    }

    let documents = (await client.GetDocumentsAsync({ sessionId: sessionId, batchId: batchId }))[0].documents.Document
    for (const document of documents) {
      if (document.Id === 0) continue

      let attachedFile = (await client.LoadDocumentResultAsync({ sessionId: sessionId, batchId: batchId, documentId: document.Id, fileName: "Result.json" }))[0].file
      if (attachedFile.Bytes === null) continue;

      let resultJson = await jsonFromBytes(attachedFile.Bytes)
      // let result = (params.resultTo === "Json" ? resultJson : await sendData(params.webhookUrl, resultJson, helpers)) as IDataObject

      await close(client, sessionId, batchId, projectId)

      return resultJson as IDataObject
    }
  } catch (error) {
    await close(client, sessionId, batchId, projectId)
    throw error
  }
}

async function runOperation(client, params, operation) {
  return (await client[operation + "Async"](params) as INodeExecutionData)[0]
}

function resolveParams(obj, node: IExecuteFunctions, index) {
  for (const [key, _] of Object.entries(obj)) {
    obj[key] = node.getNodeParameter(key, index);
  }
}

function createUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

async function downloadFile(url, helpers) {
  let result = await helpers.request({
    method: "GET",
    uri: url,
    encoding: null
  })

  return result.toString('base64');
}

async function loadFile(path) {
  const fs = require('fs').promises
  return await fs.readFile(path, { encoding: 'base64' })
}

async function jsonFromBytes(bytes) {
  return new Promise((resolve, reject) => {
    try {
      let buffer = Buffer.from(bytes, 'base64')
      let jsonString = buffer.toString('utf8').trim()
      resolve(JSON.parse(jsonString))
    } catch (error) {
      return reject(error)
    }
  })
}

async function sendData(url, resultJson, helpers) {
  return await helpers.request({
    method: "POST",
    uri: url,
    json: true,
    body: resultJson
  })
}

async function close(client, sessionId, batchId, projectId) {
  if (sessionId > 0 && batchId > 0) await client.DeleteBatchAsync({ sessionId: sessionId, batchId: batchId })
  if (sessionId > 0 && projectId > 0) await client.CloseProjectAsync({ sessionId: sessionId, projectId: projectId })
  if (sessionId > 0) await client.CloseSessionAsync({ sessionId: sessionId })
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}