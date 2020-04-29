import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../app/api.service';
import { SessionModule } from 'src/app/models/session/session.module';
import { CookieService } from 'ngx-cookie-service';
import * as CryptoJS from 'crypto-js';  


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  click = false;
  session: SessionModule;
  username: number;
  password: string ='';
  message: string;  
  encPassword: string ="CTS-Security";  
  conversionEncryptOutput: string;    
  constructor(private apiService : ApiService, private cookieService : CookieService) { }
  ngOnInit(): void {
    this.apiService.checkLogin
    
  }
  callAPILogin() : void
  {
    this.click = true;
    const error = "Kết nối máy chủ không thành công !!!";
    this.apiService.checkLogin(this.username, this.password).subscribe(
      data => {
        this.session = data['results'][0];
        if(data['status']===true)
        {
          console.log(data['results'][0]);
          this.convertText("encrypt");
          this.cookieService.set('cookieLogin', this.conversionEncryptOutput);
          
          if(this.session.level_employee){
            window.location.href = '/admin';
          }
          else{
            window.location.href = '/home';
          }
        }
        console.log(data['message']);
      },
      err => {
        console.log(err);
      }
    )
  }
  private convertText(conversion:string) {  
    if (conversion=="encrypt") {  
      this.conversionEncryptOutput = CryptoJS.AES.encrypt(this.session.apiKey, this.encPassword.trim()).toString();  
    }
  } 
}
