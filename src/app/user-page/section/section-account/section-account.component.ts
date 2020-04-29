import { Component, OnInit } from '@angular/core';
import * as CryptoJS from "crypto-js"
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/api.service';
import { InfoModule } from 'src/app/models/account/info.module';

@Component({
  selector: 'app-section-account',
  templateUrl: './section-account.component.html',
  styleUrls: ['./section-account.component.css']
})
export class SectionAccountComponent implements OnInit {
  apiKey: string;
  decPasswrod: string = "CTS-Security";
  info: InfoModule;
  constructor(private apiService: ApiService, private cookie: CookieService) { }

  ngOnInit(): void {
    this.Decrypt(this.cookie.get("cookieLogin"));
    this.apiService.GetListAccount(this.apiKey).subscribe((data: InfoModule)=>{
      this.info = data;
    });
  }

  private Decrypt(encrypText: string){
    this.apiKey = CryptoJS.AES.decrypt(encrypText, this.decPasswrod.trim()).toString(CryptoJS.enc.Utf8);
  }
}
