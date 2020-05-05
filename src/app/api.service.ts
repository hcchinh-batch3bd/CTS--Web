import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { TypemissionModule } from './models/typemission/typemission.module';
import { MissionModule } from './models/mission/mission.module';

const httpOptions = { 
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}
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
  public getRankEmployee(apiKey: string)
  {
    return this.httpClient.get(`${this.apiURL}/Account/RankEmployee?apiKey=`+apiKey);
  }
  public GetListMission()
  {
    return this.httpClient.get(`${this.apiURL}/Mission/ListMission`);
  }
  public GetListTypeMission()
  { 
    return this.httpClient.get(`${this.apiURL}/Type_Mission/GetAll`);
  }
  public CreateMission(apiKey: string, mission: MissionModule){
    return this.httpClient.post(`${this.apiURL}/Mission/Create?apiKey=`+apiKey,mission, httpOptions);
  }
  public EditMission(apiKey: string, mission: MissionModule){
    return this.httpClient.put(`${this.apiURL}/Mission/Edit?apiKey=`+apiKey,mission);
  }
  public DeleteMission(id: number, apiKey: string, mission: MissionModule){
    return this.httpClient.put(`${this.apiURL}/Mission/`+id+`/ClearMission?apiKey=`+apiKey,mission);
  }
  public GetDetailMission(id:number)
  { 
    return this.httpClient.get(`${this.apiURL}/Mission/`+id+`/Describe`);
  }

  public createTypeMission(apiKey: string, typeMission: TypemissionModule){
    return this.httpClient.post(`${this.apiURL}/Type_Mission/Create?apiKey=`+apiKey,typeMission);
}
}
 