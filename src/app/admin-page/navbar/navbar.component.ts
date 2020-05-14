import { Component, OnInit, TemplateRef } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { MissionModule } from 'src/app/models/mission/mission.module';
import { element } from 'protractor';
import { NgControl } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import * as CryptoJS from 'crypto-js';
import { CookieService } from 'ngx-cookie-service';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  Mission: MissionModule[];
  totalNotify: number = 0;
  apiKey: string;
  decPassword: string = "CTS-Security";
  message: string;
  showConfirm: BsModalRef
  constructor(private apiService: ApiService, private cookie: CookieService, private modal: BsModalService) { }

  ngOnInit(): void {
    this.Decrypt(this.cookie.get("cookieLogin"));
    this.apiService.loadNotify().subscribe(data=>
      {
        this.Mission = data['results'];
        this.Mission.forEach(element=>{
          if(element.status == 0)
            this.totalNotify++;
        });
      })
  }

  Confirm(id:any, template: TemplateRef<any>): void{
      this.showConfirm = this.modal.show(template, {class:'confirm'});
        this.apiService.CofirmMission(id, this.apiKey).subscribe(data=>
          {
            this.Mission = data['results'];
            this.message = data['message'];
            window.location.reload();
          })
      }
  close(id: any, template: TemplateRef<any>): void{
    this.showConfirm = this.modal.show(template, {class:'confirm'});
    this.apiService.ClearMission(id, this.apiKey).subscribe(data=>
      {
        this.Mission = data['results'];
           this.message = data['message'];
           window.location.reload;
           this.totalNotify--;
      })
  }
  private Decrypt (encryptText : string) {  
    this.apiKey = CryptoJS.AES.decrypt(encryptText, this.decPassword.trim()).toString(CryptoJS.enc.Utf8);  
  }
}
