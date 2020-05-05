import { Component, OnInit, Input } from '@angular/core';
import { MissionModule } from 'src/app/models/mission/mission.module';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-mission-page',
  templateUrl: './mission-page.component.html',
  styleUrls: ['./mission-page.component.css']
})
export class MissionPageComponent implements OnInit {

  listMission: MissionModule[];
  mission: MissionModule;
  decPassword:string = "CTS-Security";
  totalRecords: string;
  apiKey: string = "admin";
  page: number =1;
  idMission:number;
  edit:boolean
  deleteMission(id: number, status: number){
    if(status == -1)
    { 
      alert("Nhiệm vụ đã hủy từ trước");
      return;
    }
    else {this.apiService.DeleteMission(id, this.apiKey, this.mission).subscribe(
      (data =>{        
       alert(data['message']);
        this.ngOnInit();
      })
    )}    
  }
  EditMission(idMission: number, edit: boolean): void
  { 
    this.idMission = idMission;
    this.edit = edit;
    console.log(idMission);
  }  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    
    this.apiService.GetListMission().subscribe(
      (data: MissionModule[] )=>{
        this.listMission = data['results'];
        this.totalRecords = data['results'].length;
      })
     
      }
  

}
