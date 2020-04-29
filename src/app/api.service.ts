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
  public RemoveAccount( id: number,apiKey: string): Observable<AccountModule[]>
  {
    return this.httpClient.get<AccountModule[]>(`${this.apiURL}/Account/`+id+`/DeleteEmployee?=`+'admin');
  }
  
  public createTypeMission(apiKey: string, typeMission: TypemissionModule){
    return this.httpClient.post(`${this.apiURL}/Type_Mission/Create?apiKey=`+apiKey,typeMission);
 }
 }


