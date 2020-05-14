import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { AccountModule } from 'src/app/models/account/account.module';
import * as XLSX from 'xlsx';
import { CookieService } from 'ngx-cookie-service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-statistical-page',
  templateUrl: './statistical-page.component.html',
  styleUrls: ['./statistical-page.component.css']
})
export class StatisticalPageComponent implements OnInit {
  listEmployee: AccountModule[];
  i: Number = 1;
  apiKey: string;
  fileName = 'Rank-Employee.xlsx';
  totalRecords: string;
  page: number = 1;
  totalMission: number = 0;
  totalAccount: number = 0;
  totalComplete: number = 0;
  totalDel: number = 0;
  decPassword: string = 'CTS-Security';
  constructor(private apiService: ApiService, private cookie: CookieService) { }
  ExportExcel(): void {
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName);

  }

  ngOnInit() {
    this.Decrypt(this.cookie.get("cookieLogin"));
    this.apiService.getRankEmployee(this.apiKey).subscribe(
      (data: AccountModule[]) => {
        this.listEmployee = data['results'];
      }
    )
    this.apiService.GetListAccount(this.apiKey).subscribe(data=>{
      this.totalAccount = data['results'].length;
    })
    this.apiService.GetLisComplete(this.apiKey).subscribe(data =>{
      this.totalComplete = data["results"].length;
    });
    this.apiService.GetListMission(this.apiKey).subscribe(data=>{
      data['results'].forEach(element => {
        if(element.status == 0){
          this.totalMission++;
        }
        if(element.status == -1){
          this.totalDel++;
        }
      });
    })
  }
  private Decrypt(encryptText: string) {
    this.apiKey = CryptoJS.AES.decrypt(encryptText, this.decPassword.trim()).toString(CryptoJS.enc.Utf8);
  }
}

