import { Component, OnInit, TemplateRef } from '@angular/core';
import * as CryptoJS from "crypto-js"
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/api.service';
import { InfoModule } from 'src/app/models/account/info.module';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-section-account',
  templateUrl: './section-account.component.html',
  styleUrls: ['./section-account.component.css']
})
export class SectionAccountComponent implements OnInit {
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
