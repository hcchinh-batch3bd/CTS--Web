import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import * as CryptoJS from 'crypto-js';
import { ApiService } from 'src/app/api.service';
import { InfoModule } from 'src/app/models/account/info.module';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  apiKey: string;
  decPassword: string = "CTS-Security";
  info: InfoModule;
  constructor(private apiService: ApiService,private cookie: CookieService) { }

  ngOnInit(): void {
    this.Decrypt(this.cookie.get("cookieLogin"));
    this.apiService.GetInfo(this.apiKey).subscribe((data: InfoModule)=>{
      this.info = data;
    });
  }
  private Decrypt(encryptText: string){
    this.apiKey = CryptoJS.AES.decrypt(encryptText, this.decPassword.trim()).toString(CryptoJS.enc.Utf8);
  }
}
