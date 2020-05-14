import { Component, OnInit, TemplateRef } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { MissionModule } from 'src/app/models/mission/mission.module';
import { TypemissionModule } from 'src/app/models/typemission/typemission.module';
import { CookieService } from 'ngx-cookie-service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-mission-donging',
  templateUrl: './mission-donging.component.html',
  styleUrls: ['./mission-donging.component.css']
})
export class MissionDongingComponent implements OnInit {
  listMission: MissionModule[];
  endTime: any;
  totalRecords: number;
  data: any;
  message: string;
  apiKey: string;
  page: number = 1;
  confirm: BsModalRef;
  accept: BsModalRef;
  decPassword: string = 'CTS-Security';
  constructor(
    private apiService: ApiService,
    private cookie: CookieService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.Decrypt(this.cookie.get('cookieLogin'));
    this.apiService.GetMissionDoing(this.apiKey).subscribe(data => {
      this.listMission = data['results'];
      this.totalRecords = this.listMission.length;
      var endDate = new Date(this.listMission[0].Stardate);
      this.endTime = endDate.setDate(endDate.getDate() + this.listMission[0].exprie);
    }
    );
  }
  CompelteMission(id: number, template: TemplateRef<any>): void {
    this.confirm = this.modalService.show(template, { class: 'confirm' });
    
    // var txt;
    // var r = confirm("Bạn có chắc chắn muốn hoàn thành nhiệm vụ?");
    // if (r == true) {
    //   this.apiService.ComleteMission(id, this.apiKey).subscribe(data => {
    //     this.listMission = data['results'];
    //     console.log(this.listMission);
    //     var r1 = alert(data['message']);
    //     window.location.href = 'home/mission';
    //   })
    // } else {
    //   txt = "You pressed Cancel!";
    // }
  }
  showConfirm(template: TemplateRef<any>, id: number) {
    this.accept = this.modalService.show(template, { class: 'confirm' });
    this.confirm.hide();
    this.apiService.ComleteMission(id, this.apiKey).subscribe(data => {
      this.message = data['message'];
      window.location.href = "/home/mission";
    })
  }
  OK() {
    window.location.href = "/home/mission";
    this.accept.hide();
  }
  private Decrypt(encryptText: string) {
    this.apiKey = CryptoJS.AES.decrypt(encryptText, this.decPassword.trim()).toString(CryptoJS.enc.Utf8);
  }
}