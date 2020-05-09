import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'ngx-cookie-service';
import * as CryptoJS from 'crypto-js';
import { from } from 'rxjs';
import { TypemissionModule } from 'src/app/models/typemission/typemission.module';

@Component({
  selector: 'app-typemission-page',
  templateUrl: './typemission-page.component.html',
  styleUrls: ['./typemission-page.component.css']
})
export class TypemissionPageComponent implements OnInit {
  listtypemission: TypemissionModule[];
  name_type:string = "";
  name2: string = "";
  name: string = "";
  apiKey: string = "admin";
  totalRecords: number;
  page: number=1;
  //decPassword:string = "CTS-Security";
  typemission: TypemissionModule;
  constructor(private apiService: ApiService, private cookieService: CookieService) {

  }
  ngOnInit(): void {
    //this.Decrypt(this.cookieService.get('cookieLogin'));
    this.apiService.GetlistTypeMission().subscribe((data: TypemissionModule[]) => {
      this.listtypemission = data;
      this.totalRecords = this.listtypemission.length;
    },
      err => {
        console.log(err);
      }
    )
  }
  private checkName(nametypes: string): Boolean {
    for(let item of this.listtypemission)
    {
      if(item.name_type_mission == nametypes){
        if(item.status == true)
        return true;
      }
    }
    return false;
  }

  createTypeMission(): void {
    var typemission = {
      id_type: null,
      name_type_mission: this.name,
      status: true,
      id_employee: 189239,
      date: new Date(),
    }
    if(this.name != "" && this.name.trim().length > 0){
      if (!this.checkName(this.name.trim())) {
        this.apiService.createTypeMission(this.apiKey, typemission).subscribe(data => {
          console.log(data['message']);
          this.ngOnInit();
        },
          err => {
            console.log(err);
          })
      }
      else alert('Tên loại nhiệm vụ đã tồn tại');
      this.ngOnInit();
    }
    else alert('Vui lòng nhập tên loại nhiệm vụ');
      this.ngOnInit();
  }
  deleteTypeMission(id: number): void {
    var result = confirm('Bạn có muốn xoá không ?');
    if (result == true) {
      this.apiService.deleteTypeMission(id, this.apiKey, this.typemission).subscribe(data => {
        console.log(data['message']);
        this.ngOnInit();
      })
    }
    else this.ngOnInit();
  }
  editTypeMission(type: TypemissionModule): void {
      this.apiService.editTypeMission(this.apiKey, type).subscribe(data => {
        console.log(data['message']);
         this.ngOnInit();
       });
    }
    
  /*private Decrypt (encryptText : string) {  
    this.apiKey = CryptoJS.AES.decrypt(encryptText, this.decPassword.trim()).toString(CryptoJS.enc.Utf8);  
  }*/
}
