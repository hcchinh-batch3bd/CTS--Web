import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { AccountModule } from 'src/app/models/account/account.module';
import * as CryptoJS from 'crypto-js';  
import { SessionModule } from 'src/app/models/session/session.module';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  random = Math.random();
  session: SessionModule;
  otpEcrypt : any ;
  mail: string;
  conversionEncryptOutput: string;
  encPassword: string ="CTS-Security";  
  dataToEncrypt: any={id:"123456"};
  encryptedData: string="";
  secretkey:string="CTSOTP12"; 
  constructor( private apiService: ApiService) { }

  ngOnInit(): void {
  }
  senOTP(): void{
    this.otpEcrypt =CryptoJS.TripleDES.encrypt(JSON.stringify(this.dataToEncrypt),this.secretkey).toString();
    alert(this.otpEcrypt);
    this.apiService.SenOTP(this.otpEcrypt,this.mail).subscribe(data=>
      {
        this.session = data['results'];
        console.log(data);
        console.log(data['url:']);
       // this.convertText("encrypt");
        
        // window.location.href='home/mission';
      })
  }
  private convertText(conversion:string) {  
    if (conversion=="encrypt") {       
      this.conversionEncryptOutput = CryptoJS.AES.encrypt(this.session.apiKey, this.encPassword.trim()).toString();  
    }
  } 
}
