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

  public GetAccount(apiKey: string){
    return this.httpClient.get(`${this.apiURL}/Account?apiKey=`+apiKey);
  }
  public GetListAccount(apiKey: string)
  {
    return this.httpClient.get(`${this.apiURL}/Account/ListEmployee?apiKey=`+apiKey);
  }
  public GetListMission(apiKey: string)
  {
    return this.httpClient.get(`${this.apiURL}/Mission/ListMission?apiKey=`+apiKey);
  }

  public GetListAreThere(){
    return this.httpClient.get(`${this.apiURL}/Missison/Missionavailable`);
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
}
