import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'ngx-cookie-service';
import * as CryptoJS from 'crypto-js';
import { from } from 'rxjs';

@Component({
  selector: 'app-typemission-page',
  templateUrl: './typemission-page.component.html',
  styleUrls: ['./typemission-page.component.css']
})
export class TypemissionPageComponent implements OnInit {
  name: string="";
  apiKey: string;
  decPassword:string = "CTS-Security";
  constructor(private apiService: ApiService, private cookieService: CookieService) { 
  
  }
  ngOnInit(): void {
    this.Decrypt(this.cookieService.get('cookieLogin'));
  }
  createTypeMission() : void
  {
    var typemission = {
      id_type: 123,
      name_type_mission: this.name,
      status: true,
      id_employee: 189212,
      date: new Date(),
    }
    this.apiService.createTypeMission(this.apiKey, typemission).subscribe(data => {
      console.log(data['message']);
      this.ngOnInit();
    },
    err => {
      console.log(err);
    })
  }
  private Decrypt (encryptText : string) {  
    this.apiKey = CryptoJS.AES.decrypt(encryptText, this.decPassword.trim()).toString(CryptoJS.enc.Utf8);  
  } 
}
