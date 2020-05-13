import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  apiKey: string;
  decPass: string = "CTS-Security";
  constructor(private cookie: CookieService) { }

  ngOnInit(): void {
    
  }

  private Decrypt(encryptText: string) {
    this.apiKey = CryptoJS.AES.decrypt(encryptText, this.decPass.trim()).toString(CryptoJS.enc.Utf8);
  }
}
