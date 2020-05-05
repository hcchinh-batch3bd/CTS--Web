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
  name2: string="";
  name: string="";
  apiKey: string = "admin";
  //decPassword:string = "CTS-Security";
  typemission: TypemissionModule;
  constructor(private apiService: ApiService, private cookieService: CookieService) { 
  
  }
  ngOnInit(): void {
    //this.Decrypt(this.cookieService.get('cookieLogin'));
    this.apiService.GetlistTypeMission().subscribe((data: TypemissionModule[])=>
    {
      this.listtypemission = data;
    },
    err => {
      console.log(err);
    }
    )
  }
 
  createTypeMission() : void
  {
    var typemission = {
      id_type: null,
      name_type_mission: this.name,
      status: true,
      id_employee: 189239,
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
  deleteTypeMission(id: number) : void
  {
    this.apiService.deleteTypeMission(id,this.apiKey,this.typemission).subscribe(data =>{
      console.log(data['message']);
      this.ngOnInit();
    })
  }
  editTypeMission(type: TypemissionModule) : void
  {
    this.apiService.editTypeMission(this.apiKey,type);
    this.ngOnInit();
  }
  /*private Decrypt (encryptText : string) {  
    this.apiKey = CryptoJS.AES.decrypt(encryptText, this.decPassword.trim()).toString(CryptoJS.enc.Utf8);  
  }*/
}
