import { Component, OnInit, TemplateRef } from '@angular/core';
import { ApiService } from '../../app/api.service';
import { SessionModule } from 'src/app/models/session/session.module';
import { CookieService } from 'ngx-cookie-service';
import {DataService} from 'src/app/data.service';
import * as CryptoJS from 'crypto-js';  
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  click = false;
  session: SessionModule;
  username: number;
  password: string ='';
  message: string;  
  encPassword: string ="CTS-Security";  
  conversionEncryptOutput: string; 
  id_employee: number;  
  ShowEror: BsModalRef;
  constructor(private apiService : ApiService, private cookieService : CookieService, private dataService:DataService
    , private modal: BsModalService) { }
  ngOnInit(): void {
    this.apiService.checkLogin
    
  }
  callAPILogin(template: TemplateRef<any>) : void
  {
    this.ShowEror = this.modal.show(template, {class:'notify'});
    const error = "Kết nối máy chủ không thành công !!!";
    this.apiService.checkLogin(this.username, this.password).subscribe(
      data => {
        if(data['results'].length > 0){
          this.session = data['results'][0];
          if(data['status']===true)
          {
            this.click = true;
            this.convertText("encrypt");
            this.cookieService.set('cookieLogin', this.conversionEncryptOutput);
            this.dataService.idEmployee = this.session.id_employee;
            if(this.session.level_employee){
              window.location.href = '/admin';
            }
            else{
              window.location.href = '/home';  
            }
            this.message = data['message'];
            
          }
        }
        else{
          this.message = data['message'];
        }
      },
      err => {
        this.message = err;
      }
    )
  }
  private convertText(conversion:string) {  
    if (conversion=="encrypt") {  
      this.conversionEncryptOutput = CryptoJS.AES.encrypt(this.session.apiKey, this.encPassword.trim()).toString();  
    }
  }
}
