
import axios from "axios";
import CurrencyGateway from "./CurrencyGateway";
import HttpClient from "./HttpClient";

export default class CurrencyGatewayHttp implements CurrencyGateway {

  constructor(readonly hhtpClient:HttpClient, readonly baseUrl: string ) {
    this.baseUrl = 'http://localhost:3001'

  }

  async getCurrencies(): Promise<any> {
    const currencies = await this.hhtpClient.get(`${this.baseUrl}/currencies`);
    return currencies;
  }

}