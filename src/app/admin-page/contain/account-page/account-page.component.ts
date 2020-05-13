import { Component, OnInit, TemplateRef } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { AccountModule } from 'src/app/models/account/account.module';
import { CookieService } from 'ngx-cookie-service';
import * as CryptoJS from 'crypto-js';  
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {

  listaccount: AccountModule[];
  name="p.name_employee";
  decPassword:string = "CTS-Security";
  apiKey: string;
  totalRecords: number;
  page: number=1;
  delete: BsModalRef;
  confirm: BsModalRef;
  message: string;
  constructor(private apiService : ApiService, private cookieSerive: CookieService,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.Decrypt(this.cookieSerive.get('cookieLogin'));
    this.apiService.GetListAccount(this.apiKey).subscribe(data=>
     {
       this.listaccount = data['results'];
       this.totalRecords = this.listaccount.length;
     },
     err => {
       console.log(err);
     }
     )
     
   } 
  deleteAC( template: TemplateRef<any>)
  {
    this.delete = this.modalService.show(template, {class: 'delete'});
  }
  OK(id:number, status:string, template: TemplateRef<any>){
    this.confirm = this.modalService.show(template, {class: 'notify'});
    this.delete.hide();
    if(status == "Nghỉ việc"){
      this.message = "Tài khoản này đã bị xoá trước đó";
    }
    else
    {
        this.apiService.DeleteAccount(id,this.apiKey).subscribe(data=>
          {
            this.message = "Xoá tài khoản thành công";
            this.ngOnInit();
          }
        )
    }
  }
  getAge(a: Date):number{
    let b = new Date(a); 
    let c = new Date().getFullYear() -b.getFullYear(); 
    return c;
  }
  private Decrypt (encryptText : string) {  
    this.apiKey = CryptoJS.AES.decrypt(encryptText, this.decPassword.trim()).toString(CryptoJS.enc.Utf8);  
  }  
}

