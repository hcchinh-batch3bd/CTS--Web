import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/api.service';
import { AccountModule } from 'src/app/models/account/account.module';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-statistical-page',
  templateUrl: './statistical-page.component.html',
  styleUrls: ['./statistical-page.component.css']
})
export class StatisticalPageComponent implements OnInit {
  listEmployee: AccountModule[];
  i: Number = 1;
  apiKey:string = "admin";
  fileName= 'ExcelSheet.xlsx';  
  constructor(private apiService: ApiService) { }
  ExportExcel(): void 
    {
       let element = document.getElementById('excel-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
       XLSX.writeFile(wb, this.fileName);
			
    }
  ngOnInit() {
   
       this.apiService.getRankEmployee(this.apiKey).subscribe(
         (data: AccountModule[])=>this.listEmployee = data['results']
       )
       }
  }
