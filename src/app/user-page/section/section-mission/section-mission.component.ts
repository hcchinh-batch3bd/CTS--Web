import { Component, OnInit, TemplateRef } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { MissionModule } from 'src/app/models/mission/mission.module';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'ngx-cookie-service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-section-mission',
  templateUrl: './section-mission.component.html',
  styleUrls: ['./section-mission.component.css']
})
export class SectionMissionComponent implements OnInit {
  apiKey: string;
  decPassword: string = "CTS-Security";
  listMission: MissionModule[];
  totalRecords: number;
  page: number = 1;
  detail: BsModalRef;
  confirm: BsModalRef;
  accept: BsModalRef;
  message: string;
  missiondetail;
  constructor(private apiService: ApiService, private cookie: CookieService,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.Decrypt(this.cookie.get('cookieLogin'));
    this.showListMission();
  }
  showListMission() {
    this.apiService.GetListAreThere().subscribe(
      (data: MissionModule[]) => {
        this.listMission = data['results'];
        this.totalRecords = data['results'].length;
      });
  }
  showDetail(template: TemplateRef<any>, id: number) {
    this.detail = this.modalService.show(template, { class: 'dialog-detail' });
    this.apiService.GetDetail(id).subscribe(data => {
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
    });
    this.confirm.hide();
  }
  OK() {
    window.location.href = "../home";
    this.accept.hide();
  }

  private Decrypt(encryptText: string) {
    this.apiKey = CryptoJS.AES.decrypt(encryptText, this.decPassword.trim()).toString(CryptoJS.enc.Utf8);
  }
}
