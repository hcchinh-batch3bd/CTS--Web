
import { Component, OnInit, TemplateRef } from '@angular/core';
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
  [x: string]: any;
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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
  changePass(template: TemplateRef<any>) {
    this.notify = this.modalService.show(template, {class: 'notify'});
    this.apiService.ChangePass(this.oldPass, this.rePass, this.apiKey).subscribe(
      data=>{
        this.message = data["message"];
        if(data["status"]){
          this.modalRef.hide();
          window.location.href = "";
        }
    });
  }
  Close(){
    this.modalRef.hide();
    this.oldPass = undefined;
    this.newPass = undefined;
    this.rePass = undefined;
  }
  CheckPassword(password: string): boolean {
    var Pattern1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,30}$/;
    if (Pattern1.test(password) && password != null) {
      return true;
    }
    else {
      return false;
    }
  }
}
