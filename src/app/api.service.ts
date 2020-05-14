import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { from, Observable, Subject } from 'rxjs';
import { TypemissionModule } from './models/typemission/typemission.module';
import { AccountModule } from './models/account/account.module';
import { MissionModule } from './models/mission/mission.module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string ='http://hotrogame-001-site1.itempurl.com'
  constructor(private httpClient: HttpClient,) { }
  public checkLogin(id: number, password: string){
    return this.httpClient.get(`${this.apiURL}/Account/CheckLogin?id=`+id+`&pw=`+password);
  }
  public ChangePass(oldPass: string, newPass:string, apiKey: string){
    return this.httpClient.put(`${this.apiURL}/Account/Changepassword?passold=`+oldPass+`&passnew=`+newPass+`&apiKey=`+apiKey,"");
  }
  public getRankEmployee(apiKey: string)
  {
    return this.httpClient.get(`${this.apiURL}/Account/RankEmployee?apiKey=`+apiKey);
  }
  public GetInfo(apiKey: string){
    return this.httpClient.get(`${this.apiURL}/Account?apiKey=`+apiKey);
  }
  public GetListAccount(apiKey: string)
  {
    return this.httpClient.get<AccountModule[]>(`${this.apiURL}/Account/ListEmployee?apiKey=`+apiKey);
  }
  public RemoveAccount( id: number,apiKey: string): Observable<AccountModule[]>
  {
    return this.httpClient.get<AccountModule[]>(`${this.apiURL}/Account/`+id+`/DeleteEmployee?=`+'admin');
  }
  public DeleteAccount(id: number, apiKey: string)
  {
    return this.httpClient.put(`${this.apiURL}/Account/`+id+`/DeleteEmployee?apiKey=`+apiKey, "")
  }
  public CreateAccount( apiKey: string, CreateAccount:AccountModule)
  {
    return this.httpClient.post(`${this.apiURL}/Employee/Create?apiKey=`+apiKey, CreateAccount);
  }
  public ComleteMission(id_mission: number,apiKey: string)
  {
    return this.httpClient.put(`${this.apiURL}/Mission/`+id_mission+`/CompleteMission?apiKey=`+apiKey,'')
  }
  public GetListMission(apiKey: string)
  {
    return this.httpClient.get(`${this.apiURL}/Mission/ListMission?apiKey=`+apiKey);
  }
  public DeleteMission(id: number, apiKey: string, mission: MissionModule){
    return this.httpClient.put(`${this.apiURL}/Mission/`+id+`/ClearMission?apiKey=`+apiKey,mission);
  }
  public GetMissionDoing(apiKey: string)
  {
    return this.httpClient.get(`${this.apiURL}/Mission/Missionavailableemp?apiKey=`+apiKey);
  }
  public CreateMission(apiKey: string, mission: MissionModule){
    return this.httpClient.post(`${this.apiURL}/Mission/Create?apiKey=`+apiKey,mission);
  }
  public EditMission(apiKey: string, mission: MissionModule){
    return this.httpClient.put(`${this.apiURL}/Mission/Edit?apiKey=`+apiKey,mission);
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
  public GetDetailType(id: number){
    return this.httpClient.get(`${this.apiURL}/Type_Mission/`+id);
  }
  public editTypeMission(apiKey: string, typeMission: TypemissionModule){
    return this.httpClient.put(`${this.apiURL}/Type_Mission/Edit?apiKey=`+apiKey,typeMission);
  }
  public deleteTypeMission( id:number, apiKey: string, typeMission: TypemissionModule){
    return this.httpClient.put(`${this.apiURL}/Type_Mission/`+id+`/Remove?apiKey=`+apiKey,typeMission);
  }

  public GetMissionProcess(apiKey:string){
    return this.httpClient.get(`${this.apiURL}/Mission/Missionavailableemp?apiKey=`+apiKey);
  }

  public ConfirmMission(id: number, apiKey: string){
    return this.httpClient.post(`${this.apiURL}/Mission/`+id+`/Order?apiKey=`+apiKey,"");
  }
}

