
import {
	INodeProperties
} from "n8n-workflow";

const properties: INodeProperties[] =
	[
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"default": "",
			"options": [
				{
					"name": "baglanti_test",
					"value": "Baglanti_Test"
				},
				{
					"name": "musteri siparis kayit",
					"value": "MusteriSiparisKayit"
				},
				{
					"name": "siparis girisi detayli",
					"value": "SiparisGirisiDetayli"
				},
				{
					"name": "siparis girisi detayli v2",
					"value": "SiparisGirisiDetayliV2"
				},
				{
					"name": "siparis girisi detayli v3",
					"value": "SiparisGirisiDetayliV3"
				},
				{
					"name": "siparis girisi detayli v4",
					"value": "SiparisGirisiDetayliV4"
				},
				{
					"name": "siparis alici kayit",
					"value": "SiparisAliciKayit"
				},
				{
					"name": "fatura siparis listesi",
					"value": "FaturaSiparisListesi"
				},
				{
					"name": "fatura siparis listesi by tarih",
					"value": "FaturaSiparisListesiByTarih"
				},
				{
					"name": "musteri siparis iptal",
					"value": "MusteriSiparisIptal"
				},
				{
					"name": "wms iade girisi",
					"value": "WmsIadeGirisi"
				},
				{
					"name": "siparis update parcastring",
					"value": "SiparisUpdateParcastring"
				},
				{
					"name": "siparis update parcastring v2",
					"value": "SiparisUpdateParcastringV2"
				},
				{
					"name": "bayi adresi gecersiz",
					"value": "BayiAdresiGecersiz"
				},
				{
					"name": "bayi ihbar girisi",
					"value": "BayiIhbarGirisi"
				},
				{
					"name": "musteri bayi bilgileri",
					"value": "MusteriBayiBilgileri"
				},
				{
					"name": "musteri bayi islem",
					"value": "MusteriBayiIslem"
				},
				{
					"name": "kargo bilgileri by tarih",
					"value": "KargoBilgileriByTarih"
				},
				{
					"name": "kargo bilgileri by referans",
					"value": "KargoBilgileriByReferans"
				},
				{
					"name": "mng gonderi kg desi update",
					"value": "MngGonderiKgDesiUpdate"
				},
				{
					"name": "gonderi teslimat problemleri",
					"value": "GonderiTeslimatProblemleri"
				},
				{
					"name": "gonderi teslimat problemi iade yaniti",
					"value": "GonderiTeslimatProblemiIadeYaniti"
				},
				{
					"name": "musteri ozel rapor",
					"value": "MusteriOzelRapor"
				},
				{
					"name": "mng gonderi barkod",
					"value": "MNGGonderiBarkod"
				},
				{
					"name": "tek barkod gonderi iptali",
					"value": "TekBarkodGonderiIptali"
				},
				{
					"name": "kargo takip by referans",
					"value": "KargoTakipByReferans"
				},
				{
					"name": "musteri teslimat iptal istegi",
					"value": "MusteriTeslimatIptalIstegi"
				}
			],
			"placeholder": "Placeholder value",
			"description": "The description text"
		},
		{
			"displayName": "p ch irsaliye no",
			"name": "pChIrsaliyeNo",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriSiparisKayit",
						"SiparisGirisiDetayli",
						"SiparisGirisiDetayliV2",
						"SiparisGirisiDetayliV3",
						"SiparisGirisiDetayliV4",
						"BayiIhbarGirisi"
					]
				}
			}
		},
		{
			"displayName": "p pr kiymet",
			"name": "pPrKiymet",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriSiparisKayit",
						"SiparisGirisiDetayli",
						"SiparisGirisiDetayliV2",
						"SiparisGirisiDetayliV3",
						"SiparisGirisiDetayliV4"
					]
				}
			}
		},
		{
			"displayName": "p ch barkod",
			"name": "pChBarkod",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriSiparisKayit",
						"SiparisGirisiDetayli",
						"SiparisGirisiDetayliV2",
						"SiparisGirisiDetayliV3",
						"SiparisGirisiDetayliV4"
					]
				}
			}
		},
		{
			"displayName": "p ch icerik",
			"name": "pChIcerik",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriSiparisKayit",
						"SiparisGirisiDetayli",
						"SiparisGirisiDetayliV2",
						"SiparisGirisiDetayliV3",
						"SiparisGirisiDetayliV4",
						"BayiIhbarGirisi"
					]
				}
			}
		},
		{
			"displayName": "p fl al sms",
			"name": "pFlAlSms",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriSiparisKayit",
						"SiparisGirisiDetayli",
						"SiparisGirisiDetayliV2",
						"SiparisGirisiDetayliV3",
						"SiparisGirisiDetayliV4"
					]
				}
			}
		},
		{
			"displayName": "p fl gn sms",
			"name": "pFlGnSms",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriSiparisKayit",
						"SiparisGirisiDetayli",
						"SiparisGirisiDetayliV2",
						"SiparisGirisiDetayliV3",
						"SiparisGirisiDetayliV4"
					]
				}
			}
		},
		{
			"displayName": "p kargo parca list",
			"name": "pKargoParcaList",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriSiparisKayit",
						"SiparisGirisiDetayli",
						"SiparisGirisiDetayliV2",
						"SiparisGirisiDetayliV3",
						"SiparisGirisiDetayliV4",
						"SiparisUpdateParcastring",
						"SiparisUpdateParcastringV2",
						"BayiIhbarGirisi"
					]
				}
			}
		},
		{
			"displayName": "p alici musteri no",
			"name": "pAliciMusteriNo",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriSiparisKayit"
					]
				}
			}
		},
		{
			"displayName": "p alici musteri adi",
			"name": "pAliciMusteriAdi",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriSiparisKayit",
						"SiparisGirisiDetayli",
						"SiparisGirisiDetayliV2",
						"SiparisGirisiDetayliV3",
						"SiparisGirisiDetayliV4",
						"SiparisAliciKayit"
					]
				}
			}
		},
		{
			"displayName": "p ch siparis no",
			"name": "pChSiparisNo",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriSiparisKayit",
						"SiparisGirisiDetayli",
						"SiparisGirisiDetayliV2",
						"SiparisGirisiDetayliV3",
						"SiparisGirisiDetayliV4",
						"BayiIhbarGirisi",
						"TekBarkodGonderiIptali"
					]
				}
			}
		},
		{
			"displayName": "p lu odeme sekli",
			"name": "pLuOdemeSekli",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriSiparisKayit",
						"SiparisGirisiDetayli",
						"SiparisGirisiDetayliV2",
						"SiparisGirisiDetayliV3",
						"SiparisGirisiDetayliV4",
						"BayiIhbarGirisi"
					]
				}
			}
		},
		{
			"displayName": "p fl adres farkli",
			"name": "pFlAdresFarkli",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriSiparisKayit",
						"SiparisGirisiDetayli",
						"SiparisGirisiDetayliV2",
						"SiparisGirisiDetayliV3",
						"SiparisGirisiDetayliV4"
					]
				}
			}
		},
		{
			"displayName": "p ch il",
			"name": "pChIl",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriSiparisKayit",
						"SiparisGirisiDetayli",
						"SiparisGirisiDetayliV2",
						"SiparisGirisiDetayliV3",
						"SiparisGirisiDetayliV4",
						"SiparisAliciKayit",
						"MusteriBayiBilgileri"
					]
				}
			}
		},
		{
			"displayName": "p ch ilce",
			"name": "pChIlce",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriSiparisKayit",
						"SiparisGirisiDetayli",
						"SiparisGirisiDetayliV2",
						"SiparisGirisiDetayliV3",
						"SiparisGirisiDetayliV4",
						"SiparisAliciKayit",
						"MusteriBayiBilgileri"
					]
				}
			}
		},
		{
			"displayName": "p ch adres",
			"name": "pChAdres",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriSiparisKayit",
						"SiparisGirisiDetayli",
						"SiparisGirisiDetayliV2",
						"SiparisGirisiDetayliV3",
						"SiparisGirisiDetayliV4",
						"SiparisAliciKayit"
					]
				}
			}
		},
		{
			"displayName": "p alici musteri mng no",
			"name": "pAliciMusteriMngNo",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"SiparisGirisiDetayli",
						"SiparisGirisiDetayliV2",
						"SiparisGirisiDetayliV3",
						"SiparisGirisiDetayliV4"
					]
				}
			}
		},
		{
			"displayName": "p alici musteri bayi no",
			"name": "pAliciMusteriBayiNo",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"SiparisGirisiDetayli",
						"SiparisGirisiDetayliV2",
						"SiparisGirisiDetayliV3",
						"SiparisGirisiDetayliV4",
						"SiparisAliciKayit"
					]
				}
			}
		},
		{
			"displayName": "p ch semt",
			"name": "pChSemt",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"SiparisGirisiDetayli",
						"SiparisGirisiDetayliV2",
						"SiparisGirisiDetayliV3",
						"SiparisGirisiDetayliV4"
					]
				}
			}
		},
		{
			"displayName": "p ch mahalle",
			"name": "pChMahalle",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"SiparisGirisiDetayli",
						"SiparisGirisiDetayliV2",
						"SiparisGirisiDetayliV3",
						"SiparisGirisiDetayliV4"
					]
				}
			}
		},
		{
			"displayName": "p ch meydan bulvar",
			"name": "pChMeydanBulvar",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"SiparisGirisiDetayli",
						"SiparisGirisiDetayliV2",
						"SiparisGirisiDetayliV3",
						"SiparisGirisiDetayliV4"
					]
				}
			}
		},
		{
			"displayName": "p ch cadde",
			"name": "pChCadde",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"SiparisGirisiDetayli",
						"SiparisGirisiDetayliV2",
						"SiparisGirisiDetayliV3",
						"SiparisGirisiDetayliV4"
					]
				}
			}
		},
		{
			"displayName": "p ch sokak",
			"name": "pChSokak",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"SiparisGirisiDetayli",
						"SiparisGirisiDetayliV2",
						"SiparisGirisiDetayliV3",
						"SiparisGirisiDetayliV4"
					]
				}
			}
		},
		{
			"displayName": "p ch tel is",
			"name": "pChTelIs",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"SiparisGirisiDetayli",
						"SiparisGirisiDetayliV2",
						"SiparisGirisiDetayliV3",
						"SiparisGirisiDetayliV4",
						"SiparisAliciKayit",
						"MusteriBayiBilgileri"
					]
				}
			}
		},
		{
			"displayName": "p ch fax",
			"name": "pChFax",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"SiparisGirisiDetayli",
						"SiparisGirisiDetayliV2",
						"SiparisGirisiDetayliV3",
						"SiparisGirisiDetayliV4",
						"MusteriBayiBilgileri"
					]
				}
			}
		},
		{
			"displayName": "p ch email",
			"name": "pChEmail",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"SiparisGirisiDetayli",
						"SiparisGirisiDetayliV2",
						"SiparisGirisiDetayliV3",
						"SiparisGirisiDetayliV4",
						"SiparisAliciKayit"
					]
				}
			}
		},
		{
			"displayName": "p ch vergi dairesi",
			"name": "pChVergiDairesi",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"SiparisGirisiDetayli",
						"SiparisGirisiDetayliV2",
						"SiparisGirisiDetayliV3",
						"SiparisGirisiDetayliV4",
						"SiparisAliciKayit",
						"MusteriBayiBilgileri"
					]
				}
			}
		},
		{
			"displayName": "p ch vergi numarasi",
			"name": "pChVergiNumarasi",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"SiparisGirisiDetayli",
						"SiparisGirisiDetayliV2",
						"SiparisGirisiDetayliV3",
						"SiparisGirisiDetayliV4",
						"SiparisAliciKayit"
					]
				}
			}
		},
		{
			"displayName": "p fl kapida odeme",
			"name": "pFlKapidaOdeme",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"SiparisGirisiDetayli",
						"SiparisGirisiDetayliV2",
						"SiparisGirisiDetayliV3",
						"SiparisGirisiDetayliV4"
					]
				}
			}
		},
		{
			"displayName": "p ch tel ev",
			"name": "pChTelEv",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"SiparisGirisiDetayliV2",
						"SiparisGirisiDetayliV3",
						"SiparisGirisiDetayliV4",
						"SiparisAliciKayit"
					]
				}
			}
		},
		{
			"displayName": "p ch tel cep",
			"name": "pChTelCep",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"SiparisGirisiDetayliV2",
						"SiparisGirisiDetayliV3",
						"SiparisGirisiDetayliV4",
						"SiparisAliciKayit"
					]
				}
			}
		},
		{
			"displayName": "p gonderi hizmet sekli",
			"name": "pGonderiHizmetSekli",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"SiparisGirisiDetayliV3",
						"SiparisGirisiDetayliV4"
					]
				}
			}
		},
		{
			"displayName": "p teslim sekli",
			"name": "pTeslimSekli",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"SiparisGirisiDetayliV3",
						"SiparisGirisiDetayliV4"
					]
				}
			}
		},
		{
			"displayName": "p mal bedeli odeme sekli",
			"name": "pMalBedeliOdemeSekli",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"SiparisGirisiDetayliV3",
						"SiparisGirisiDetayliV4"
					]
				}
			}
		},
		{
			"displayName": "p platform kisa adi",
			"name": "pPlatformKisaAdi",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"SiparisGirisiDetayliV3",
						"SiparisGirisiDetayliV4"
					]
				}
			}
		},
		{
			"displayName": "p platform satis kodu",
			"name": "pPlatformSatisKodu",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"SiparisGirisiDetayliV3",
						"SiparisGirisiDetayliV4"
					]
				}
			}
		},
		{
			"displayName": "p kargo parca referans list",
			"name": "pKargoParcaReferansList",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"SiparisGirisiDetayliV4"
					]
				}
			}
		},
		{
			"displayName": "p siparis no",
			"name": "pSiparisNo",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"FaturaSiparisListesi",
						"WmsIadeGirisi",
						"SiparisUpdateParcastring",
						"SiparisUpdateParcastringV2",
						"KargoBilgileriByReferans"
					]
				}
			}
		},
		{
			"displayName": "p siparis tarih",
			"name": "pSiparisTarih",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"FaturaSiparisListesiByTarih"
					]
				}
			}
		},
		{
			"displayName": "p musteri siparis no",
			"name": "pMusteriSiparisNo",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriSiparisIptal",
						"MngGonderiKgDesiUpdate",
						"MusteriTeslimatIptalIstegi"
					]
				}
			}
		},
		{
			"displayName": "p siparis tarihi",
			"name": "pSiparisTarihi",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriSiparisIptal"
					]
				}
			}
		},
		{
			"displayName": "p siparis no iade",
			"name": "pSiparisNoIade",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"WmsIadeGirisi"
					]
				}
			}
		},
		{
			"displayName": "p irsaliye no",
			"name": "pIrsaliyeNo",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"SiparisUpdateParcastring",
						"SiparisUpdateParcastringV2",
						"KargoBilgileriByReferans",
						"MngGonderiKgDesiUpdate"
					]
				}
			}
		},
		{
			"displayName": "p fl kapida tahsilat",
			"name": "pFlKapidaTahsilat",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"SiparisUpdateParcastringV2"
					]
				}
			}
		},
		{
			"displayName": "p urun bedeli",
			"name": "pUrunBedeli",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"SiparisUpdateParcastringV2"
					]
				}
			}
		},
		{
			"displayName": "p bayi no",
			"name": "pBayiNo",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"BayiAdresiGecersiz",
						"MusteriBayiBilgileri"
					]
				}
			}
		},
		{
			"displayName": "p bayi kodu",
			"name": "pBayiKodu",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"BayiIhbarGirisi"
					]
				}
			}
		},
		{
			"displayName": "p ch firma adi",
			"name": "pChFirmaAdi",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriBayiBilgileri"
					]
				}
			}
		},
		{
			"displayName": "p tx adres",
			"name": "pTxAdres",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriBayiBilgileri"
					]
				}
			}
		},
		{
			"displayName": "p ch vergi no",
			"name": "pChVergiNo",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriBayiBilgileri"
					]
				}
			}
		},
		{
			"displayName": "p em email",
			"name": "pEmEmail",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriBayiBilgileri"
					]
				}
			}
		},
		{
			"displayName": "p musteri bayi info",
			"name": "pMusteriBayiInfo",
			"type": "collection",
			"default": {},
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriBayiIslem"
					]
				}
			},
			"options": [
				{
					"displayName": "mng musteri no",
					"name": "MngMusteriNo",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "bayi referans id",
					"name": "BayiReferansId",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "bayi firma adi",
					"name": "BayiFirmaAdi",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "yetkili",
					"name": "Yetkili",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "bayi sahis adi",
					"name": "BayiSahisAdi",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "bayi sahis soyadi",
					"name": "BayiSahisSoyadi",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "telefon_ev",
					"name": "Telefon_Ev",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "telefon_is",
					"name": "Telefon_Is",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "telefon_gsm",
					"name": "Telefon_Gsm",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "email",
					"name": "Email",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "il",
					"name": "Il",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "ilce",
					"name": "Ilce",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "adres",
					"name": "Adres",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "vergi dairesi",
					"name": "VergiDairesi",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "vergi numarasi",
					"name": "VergiNumarasi",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "sahis tc kimlik no",
					"name": "SahisTcKimlikNo",
					"type": "string",
					"default": ""
				}
			]
		},
		{
			"displayName": "p tarih",
			"name": "pTarih",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"KargoBilgileriByTarih"
					]
				}
			}
		},
		{
			"displayName": "p rapor type",
			"name": "pRaporType",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"KargoBilgileriByTarih",
						"KargoBilgileriByReferans"
					]
				}
			}
		},
		{
			"displayName": "p fl altfirma",
			"name": "pFlAltfirma",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"KargoBilgileriByTarih"
					]
				}
			}
		},
		{
			"displayName": "p gonderi no",
			"name": "pGonderiNo",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"KargoBilgileriByReferans"
					]
				}
			}
		},
		{
			"displayName": "p fatura seri",
			"name": "pFaturaSeri",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"KargoBilgileriByReferans"
					]
				}
			}
		},
		{
			"displayName": "p fatura no",
			"name": "pFaturaNo",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"KargoBilgileriByReferans",
						"GonderiTeslimatProblemleri"
					]
				}
			}
		},
		{
			"displayName": "p e fatura no",
			"name": "pEFaturaNo",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"KargoBilgileriByReferans"
					]
				}
			}
		},
		{
			"displayName": "p adet",
			"name": "pAdet",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MngGonderiKgDesiUpdate"
					]
				}
			}
		},
		{
			"displayName": "p kg",
			"name": "pKg",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MngGonderiKgDesiUpdate"
					]
				}
			}
		},
		{
			"displayName": "p desi",
			"name": "pDesi",
			"type": "number",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MngGonderiKgDesiUpdate"
					]
				}
			}
		},
		{
			"displayName": "p yanitlama tarih1",
			"name": "pYanitlamaTarih1",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GonderiTeslimatProblemleri"
					]
				}
			}
		},
		{
			"displayName": "p yanitlama tarih2",
			"name": "pYanitlamaTarih2",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GonderiTeslimatProblemleri"
					]
				}
			}
		},
		{
			"displayName": "p problem ticket id",
			"name": "pProblemTicketId",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GonderiTeslimatProblemiIadeYaniti"
					]
				}
			}
		},
		{
			"displayName": "p yanit aciklama",
			"name": "pYanitAciklama",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GonderiTeslimatProblemiIadeYaniti"
					]
				}
			}
		},
		{
			"displayName": "p yanitlayan adi soyadi",
			"name": "pYanitlayanAdiSoyadi",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GonderiTeslimatProblemiIadeYaniti"
					]
				}
			}
		},
		{
			"displayName": "p rapor no",
			"name": "pRaporNo",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriOzelRapor"
					]
				}
			}
		},
		{
			"displayName": "p bas tarihi",
			"name": "pBasTarihi",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriOzelRapor"
					]
				}
			}
		},
		{
			"displayName": "p bit tarihi",
			"name": "pBitTarihi",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriOzelRapor"
					]
				}
			}
		},
		{
			"displayName": "p diger",
			"name": "pDiger",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriOzelRapor"
					]
				}
			}
		},
		{
			"displayName": "req",
			"name": "req",
			"type": "collection",
			"default": {},
			"displayOptions": {
				"show": {
					"operation": [
						"MNGGonderiBarkod"
					]
				}
			},
			"options": [
				{
					"displayName": "ws user name",
					"name": "WsUserName",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "ws password",
					"name": "WsPassword",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "referans no",
					"name": "ReferansNo",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "irsaliye no",
					"name": "IrsaliyeNo",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "out barkod type",
					"name": "OutBarkodType",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "fl kapida tahsilat",
					"name": "FlKapidaTahsilat",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "urun bedeli",
					"name": "UrunBedeli",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "ch mesaj",
					"name": "ChMesaj",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "ek string1",
					"name": "EkString1",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "ek string2",
					"name": "EkString2",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "ek string3",
					"name": "EkString3",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "ek string4",
					"name": "EkString4",
					"type": "string",
					"default": ""
				},
				{
					"displayName": "hatada referans barkodu bas",
					"name": "HatadaReferansBarkoduBas",
					"type": "number",
					"default": ""
				},
				{
					"displayName": "parca bilgi",
					"name": "ParcaBilgi",
					"type": "collection",
					"default": {},
					"options": [
						{
							"displayName": "gonderi parca",
							"name": "GonderiParca",
							"type": "collection",
							"default": {},
							"options": [
								{
									"displayName": "kg",
									"name": "Kg",
									"type": "number",
									"default": ""
								},
								{
									"displayName": "desi",
									"name": "Desi",
									"type": "number",
									"default": ""
								},
								{
									"displayName": "adet",
									"name": "Adet",
									"type": "number",
									"default": ""
								},
								{
									"displayName": "icerik",
									"name": "Icerik",
									"type": "string",
									"default": ""
								},
								{
									"displayName": "parca barkod",
									"name": "ParcaBarkod",
									"type": "string",
									"default": ""
								}
							]
						}
					]
				}
			]
		},
		{
			"displayName": "p nm gonderi no",
			"name": "pNmGonderiNo",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"TekBarkodGonderiIptali"
					]
				}
			}
		},
		{
			"displayName": "p referans id",
			"name": "pReferansId",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"KargoTakipByReferans"
					]
				}
			}
		},
		{
			"displayName": "p islem aciklama",
			"name": "pIslemAciklama",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriTeslimatIptalIstegi"
					]
				}
			}
		}
	]


export default properties;
