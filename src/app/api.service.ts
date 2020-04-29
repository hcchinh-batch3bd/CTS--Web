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
  public GetListAccount(apiKey: string): Observable<AccountModule[]>
  {
    return this.httpClient.get<AccountModule[]>(`${this.apiURL}/Account/ListEmployee?apiKey=`+'hello');
  }
<<<<<<< HEAD
  public RemoveAccount( id: number,apiKey: string): Observable<AccountModule[]>
  {
    return this.httpClient.get<AccountModule[]>(`${this.apiURL}/Account/`+id+`/DeleteEmployee?=`+'admin');
  }
  
  public createTypeMission(apiKey: string, typeMission: TypemissionModule){
    return this.httpClient.post(`${this.apiURL}/Type_Mission/Create?apiKey=`+apiKey,typeMission);
 }
 }


=======
  public GetListMission()
  {
    return this.httpClient.get(`${this.apiURL}/Mission/ListMission?apiKey=`);
  }
  public GetlistTypeMission(){
    return this.httpClient.get(`${this.apiURL}/Type_Mission/GetAll`);
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
>>>>>>> 8167bc17b7420b0d5d4af6f5cdef7d3f1a76d29f
