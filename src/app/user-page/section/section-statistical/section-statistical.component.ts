import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import * as CryptoJS from 'crypto-js';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-section-statistical',
  templateUrl: './section-statistical.component.html',
  styleUrls: ['./section-statistical.component.css']
})
export class SectionStatisticalComponent implements OnInit {
  apiKey: string;
  decPassword: string = "CTS-Security";
  totalRecords: string;
  page: number=1;
  listProcess;
  constructor(private apiService: ApiService, private cookie: CookieService) { }

  ngOnInit(): void {
    this.Decrypt(this.cookie.get('cookieLogin'));
    this.apiService.GetMissionProcess(this.apiKey).subscribe(
      data=>{
      this.listProcess = data["results"];
      this.totalRecords = data["results"].length;
    });
  }

  private Decrypt(encryptText: string){
    this.apiKey = CryptoJS.AES.decrypt(encryptText, this.decPassword.trim()).toString(CryptoJS.enc.Utf8);
  }
}
