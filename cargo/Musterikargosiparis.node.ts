
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
import { IExecuteFunctions } from "n8n-core";
import {
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
} from "n8n-workflow";
import properties from "./musterikargosiparis_properties";
const soap = require('soap');
const path = require("path");

export class Musterikargosiparis implements INodeType {
  description: INodeTypeDescription = {
    displayName: "MNG Cargo Order",
    name: "musterikargosiparis",
    group: ["transform"],
    version: 1,
    icon: "file:mngkargo.png",
    description: "Consume MNG Cargo Order Service",
    defaults: {
      name: "MNG Cargo Order",
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

    let endpoint = "http://service2.mngkargo.com.tr/musterikargosiparis/musterikargosiparis.asmx";
    let client = await soap.createClientAsync(path.join(__dirname, "musterikargosiparis.xml"), {
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
        case "MusteriSiparisKayit": {
          if (credentials === undefined) throw new Error("No credentials got returned!");
          params = { ...params, kullaniciAdi: credentials.user, Sifre: credentials.password }
          break;
        }

        case "SiparisGirisiDetayli":
        case "SiparisGirisiDetayliV2":
        case "SiparisGirisiDetayliV3":
        case "SiparisGirisiDetayliV4":
        case "SiparisAliciKayit":
        case "FaturaSiparisListesi":
        case "FaturaSiparisListesiByTarih":
        case "MusteriSiparisIptal":
        case "WmsIadeGirisi":
        case "MusteriBayiBilgileri":
        case "TekBarkodGonderiIptali":
        case "MusteriTeslimatIptalIstegicase": {
          if (credentials === undefined) throw new Error("No credentials got returned!");
          params = { ...params, pKullaniciAdi: credentials.user, pSifre: credentials.password }
          break;
        }

        case "BayiIhbarGirisi": {
          if (credentials === undefined) throw new Error("No credentials got returned!");
          params = { ...params, pKullaniciAdi: credentials.user, pChMusteriSifre: credentials.password }
          break;
        }

        case "MngGonderiKgDesiUpdate": {
          if (credentials === undefined) throw new Error("No credentials got returned!");
          params = { ...params, pKullaniciAdi: credentials.user, pMusteriSifre: credentials.password }
          break;
        }

        case "KargoTakipByReferans": {
          if (credentials === undefined) throw new Error("No credentials got returned!");
          params = { ...params, pKullanici: credentials.user, pSifre: credentials.password }
          break;
        }

        case "SiparisUpdateParcastring":
        case "SiparisUpdateParcastringV2": {
          if (credentials === undefined) throw new Error("No credentials got returned!");
          params = { ...params, pKullaniciAd: credentials.user, pKullaniciSifre: credentials.password }
          break;
        }

        case "BayiAdresiGecersiz":
        case "KargoBilgileriByTarih":
        case "KargoBilgileriByReferans":
        case "MusteriOzelRapor": {
          if (credentials === undefined) throw new Error("No credentials got returned!");
          params = { ...params, pMusteriNo: credentials.user, pSifre: credentials.password }
          break;
        }

        case "MusteriBayiIslem": {
          if (credentials === undefined) throw new Error("No credentials got returned!");
          params = { ...params, pWsUsername: credentials.user, pWsPassword: credentials.password }
          break;
        }

        case "GonderiTeslimatProblemleri":
        case "GonderiTeslimatProblemiIadeYaniti": {
          if (credentials === undefined) throw new Error("No credentials got returned!");
          params = { ...params, pWsUserName: credentials.user, pWsPassword: credentials.password }
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