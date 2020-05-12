import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { from } from 'rxjs';
import { TypemissionModule } from './models/typemission/typemission.module';
import { MissionModule } from './models/mission/mission.module';

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
  public GetListMission(apiKey: string)
  {
    return this.httpClient.get(`${this.apiURL}/Mission/ListMission?apiKey=`+apiKey);
  }
  public GetMissionComplete(apiKey: string)
  {
    return this.httpClient.get(`${this.apiURL}/Mission/ListMissionComplete?apiKey=`+apiKey);
  }
  public GetListMissionavailable()
  {
    return this.httpClient.get(`${this.apiURL}/Missison/Missionavailable`);
  }
  public createTypeMission(apiKey: string, typeMission: TypemissionModule){
    return this.httpClient.post(`${this.apiURL}/Type_Mission/Create?apiKey=`+apiKey,typeMission);
}
  public GetMissionDetail(id_mission: number)
  {
    return this.httpClient.get(`${this.apiURL}/Mission/`+id_mission+`/Describe`);
  }
  public GetMissionDoing(apiKey: string)
  {
    return this.httpClient.get(`${this.apiURL}/Mission/Missionavailableemp?apiKey=`+apiKey);
  }
  public OrderMission(id_mission: number,apiKey: string,Mission: MissionModule)
  {
    return this.httpClient.post(`${this.apiURL}/Mission/`+id_mission+`/Order?apikey=`+apiKey,Mission);
  }
  public ComleteMission(id_mission: number,apiKey: string,Mission: MissionModule)
  {
    return this.httpClient.put(`${this.apiURL}/Mission/`+id_mission+`/CompleteMission?apiKey=`+apiKey,Mission)
  }
  public ChangePassworld(pwold: string,pwnew: string, apiKey: string)
  {
    return this.httpClient.put(`${this.apiURL}/Account/Changepassword?passnew=` + pwnew + `&passold=` + pwold + `&apiKey=`+apiKey, "")
  }
  public CofirmMission(id_mission: number,apiKey:string)
  {
    return this.httpClient.put(`${this.apiURL}/Mission/` + id_mission + `/Confirm?apiKey=`+ apiKey,"")
  }
  public ClearMission(id_mission:number,apiKey:string)
  {
    return this.httpClient.put(`${this.apiURL}/Mission/` + id_mission + `/ClearMission?apiKey=`+apiKey,"")
  }
  public SenOTP(otpEcrypt: string, txtEmail: any)
  {
    return this.httpClient.get(`${this.apiURL}/Account/OTP?OTP=` + otpEcrypt + `&mail=` + txtEmail)
  }
  public loadNotify()
  {
    return this.httpClient.get(`${this.apiURL}/Mission/ListMission`);
  }
}
