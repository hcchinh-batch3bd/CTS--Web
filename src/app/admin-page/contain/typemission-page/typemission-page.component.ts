import { Component, OnInit, TemplateRef } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'ngx-cookie-service';
import * as CryptoJS from 'crypto-js';
import { from } from 'rxjs';
import { TypemissionModule } from 'src/app/models/typemission/typemission.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-typemission-page',
  templateUrl: './typemission-page.component.html',
  styleUrls: ['./typemission-page.component.css']
})
export class TypemissionPageComponent implements OnInit {
  listtypemission: TypemissionModule[];
  name_type: string = "";
  name2: string = "";
  name: string = "";
  apiKey: string = "admin";
  totalRecords: number;
  page: number = 1;
  editmission: BsModalRef;
  editmission2: BsModalRef;
  name_type_mission: string;
  detail: TypemissionModule;
  message: string;
  //decPassword:string = "CTS-Security";
  typemission: TypemissionModule;
  constructor(private apiService: ApiService, private cookieService: CookieService
    , private modal: BsModalService) {

  }
  ngOnInit(): void {
    //this.Decrypt(this.cookieService.get('cookieLogin'));
    this.apiService.GetlistTypeMission().subscribe((data: TypemissionModule[]) => {
      this.listtypemission = data;
      this.totalRecords = data.length;
    },
      err => {
        console.log(err);
      }
    )
  }
  private checkName(nametypes: string): Boolean {
    for (let item of this.listtypemission) {
      if (item.name_type_mission == nametypes) {
        if(item.status == true)
        return true;
      }
    }
    return false;
  }

  createTypeMission(template: TemplateRef<any>): void {
    var typemission = {
      id_type: null,
      name_type_mission: this.name,
      status: true,
      id_employee: 189239,
      date: new Date(),
    }
    this.editmission2 = this.modal.show(template, {class: 'notify'});
    if (this.name.trim().length > 0) {
      if (!this.checkName(this.name.trim())) {
        this.apiService.createTypeMission(this.apiKey, typemission).subscribe(data => {
          this.message = data['message']
          this.ngOnInit();
          this.name ="";
        },
          err => {
            console.log(err);
          })
      }
      else 
        {
          this.message = 'Tên loại nhiệm vụ đã tồn tại!';
          this.name ="";
        }
      
    }
    else {
      this.message = 'Vui lòng nhập tên loại nhiệm vụ!';
      this.name ="";
    }
  }
  deleteTypeMission(id: number): void {
    var result = confirm('Bạn có chắc chắn muốn xoá không ?');
    if (result == true) {
      this.apiService.deleteTypeMission(id, this.apiKey, this.typemission).subscribe(data => {
        console.log(data['message']);
        alert('Xoá loại nhiệm vụ thành công');
        this.ngOnInit();
      })
    }
    else this.ngOnInit();
  }
  editTypeMission(type: number, template: TemplateRef<any>): void {
    this.editmission = this.modal.show(template, { class: 'edit' });
    this.apiService.GetDetailType(type).subscribe((data: TypemissionModule) => {
      this.detail = data[0];
    });
  }
  Edit(template: TemplateRef<any>) {
    this.editmission2 = this.modal.show(template, { class: 'notify' });
    if (!this.checkName(this.detail.name_type_mission)) {
      if (this.detail.name_type_mission.trim().length > 0) {
        this.apiService.editTypeMission(this.apiKey, this.detail).subscribe(data => {
          this.message = data["massage"];
          this.editmission.hide();
          this.ngOnInit();
        });
      } else {
        this.message = "Tên loại nhiệm vụ không hợp lệ!";
      }
    }else{
      this.message = "Tên loại nhiệm vụ đã tồn tại!";
    }
  }

  /*private Decrypt (encryptText : string) {  
    this.apiKey = CryptoJS.AES.decrypt(encryptText, this.decPassword.trim()).toString(CryptoJS.enc.Utf8);  
  }*/
}
