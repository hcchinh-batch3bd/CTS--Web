
import { Component, OnInit } from '@angular/core';
import { MissionModule } from 'src/app/models/mission/mission.module';
import { ApiService } from 'src/app/api.service';
import * as CryptoJS from 'crypto-js';  
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {
  listMission: MissionModule[];
  apiKey: string;
  totalRecords: string;
  page: number=1;
  decPassword:string = "CTS-Security";
  constructor(private apiService: ApiService, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.Decrypt(this.cookieService.get('cookieLogin'));
    this.apiService.GetListAreThere().subscribe(
      (data: MissionModule[])=>{
        this.listMission = data['results'];
        this.totalRecords = data['results'].length;
      }
    );
  }
  private Decrypt(encryptText: string){
    this.apiKey =  CryptoJS.AES.decrypt(encryptText, this.decPassword.trim()).toString(CryptoJS.enc.Utf8);
  }

}
