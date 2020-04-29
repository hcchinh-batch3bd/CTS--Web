import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { MissionModule } from 'src/app/models/mission/mission.module';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-section-mission',
  templateUrl: './section-mission.component.html',
  styleUrls: ['./section-mission.component.css']
})
export class SectionMissionComponent implements OnInit {
  apiKey: string;
  decPassword: string = "CTS-security";
  listMission: MissionModule[];
  totalRecords: string;
  page: number=1;
  constructor(private apiService: ApiService, private cookie: CookieService) { }

  ngOnInit(): void {
    this.Decrypt(this.cookie.get('cookieLogin'));
    this.apiService.GetListMission(this.apiKey).subscribe(
      (data: MissionModule[])=>{
      this.listMission = data['results'];
      this.totalRecords = data['results'].length;
    });
  }

  private Decrypt(encryptText: string){
    this.apiKey = CryptoJS.AES.decrypt(encryptText, this.decPassword.trim()).toString(CryptoJS.enc.Utf8);
  }
}
