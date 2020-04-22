import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SessionModule } from './models/session/session.module';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string ='https://api.hotrogame.online'
  constructor(private httpClient: HttpClient) { }
  public checkLogin(id: number, password: string){
    return this.httpClient.get(`${this.apiURL}/Account/CheckLogin?id=`+id+`&pw=`+password);
  }
}
