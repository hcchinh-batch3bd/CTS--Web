import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { from } from 'rxjs';
import { TypemissionModule } from './models/typemission/typemission.module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string ='http://hotrogame-001-site1.itempurl.com'
  constructor(private httpClient: HttpClient) { }
  public checkLogin(id: number, password: string){
    return this.httpClient.get(`${this.apiURL}/Account/CheckLogin?id=`+id+`&pw=`+password);
  }
  public GetListAccount(apiKey: string)
  {
    return this.httpClient.get(`${this.apiURL}/Account/ListEmployee?apiKey=`+apiKey);
  }
  public createTypeMission(apiKey: string, typeMission: TypemissionModule){
    return this.httpClient.post(`${this.apiURL}/Type_Mission/Create?apiKey=`+apiKey,typeMission);
}
}
