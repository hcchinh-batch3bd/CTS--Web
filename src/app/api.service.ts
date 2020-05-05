import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { from, Observable } from 'rxjs';
import { TypemissionModule } from './models/typemission/typemission.module';
import {AccountModule} from './models/account/account.module';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string ='http://hotrogame-001-site1.itempurl.com'
  constructor(private httpClient: HttpClient,) { }
  public checkLogin(id: number, password: string){
    return this.httpClient.get(`${this.apiURL}/Account/CheckLogin?id=`+id+`&pw=`+password);
  }

  public GetAccount(apiKey: string){
    return this.httpClient.get(`${this.apiURL}/Account?apiKey=`+apiKey);
  }
  public GetListAccount(apiKey: string)
  {
    return this.httpClient.get<AccountModule[]>(`${this.apiURL}/Account/ListEmployee?apiKey=`+'hello');
  }
  public RemoveAccount( id: number,apiKey: string): Observable<AccountModule[]>
  {
    return this.httpClient.get<AccountModule[]>(`${this.apiURL}/Account/`+id+`/DeleteEmployee?=`+'admin');
  }
  public GetListMission(apiKey: string)
  {
    return this.httpClient.get(`${this.apiURL}/Mission/ListMission?apiKey=`+apiKey);
  }
  public GetListAreThere(){
    return this.httpClient.get(`${this.apiURL}/Missison/Missionavailable`);
  }
  public GetDetail(id: number){
    return this.httpClient.get(`${this.apiURL}/Mission/`+id+`/Describe`);
  }
  public GetLisProcess(apiKey: string){
    return this.httpClient.get(`${this.apiURL}/Mission/Missionavailableemp?apiKey=`+apiKey);
  }
  public GetLisComplete(apiKey: string){
    return this.httpClient.get(`${this.apiURL}/Mission/ListMissionComplete?apiKey=`+apiKey);
  }
  public createTypeMission(apiKey: string, typeMission: TypemissionModule){
    return this.httpClient.post(`${this.apiURL}/Type_Mission/Create?apiKey=`+apiKey,typeMission);
}
  public GetlistTypeMission()
  {
    return this.httpClient.get(`${this.apiURL}/Type_Mission/GetAll`);
  }
  public editTypeMission(apiKey: string, typeMission: TypemissionModule){
    return this.httpClient.put(`${this.apiURL}/Type_Mission/Edit?apiKey=`+apiKey,typeMission);
  }
  public deleteTypeMission( id:number, apiKey: string, typeMission: TypemissionModule){
    return this.httpClient.put(`${this.apiURL}/Type_Mission/`+id+`/Remove?apiKey=`+apiKey,typeMission);
  }
}