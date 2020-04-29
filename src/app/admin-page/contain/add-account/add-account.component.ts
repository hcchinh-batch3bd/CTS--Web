import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { AccountModule } from 'src/app/models/account/account.module';
import { CookieService } from 'ngx-cookie-service';
import * as CryptoJS from 'crypto-js';  
@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  listaccount: AccountModule[];
  name:string ="";
  decPassword:string = "CTS-Security";
  apiKey: string;
  constructor(private apiService : ApiService, private cookieSerive: CookieService) { }

  ngOnInit(): void { this.Decrypt(this.cookieSerive.get('cookieLogin'));
  this.apiService.GetListAccount('hello').subscribe(data=>
   {
     this.listaccount = data['results'];
     console.log(this.apiKey);
   },
   err => {
     console.log(err);
   }
   )
  }
  CreateAC(){
    this.apiService.CreateAccount(this.apiKey, this.listaccount).subscribe(data => {
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
