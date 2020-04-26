import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { AccountModule } from 'src/app/models/account/account.module';
import { CookieService } from 'ngx-cookie-service';
import * as CryptoJS from 'crypto-js';  

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {
  listaccount: AccountModule[];
  decPassword:string = "CTS-Security";
  apiKey: string;
  constructor(private apiService : ApiService, private cookieSerive: CookieService) { }

  ngOnInit(): void {
    this.Decrypt(this.cookieSerive.get('cookieLogin'));
     this.apiService.GetListAccount(this.apiKey).subscribe(data=>
      {
        this.listaccount = data['results'];
        console.log(this.listaccount);
      },
      err => {
        console.log(err);
      }
      )
  }
  private Decrypt (encryptText : string) {  
    this.apiKey = CryptoJS.AES.decrypt(encryptText, this.decPassword.trim()).toString(CryptoJS.enc.Utf8);  
  }  

}
