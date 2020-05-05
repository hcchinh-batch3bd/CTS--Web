import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { AccountModule } from 'src/app/models/account/account.module';
import { CookieService } from 'ngx-cookie-service';
import { LevelModule } from 'src/app/models/account/level.module';
import{FormGroup, FormControl, Validators} from '@angular/forms';
import * as CryptoJS from 'crypto-js';  
import { stringify } from 'querystring';
@Component({
  selector: 'app-add-account',
  templateUrl:'./add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  idd:boolean;
  listLevel: LevelModule[]= [
    {id:false, name: "Nhân viên"},
    {id:true, name: "Quản lí"}
  ];
  listaccount: AccountModule[];
  decPassword:string = "CTS-Security";
  apiKey: string="";
  constructor(private apiService : ApiService, private cookieSerive: CookieService) {
   }
   ngOnInit(): void {
     this.Decrypt(this.cookieSerive.get('cookieLogin'));
   this.apiService.GetListAccount('admin').subscribe(data=>
    {
      
      this.listaccount = data['results'];
      console.log(this.apiKey);
      console.log(this.listLevel);
     
    },
    err => {
      console.log(err);
    }
    )
     
   } 
  CreateAC(name_employee: string,password:string, date: Date,levell:boolean, email:string): void{
      
      var account: AccountModule = new  AccountModule(); 
      account.name_employee = name_employee;
      account.password = password;
      account.date = date;
      account.level_employee = levell ;  
      account.email = email;      
      this.idd=levell; 
      console.log (this.idd);
    this.apiService.CreateAccount('admin',account).subscribe(data => {
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

  getAge(a: Date):number{
          let b = new Date(a); 
          let c = new Date().getFullYear() -b.getFullYear(); 
          return c;
  } 
}
