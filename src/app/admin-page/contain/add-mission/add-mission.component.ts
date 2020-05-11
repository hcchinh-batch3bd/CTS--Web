import { Component, OnInit, TemplateRef } from '@angular/core';
import {TypemissionModule} from 'src/app/models/typemission/typemission.module';
import { ApiService } from 'src/app/api.service';
import { MissionModule } from 'src/app/models/mission/mission.module';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from 'src/app/data.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import * as CryptoJS from 'crypto-js';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-add-mission',
  templateUrl: './add-mission.component.html',
  styleUrls: ['./add-mission.component.css']
})
export class AddMissionComponent implements OnInit {
  decPassword:string = "CTS-Security";
  idMission: number;
  name:string ="";
  apiKey: string 
  idEmployee: number;
  listTypeMission: TypemissionModule[];
  mission: MissionModule;
  listMission: MissionModule[];
  nameMission:string ;
  i: number;
  checkId: boolean = false;
  listId: number[] = []; 
  totalId:string;
  idNew: number;
  Name: string;
  message: string;
  listName: string[] =[];
  ShowEror:BsModalRef;
  constructor(private apiService: ApiService,
              private router : Router,
              private dataService:DataService,
              private modal: BsModalService,             
              private cookieService: CookieService ) { 
              }
    
  ngOnInit(): void {
    var i;
    this.idMission = this.dataService.idMission;
    this.idEmployee = this.dataService.idEmployee;
    this.Decrypt(this.cookieService.get('cookieLogin'));
    this.apiService.GetListMission(this.apiKey).subscribe(
      (data: MissionModule[] )=>{
        this.listMission = data['results'];
        this.totalId = data['results'].length;
        for(i=0; i< Number( this.totalId)  ; i++ )
          {
            this.listId.push(Number(data['results'][i]?.id_mission));
            this.listId.forEach(item => {
              if(item == this.idMission)
              { 
                this.checkId = true;
              }
            });
          }           
        });
  
    this.apiService.GetlistTypeMission().subscribe((data: TypemissionModule[])=>
    {
    this.listTypeMission = data;
    },
    err => {
      console.log(err);
    });
    this.apiService.GetDetail(this.idMission).subscribe(
      (data: MissionModule[] )=>{
        this.mission = data['results'];
      });
      
  }

  addMission(name: string, point: string, exprie: string,describe: string, count: string,id_type: number, template: TemplateRef<any>): void
  { 
    this.ShowEror = this.modal.show(template, { class: 'notify' });
    name = name.trim();
    describe = describe.trim();
   if( name && count && point && exprie  && describe )
    {
      if(!isNaN(Number(point)) && !isNaN(Number(exprie)) && !isNaN(Number(count)))
      { 
        if(Number(point) < 1 || Number(point) > 1000 )
        { 
          this.message="Điểm của nhiệm vụ phải từ 1-1000 ";
        }
        else if(Number(exprie) > 30 )
        { 
          this.message="Số ngày hết hạn phải từ 0-30.";
        }
        else if(Number(count) > 100 )
        { 
          this.message="Số lượng nhiệm vụ phải từ 0-100.\n*Với 0: Không giới hạn";
        }
        else { 
          const newMission: MissionModule = new MissionModule(); 
          newMission.id_mission =  null;
          newMission.name_mission=name,
          newMission.Stardate = new Date(),
          newMission.point =  Number(point),
          newMission.exprie = Number(exprie),
          newMission.Count = Number(count),
          newMission.describe =describe,
          newMission.status = 1,
          newMission.id_type = Number(id_type),
          newMission.id_employee = this.idEmployee,
          this.apiService.CreateMission(this.apiKey,newMission).subscribe(data => {    
            this.message=(data['message']);
            console.log(this.apiKey);
            this.router.navigate(['/admin/mission']);
            this.ngOnInit();
        }) 
        }
      }
      else
      {
        this.message="Vui lòng nhập dữ liệu là số nguyên !! ";
        return;
     } 
    }
   else this.message="Chưa nhập đủ thông tin";
  }

editMission(idMission:string, name: string, date: Date, point: string, exprie: string,describe: string, count: string,id_type: number,id_employee: number, template: TemplateRef<any>):void 
{ 
  this.ShowEror = this.modal.show(template, { class: 'notify' });
  name = name.trim();
  describe = describe.trim();
    if( name && count && describe )
    { 
      if(!isNaN(Number(count)))
      {   
        if(Number(count) > 100 )
        { 
          this.message=("Số lượng nhiệm vụ phải từ 0-100.\n*Với 0: Không giới hạn");
        }
        else { 
          const editMission: MissionModule = new MissionModule(); 
          editMission.id_mission = Number(idMission);
          editMission.name_mission=name,
          editMission.Stardate = date,
          editMission.point =  Number(point),
          editMission.exprie = Number(exprie),
          editMission.Count = Number(count),
          editMission.describe =describe,
          editMission.status = 1,
          editMission.id_type = Number(id_type),
          editMission.id_employee = id_employee, 
          this.apiService.EditMission(this.apiKey,editMission).subscribe(data => {
            this.message=(data['message']);
            this.router.navigate(['/admin/mission']);
            this.ngOnInit();
        }) 
        }
      }
      else
      {
        this.message=("Vui lòng nhập dữ liệu là số nguyên !! ");
        return;
      } 
    }
   else this.message=("Chưa nhập đủ thông tin");
}  
private Decrypt (encryptText : string) {  
  this.apiKey = CryptoJS.AES.decrypt(encryptText, this.decPassword.trim()).toString(CryptoJS.enc.Utf8);

}

}