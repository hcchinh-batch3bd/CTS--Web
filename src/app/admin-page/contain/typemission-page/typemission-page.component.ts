import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'ngx-cookie-service';
import * as CryptoJS from 'crypto-js';
import { from } from 'rxjs';
import { TypemissionModule } from 'src/app/models/typemission/typemission.module';

@Component({
  selector: 'app-typemission-page',
  templateUrl: './typemission-page.component.html',
  styleUrls: ['./typemission-page.component.css']
})
export class TypemissionPageComponent implements OnInit {
  listtypemission: TypemissionModule[];
  
  apiKey: string = "admin";
  //decPassword:string = "CTS-Security";
  typemission: TypemissionModule;
  constructor(private apiService: ApiService, private cookieService: CookieService) { 
  
  }
  ngOnInit(): void {
    //this.Decrypt(this.cookieService.get('cookieLogin'));
 
  }
 
  
  /*private Decrypt (encryptText : string) {  
    this.apiKey = CryptoJS.AES.decrypt(encryptText, this.decPassword.trim()).toString(CryptoJS.enc.Utf8);  
  }*/
}
