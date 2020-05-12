import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { SessionModule } from 'src/app/models/session/session.module';
import { CookieService } from 'ngx-cookie-service';
import * as CryptoJS from 'crypto-js';  

@Component({
  selector: 'app-section-account',
  templateUrl: './section-account.component.html',
  styleUrls: ['./section-account.component.css']
})
export class SectionAccountComponent implements OnInit {
  pwold: string ="";
  pwnew: string ="";
  session: SessionModule;
  click = false;
  encPassword: string ="CTS-Security";  
  conversionEncryptOutput: string;  
  constructor( private apiSerVice: ApiService, private cookieService : CookieService) { }

  ngOnInit(): void {
    this.apiSerVice.ChangePassworld;
  }
  ChangePass(): void{
    this.click = true;
    var txt;
    var r = confirm("Bạn có chắc chắn muốn đổi mật khẩu?");
    if (r == true) {
      this.apiSerVice.ChangePassworld(this.pwold,this.pwnew,"PFKXLSOTJR").subscribe(data=>
        {
          this.session = data['results'];
          console.log(data);
          if(data['status'] == true)
          {
            console.log(data['results']);
            this.convertText("encrypt");
            this.cookieService.set('cookieLogin', this.conversionEncryptOutput);
            txt ="Đổi mật khẩu thành công";
            window.location.href = '/home';
          }
        })
    } else {
      txt = "You pressed Cancel!";
    }
 
  }
  private convertText(conversion:string) {  
    if (conversion=="encrypt") {  
      
      this.conversionEncryptOutput = CryptoJS.AES.encrypt(this.session.apiKey, this.encPassword.trim()).toString();  
    }
  } 

}
