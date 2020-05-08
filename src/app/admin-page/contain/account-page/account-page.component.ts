import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { AccountModule } from 'src/app/models/account/account.module';
import { CookieService } from 'ngx-cookie-service';
import * as CryptoJS from 'crypto-js';  

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {
  totalRecords: number;
  page: number=1;
  listaccount: AccountModule[];
  name="p.name_employee";
  decPassword:string = "CTS-Security";
  apiKey: string;
  account: AccountModule;
  constructor(private apiService : ApiService, private cookieSerive: CookieService) { }
  

  ngOnInit(): void {
    this.Decrypt(this.cookieSerive.get('cookieLogin'));
    this.apiService.GetListAccount('admin').subscribe(data=>
     {
       this.listaccount = data['results'];
       this.totalRecords = this.listaccount.length;
       console.log(this.apiKey);
       console.log(this.listaccount);
     },
     err => {
       console.log(err);
     }
     )
     
   } 
  deleteAC(id:number, statuss:string)
  {
    if(statuss == "Nghỉ việc"){
      alert("Tài khoản này đã bị xoá trước đó");
      return ;
    }
    else
    {
      var result1 = confirm("Bạn có chắc chắn xoá tài khoản này không?");
      if(result1){
        this.apiService.DeleteAccount(id,'admin',this.account).subscribe((data=>
          {
            alert("Xoá tài khoản thành công");
            // alert(data['message']);
            console.log(data['message']);        
            this.ngOnInit();
          })
        )
      }
      
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

