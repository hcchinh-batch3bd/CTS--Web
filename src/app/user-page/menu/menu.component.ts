import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'ngx-cookie-service';
import * as CryptoJS from 'crypto-js';
import { InfoModule } from 'src/app/models/account/info.module';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  show = false;
  menu = false;
  apiKey: string;
  decPass = "CTS-Security";
  info: InfoModule;
  constructor(private apiService: ApiService, private cookie: CookieService) { }

  ngOnInit(): void {
    this.Decrypt(this.cookie.get("cookieLogin"));
    this.apiService.GetInfo(this.apiKey).subscribe((data: InfoModule)=>{
      this.info = data;
    });
  }

  private Decrypt(encryptText: string){
    this.apiKey = CryptoJS.AES.decrypt(encryptText, this.decPass.trim()).toString(CryptoJS.enc.Utf8);
  }
  toggleDisplay() {
    this.show = !this.show;
  }
  menuShow(){
    this.menu = !this.menu;
  }
}
