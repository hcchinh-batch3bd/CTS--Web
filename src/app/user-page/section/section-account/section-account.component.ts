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
  message: string;
  constructor(private apiService: ApiService, private cookie: CookieService,
     private modalService: BsModalService) { }

  ngOnInit(): void {
    this.Decrypt(this.cookie.get("cookieLogin"));
    this.apiService.GetListAccount(this.apiKey).subscribe((data: InfoModule)=>{
      this.info = data;
    });
  }

  private Decrypt(encrypText: string){
    this.apiKey = CryptoJS.AES.decrypt(encrypText, this.decPasswrod.trim()).toString(CryptoJS.enc.Utf8);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  changePass(){
    window.location.href="";
  }
  // closeFirstModal() {
  //   if (!this.modalRef) {
  //     return;
  //   }
  //   this.modalRef.hide();
  //   this.modalRef = null;
  // }
  // confirm(): void {
  //   this.message = 'Confirmed!';
  //   this.modalRef.hide();
  // }
 
  // decline(): void {
  //   this.message = 'Declined!';
  //   this.modalRef.hide();
  // }

}
