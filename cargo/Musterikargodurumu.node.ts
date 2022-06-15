
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
import { IExecuteFunctions } from "n8n-core";
import {
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
} from "n8n-workflow";
import properties from "./musterikargodurumu_properties";
const soap = require('soap');
const path = require("path");

export class Musterikargodurumu implements INodeType {
  description: INodeTypeDescription = {
    displayName: "MNG Cargo Tracking",
    name: "musterikargodurumu",
    group: ["transform"],
    version: 1,
    icon: "file:mngkargo.png",
    description: "Consume MNG Cargo Tracking Service",
    defaults: {
      name: "MNG Cargo Tracking",
      color: "#772244",
    },
    credentials: [
      {
        name: "mngApi",
        required: true,
      },
    ],
    inputs: ["main"],
    outputs: ["main"],
    properties: properties
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();

    const credentials = this.getCredentials("mngApi");

    let endpoint = "http://service.mngkargo.com.tr/musterikargodurumu.service/musterikargodurumu.asmx";
    let client = await soap.createClientAsync(path.join(__dirname, "musterikargodurumu.xml"), {
      endpoint: endpoint
    });

    let operation: string;
    let returnItems: INodeExecutionData[] = [];
    for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
      operation = this.getNodeParameter("operation", itemIndex) as string;
      let params = { ...this.getNode().parameters };
      delete params.operation;
      resolveParams(params, this, itemIndex);

      switch (operation) {
        case "MusteriKargoTakipByFatura":
        case "MusteriKargoTakipBySiparis":
        case "MusteriKargoTakipByTopluFatura":
        case "MusteriKargoBilgiByTopluFatura":
        case "MusteriKargoTakipByIrsaliyeNo":
        case "MusteriKargoTakipByTarih":
        case "MusteriKargoTakipByBarkod":
        case "MusteriKargoBilgileriByBarkod":
        case "MusteriKargoBilgileri":
        case "MusteriAtfBilgileri":
        case "MusteriIadeKargoTakip":
        case "MusteriKargoBilgiFace":
        case "MusteriKargoTakipFace":
        case "KuryeCagirFace":
        case "MusteriHizmetleriFace":
        case "MusteriIadeKargoTakipByTarih":
        case "MusteriKargoTakipByParcaIcerikTakipNo":
        case "MusteriKargoBilgileriBySiparisNo":
        case "FaturaSiparisBilgiTz": {
          if (credentials === undefined) throw new Error("No credentials got returned!");
          params = { ...params, pMusteriNo: credentials.user, pSifre: credentials.password }
          break;
        }

        case "MusteriKargoTakipByBayino":
        case "GonderiSonDurumlari": {
          if (credentials === undefined) throw new Error("No credentials got returned!");
          params = { ...params, pKullaniciNo: credentials.user, pSifre: credentials.password }
          break;
        }

        case "MalBedelliGonderiKomisyonFaturaListesi":
        case "MalBedelliGonderiKomisyonFaturaDetay": {
          if (credentials === undefined) throw new Error("No credentials got returned!");
          params = { ...params, pKullaniciAdi: credentials.user, pKullaniciSifre: credentials.password }
          break;
        }
      }

      console.log(params);
      let result = await client[operation + "Async"](params) as INodeExecutionData;

      if (result[0].Status == "FAILURE") {
        throw { message: result[0] }
      }
      console.dir(result, { depth: null });
      returnItems.push({ json: result[0] });
    }

    return this.prepareOutputData(returnItems);
  }
}

function resolveParams(obj, node: IExecuteFunctions, index) {
  for (const [key, _] of Object.entries(obj)) {
    obj[key] = node.getNodeParameter(key, index);
  }
}
