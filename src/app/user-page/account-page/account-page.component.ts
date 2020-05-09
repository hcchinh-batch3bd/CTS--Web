import { Component, OnInit, TemplateRef } from '@angular/core';
import { InfoModule } from 'src/app/models/account/info.module';
import { ApiService } from 'src/app/api.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CookieService } from 'ngx-cookie-service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {
  apiKey: string;
  decPasswrod: string = "CTS-Security";
  info: InfoModule;
  modalRef: BsModalRef;
  notify: BsModalRef;
  message: string;
  oldPass:string;
  newPass:string;
  rePass:string;
  constructor(private apiService: ApiService, private cookie: CookieService,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.Decrypt(this.cookie.get("cookieLogin"));
    this.apiService.GetInfo(this.apiKey).subscribe((data: InfoModule) => {
      this.info = data;
    });
  }

  private Decrypt(encrypText: string) {
    this.apiKey = CryptoJS.AES.decrypt(encrypText, this.decPasswrod.trim()).toString(CryptoJS.enc.Utf8);
  }
  changePass(template: TemplateRef<any>) {
    this.notify = this.modalService.show(template, {class: 'notify'});
    this.apiService.ChangePass(this.oldPass, this.rePass, this.apiKey).subscribe(
      data=>{
        this.message = data["message"];
        if(data["status"]){
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
