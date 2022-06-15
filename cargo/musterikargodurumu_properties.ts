
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
					"name": "musteri kargo takip by fatura",
					"value": "MusteriKargoTakipByFatura"
				},
				{
					"name": "musteri kargo takip by siparis",
					"value": "MusteriKargoTakipBySiparis"
				},
				{
					"name": "musteri kargo takip by toplu fatura",
					"value": "MusteriKargoTakipByTopluFatura"
				},
				{
					"name": "musteri kargo bilgi by toplu fatura",
					"value": "MusteriKargoBilgiByTopluFatura"
				},
				{
					"name": "musteri kargo takip by irsaliye no",
					"value": "MusteriKargoTakipByIrsaliyeNo"
				},
				{
					"name": "musteri kargo takip by tarih",
					"value": "MusteriKargoTakipByTarih"
				},
				{
					"name": "musteri kargo takip by barkod",
					"value": "MusteriKargoTakipByBarkod"
				},
				{
					"name": "musteri kargo bilgileri by barkod",
					"value": "MusteriKargoBilgileriByBarkod"
				},
				{
					"name": "musteri kargo bilgileri",
					"value": "MusteriKargoBilgileri"
				},
				{
					"name": "musteri atf bilgileri",
					"value": "MusteriAtfBilgileri"
				},
				{
					"name": "musteri kargo takip by bayino",
					"value": "MusteriKargoTakipByBayino"
				},
				{
					"name": "musteri iade kargo takip",
					"value": "MusteriIadeKargoTakip"
				},
				{
					"name": "musteri kargo bilgi face",
					"value": "MusteriKargoBilgiFace"
				},
				{
					"name": "musteri kargo takip face",
					"value": "MusteriKargoTakipFace"
				},
				{
					"name": "get all il",
					"value": "GetAllIl"
				},
				{
					"name": "get ilce by il id",
					"value": "GetIlceByIlId"
				},
				{
					"name": "kargo ucret hesapla face",
					"value": "KargoUcretHesaplaFace"
				},
				{
					"name": "kurye cagir face",
					"value": "KuryeCagirFace"
				},
				{
					"name": "get sube by il ilce",
					"value": "GetSubeByIlIlce"
				},
				{
					"name": "musteri hizmetleri face",
					"value": "MusteriHizmetleriFace"
				},
				{
					"name": "musteri iade kargo takip by tarih",
					"value": "MusteriIadeKargoTakipByTarih"
				},
				{
					"name": "musteri kargo takip by parca icerik takip no",
					"value": "MusteriKargoTakipByParcaIcerikTakipNo"
				},
				{
					"name": "musteri kargo bilgileri by siparis no",
					"value": "MusteriKargoBilgileriBySiparisNo"
				},
				{
					"name": "teslim edilen gonderi listesi",
					"value": "TeslimEdilenGonderiListesi"
				},
				{
					"name": "mal bedelli gonderi komisyon fatura listesi",
					"value": "MalBedelliGonderiKomisyonFaturaListesi"
				},
				{
					"name": "mal bedelli gonderi komisyon fatura detay",
					"value": "MalBedelliGonderiKomisyonFaturaDetay"
				},
				{
					"name": "gonderi son durumlari",
					"value": "GonderiSonDurumlari"
				},
				{
					"name": "fatura siparis bilgi tz",
					"value": "FaturaSiparisBilgiTz"
				}
			],
			"placeholder": "Placeholder value",
			"description": "The description text"
		},
		{
			"displayName": "p fatura seri",
			"name": "pFaturaSeri",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriKargoTakipByFatura",
						"MusteriKargoBilgiFace",
						"MusteriKargoTakipFace"
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
						"MusteriKargoTakipByFatura",
						"MusteriKargoBilgiFace",
						"MusteriKargoTakipFace"
					]
				}
			}
		},
		{
			"displayName": "p fatura tip",
			"name": "pFaturaTip",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriKargoTakipByFatura",
						"MusteriKargoBilgiFace",
						"MusteriKargoTakipFace"
					]
				}
			}
		},
		{
			"displayName": "p kriter",
			"name": "pKriter",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriKargoTakipByFatura",
						"MusteriKargoTakipBySiparis",
						"MusteriKargoTakipByTopluFatura",
						"MusteriKargoTakipByIrsaliyeNo",
						"MusteriKargoTakipByTarih"
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
						"MusteriKargoTakipBySiparis",
						"MusteriKargoTakipByIrsaliyeNo",
						"MusteriIadeKargoTakip",
						"MusteriKargoBilgileriBySiparisNo",
						"FaturaSiparisBilgiTz"
					]
				}
			}
		},
		{
			"displayName": "p toplu fatura seri",
			"name": "pTopluFaturaSeri",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriKargoTakipByTopluFatura",
						"MusteriKargoBilgiByTopluFatura"
					]
				}
			}
		},
		{
			"displayName": "p toplu fatura no",
			"name": "pTopluFaturaNo",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriKargoTakipByTopluFatura",
						"MusteriKargoBilgiByTopluFatura"
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
						"MusteriKargoTakipByIrsaliyeNo",
						"MusteriIadeKargoTakip"
					]
				}
			}
		},
		{
			"displayName": "p bas tar",
			"name": "pBasTar",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriKargoTakipByTarih",
						"MusteriIadeKargoTakipByTarih",
						"MusteriKargoTakipByParcaIcerikTakipNo"
					]
				}
			}
		},
		{
			"displayName": "p bit tar",
			"name": "pBitTar",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriKargoTakipByTarih",
						"MusteriIadeKargoTakipByTarih",
						"MusteriKargoTakipByParcaIcerikTakipNo"
					]
				}
			}
		},
		{
			"displayName": "p barkod",
			"name": "pBarkod",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriKargoTakipByBarkod",
						"MusteriKargoBilgileriByBarkod"
					]
				}
			}
		},
		{
			"displayName": "p fat seri",
			"name": "pFatSeri",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriKargoBilgileri"
					]
				}
			}
		},
		{
			"displayName": "p fat no",
			"name": "pFatNo",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriKargoBilgileri"
					]
				}
			}
		},
		{
			"displayName": "p atf seri",
			"name": "pAtfSeri",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriAtfBilgileri"
					]
				}
			}
		},
		{
			"displayName": "p atf no",
			"name": "pAtfNo",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriAtfBilgileri"
					]
				}
			}
		},
		{
			"displayName": "p toplu fat seri",
			"name": "pTopluFatSeri",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriAtfBilgileri"
					]
				}
			}
		},
		{
			"displayName": "p toplu fat no",
			"name": "pTopluFatNo",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriAtfBilgileri"
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
						"MusteriKargoTakipByBayino"
					]
				}
			}
		},
		{
			"displayName": "p bas tarih",
			"name": "pBasTarih",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriKargoTakipByBayino",
						"MalBedelliGonderiKomisyonFaturaListesi"
					]
				}
			}
		},
		{
			"displayName": "p bit tarih",
			"name": "pBitTarih",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriKargoTakipByBayino",
						"MalBedelliGonderiKomisyonFaturaListesi"
					]
				}
			}
		},
		{
			"displayName": "p il kod",
			"name": "pIlKod",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GetIlceByIlId"
					]
				}
			}
		},
		{
			"displayName": "p rf gn il kod",
			"name": "pRfGnIlKod",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"KargoUcretHesaplaFace"
					]
				}
			}
		},
		{
			"displayName": "p rf al il kod",
			"name": "pRfAlIlKod",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"KargoUcretHesaplaFace"
					]
				}
			}
		},
		{
			"displayName": "p fl ucak",
			"name": "pFlUcak",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"KargoUcretHesaplaFace"
					]
				}
			}
		},
		{
			"displayName": "p lu alim sekli",
			"name": "pLuAlimSekli",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"KargoUcretHesaplaFace"
					]
				}
			}
		},
		{
			"displayName": "p lu teslim sekli",
			"name": "pLuTeslimSekli",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"KargoUcretHesaplaFace"
					]
				}
			}
		},
		{
			"displayName": "p vip hizmet",
			"name": "pVipHizmet",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"KargoUcretHesaplaFace"
					]
				}
			}
		},
		{
			"displayName": "p fl mobil",
			"name": "pFlMobil",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"KargoUcretHesaplaFace"
					]
				}
			}
		},
		{
			"displayName": "p fl al sms",
			"name": "pFlAlSms",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"KargoUcretHesaplaFace"
					]
				}
			}
		},
		{
			"displayName": "p fl gn sms",
			"name": "pFlGnSms",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"KargoUcretHesaplaFace"
					]
				}
			}
		},
		{
			"displayName": "p fl sigorta",
			"name": "pFlSigorta",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"KargoUcretHesaplaFace"
					]
				}
			}
		},
		{
			"displayName": "p kg",
			"name": "pKg",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"KargoUcretHesaplaFace"
					]
				}
			}
		},
		{
			"displayName": "p en",
			"name": "pEn",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"KargoUcretHesaplaFace"
					]
				}
			}
		},
		{
			"displayName": "p boy",
			"name": "pBoy",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"KargoUcretHesaplaFace"
					]
				}
			}
		},
		{
			"displayName": "p yukseklik",
			"name": "pYukseklik",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"KargoUcretHesaplaFace"
					]
				}
			}
		},
		{
			"displayName": "p firma",
			"name": "pFirma",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"KuryeCagirFace"
					]
				}
			}
		},
		{
			"displayName": "p ad soyad",
			"name": "pAdSoyad",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"KuryeCagirFace",
						"MusteriHizmetleriFace"
					]
				}
			}
		},
		{
			"displayName": "p adres",
			"name": "pAdres",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"KuryeCagirFace"
					]
				}
			}
		},
		{
			"displayName": "p ilce",
			"name": "pIlce",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"KuryeCagirFace"
					]
				}
			}
		},
		{
			"displayName": "p il",
			"name": "pIl",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"KuryeCagirFace"
					]
				}
			}
		},
		{
			"displayName": "p telefon",
			"name": "pTelefon",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"KuryeCagirFace",
						"MusteriHizmetleriFace"
					]
				}
			}
		},
		{
			"displayName": "p mail",
			"name": "pMail",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"KuryeCagirFace",
						"MusteriHizmetleriFace"
					]
				}
			}
		},
		{
			"displayName": "p gonderi turu",
			"name": "pGonderiTuru",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"KuryeCagirFace"
					]
				}
			}
		},
		{
			"displayName": "p paket tipi",
			"name": "pPaketTipi",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"KuryeCagirFace"
					]
				}
			}
		},
		{
			"displayName": "p alim tarih",
			"name": "pAlimTarih",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"KuryeCagirFace"
					]
				}
			}
		},
		{
			"displayName": "p rf il kod",
			"name": "pRfIlKod",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GetSubeByIlIlce"
					]
				}
			}
		},
		{
			"displayName": "p rf ilce kod",
			"name": "pRfIlceKod",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GetSubeByIlIlce"
					]
				}
			}
		},
		{
			"displayName": "p cep telefon",
			"name": "pCepTelefon",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriHizmetleriFace"
					]
				}
			}
		},
		{
			"displayName": "p konu",
			"name": "pKonu",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriHizmetleriFace"
					]
				}
			}
		},
		{
			"displayName": "p mesaj",
			"name": "pMesaj",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriHizmetleriFace"
					]
				}
			}
		},
		{
			"displayName": "p takip no",
			"name": "pTakipNo",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MusteriKargoTakipByParcaIcerikTakipNo"
					]
				}
			}
		},
		{
			"displayName": "p fl altfirma dahil",
			"name": "pFlAltfirmaDahil",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MalBedelliGonderiKomisyonFaturaListesi"
					]
				}
			}
		},
		{
			"displayName": "p tarih type",
			"name": "pTarihType",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MalBedelliGonderiKomisyonFaturaListesi"
					]
				}
			}
		},
		{
			"displayName": "p ch fatura seri",
			"name": "pChFaturaSeri",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MalBedelliGonderiKomisyonFaturaListesi",
						"MalBedelliGonderiKomisyonFaturaDetay"
					]
				}
			}
		},
		{
			"displayName": "p ch fatura no",
			"name": "pChFaturaNo",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"MalBedelliGonderiKomisyonFaturaListesi",
						"MalBedelliGonderiKomisyonFaturaDetay"
					]
				}
			}
		},
		{
			"displayName": "p tarih",
			"name": "pTarih",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GonderiSonDurumlari"
					]
				}
			}
		},
		{
			"displayName": "p hareket kod",
			"name": "pHareketKod",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GonderiSonDurumlari"
					]
				}
			}
		},
		{
			"displayName": "p min hareket id",
			"name": "pMinHareketID",
			"type": "string",
			"default": "",
			"displayOptions": {
				"show": {
					"operation": [
						"GonderiSonDurumlari"
					]
				}
			}
		}
	]


export default properties;
