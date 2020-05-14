
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import * as CryptoJS from 'crypto-js';  
import { CookieService } from 'ngx-cookie-service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal'
import { MissionPageComponent } from 'src/app/admin-page/contain/mission-page/mission-page.component';
@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {
  listMission;
  apiKey: string;
  totalRecords: string;
  page: number=1;
  decPassword:string = "CTS-Security";
  detail: BsModalRef;
  confirm: BsModalRef;
  accept: BsModalRef;
  message:string;
  missiondetail;
  constructor(private apiService: ApiService, private cookieService: CookieService
    , private modalService: BsModalService) { }

  ngOnInit(): void {
    this.Decrypt(this.cookieService.get('cookieLogin'));
    this.apiService.GetListAreThere().subscribe(
      data=>{
        this.listMission = data['results'];
        this.totalRecords = data['results'].length;
      }
    );
  }
  showDetail(template: TemplateRef<any> ,id: number){
    this.detail = this.modalService.show(template, {class: "dialog-detail"});
    this.apiService.GetDetail(id).subscribe(data=>{
      this.missiondetail = data["results"][0];
    });
  }
  showConfirm(template: TemplateRef<any>, id: number) {
    this.confirm = this.modalService.show(template, { class: 'confirm' });
    this.apiService.GetDetail(id).subscribe(data => {
      this.missiondetail = data["results"][0];
    });
    if (this.detail != null) {
      this.detail.hide();
    }
  }
  confirmMission(id: number, template: TemplateRef<any>) {
    this.accept = this.modalService.show(template, { class: 'notify' });
    this.apiService.ConfirmMission(id, this.apiKey).subscribe(data => {
      this.message = data["message"];
      window.location.href = "/home/mission";
    });
    this.confirm.hide();
  }
  OK() {
    this.accept.hide();
  }
  private Decrypt(encryptText: string){
    this.apiKey =  CryptoJS.AES.decrypt(encryptText, this.decPassword.trim()).toString(CryptoJS.enc.Utf8);
  }

}
