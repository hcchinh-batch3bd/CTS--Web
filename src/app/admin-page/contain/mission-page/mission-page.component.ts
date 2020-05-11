import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { MissionModule } from 'src/app/models/mission/mission.module';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import * as CryptoJS from 'crypto-js';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-mission-page',
  templateUrl: './mission-page.component.html',
  styleUrls: ['./mission-page.component.css']
})
export class MissionPageComponent implements OnInit {

  listMission: MissionModule[];
  mission: MissionModule;
  decPassword: string = "CTS-Security";
  totalRecords: string;
  apiKey: string ;
  page: number = 1;
  idMission: number;
  edit: boolean;
  idNew: number;
  message: string;
  detailMission: BsModalRef;
  confirmDelete: BsModalRef;
  showMessage: BsModalRef;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private dataService: DataService,
    private modal: BsModalService,
    private cookieService: CookieService) {
  }
  ngOnInit(): void {
    this.Decrypt(this.cookieService.get('cookieLogin'));
    let i;
    this.apiService.GetListMission(this.apiKey).subscribe((data: MissionModule[]) => {
        this.listMission = data['results'],
        this.totalRecords = data['results'].lenght;
      });
  }

  showConfirm( template: TemplateRef<any> )
  { 
    this.confirmDelete = this.modal.show(template, {class: 'delete'});
  }

  deleteMission(id: number, status: number, template: TemplateRef<any>  ) {
    this.confirmDelete.hide();
    this.showMessage = this.modal.show(template, {class: 'notify'});
    if (status == -1) {
      this.message= "Nhiệm vụ đã hủy từ trước";
      return;
    }
    else {
        this.apiService.DeleteMission(id, this.apiKey, this.mission).subscribe(
          (data => {
            this.message=(data['message']);
            this.router.navigate(['/mission']);
            this.ngOnInit();
          })
        )
    }
  }
  DetailMission(id: number, template: TemplateRef<any>) {
    this.detailMission = this.modal.show(template, { class: 'a' });
    this.apiService.GetDetail(id).subscribe((data: MissionModule) => {
      this.mission = data['results'][0];
    });
  }
  onSelectNew() {
    this.dataService.idMission = null;
    this.router.navigate(['admin/add-mission']);
  }

  onSelect(id: number, status: number, template: TemplateRef<any> ) {
    if (status >= 0) {
      this.dataService.idMission = id;
      this.router.navigate(['admin/edit-mission']);
    }
    else {
      this.showMessage = this.modal.show(template, {class: 'notify'});
      this.message=("Nhiệm vụ đã hủy từ trước");
      return;
    }
  }
  private Decrypt (encryptText : string) {  
    this.apiKey = CryptoJS.AES.decrypt(encryptText, this.decPassword.trim()).toString(CryptoJS.enc.Utf8);  
  }
}