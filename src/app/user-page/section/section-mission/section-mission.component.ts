import { Component, OnInit, TemplateRef } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { MissionModule } from 'src/app/models/mission/mission.module';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'ngx-cookie-service';
import { BsModalService, BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-section-mission',
  templateUrl: './section-mission.component.html',
  styleUrls: ['./section-mission.component.css']
})
export class SectionMissionComponent implements OnInit {
  apiKey: string;
  decPassword: string = "CTS-security";
  listMission: MissionModule[];
  totalRecords: string;
  page: number=1;
  detail: BsModalRef;
  missiondetail;
  constructor(private apiService: ApiService, private cookie: CookieService,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.Decrypt(this.cookie.get('cookieLogin'));
    this.apiService.GetListAreThere().subscribe(
      (data: MissionModule[])=>{
      this.listMission = data['results'];
      this.totalRecords = data['results'].length;
    });
  }

  showDetail(template: TemplateRef<any>, id: number){
    this.detail = this.modalService.show(template, {class: 'dialog-detail'});
    this.apiService.GetDetail(id).subscribe(data=>{
      this.missiondetail = data["results"][0];
    });
  }
  private Decrypt(encryptText: string){
    this.apiKey = CryptoJS.AES.decrypt(encryptText, this.decPassword.trim()).toString(CryptoJS.enc.Utf8);
  }
}
