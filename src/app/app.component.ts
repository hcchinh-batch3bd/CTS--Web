import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import * as CryptoJS from 'crypto-js';  
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  plainText:string;   
  decPassword:string = "CTS-Security";
  conversionDecryptOutput:string;  
  private cookieValue;
  constructor(private cookieService: CookieService){}
  public ngOnInit(): void {
    this.cookieValue = this.cookieService.get('cookieLogin');
    
  }
  private Decrypt (encryptText : string) {  
    this.conversionDecryptOutput = CryptoJS.AES.decrypt(encryptText, this.decPassword.trim()).toString(CryptoJS.enc.Utf8);  
  }    
  title = 'cts-web';
}
