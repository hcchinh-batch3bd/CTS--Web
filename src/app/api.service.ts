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
  public GetListMission()
  {
    return this.httpClient.get(`${this.apiURL}/Mission/ListMission?apiKey=`);
  }
  public GetlistTypeMission(){
    return this.httpClient.get(`${this.apiURL}/Type_Mission/GetAll`);
  }
  public GetDetailType(id: number){
    return this.httpClient.get(`${this.apiURL}/Type_Mission/`+id);
  }
  public createTypeMission(apiKey: string, typeMission: TypemissionModule){
    return this.httpClient.post(`${this.apiURL}/Type_Mission/Create?apiKey=`+apiKey,typeMission);
  }
  public editTypeMission(apiKey: string, typeMission: TypemissionModule){
    return this.httpClient.put(`${this.apiURL}/Type_Mission/Edit?apiKey=`+apiKey,typeMission);
  }
  public deleteTypeMission( id:number, apiKey: string, typeMission: TypemissionModule){
    return this.httpClient.put(`${this.apiURL}/Type_Mission/`+id+`/Remove?apiKey=`+apiKey,typeMission);
  }
}
