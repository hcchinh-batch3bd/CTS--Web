import { Component, OnInit, Input } from '@angular/core';
import { MissionModule } from 'src/app/models/mission/mission.module';
import { ApiService } from 'src/app/api.service';
import {Router } from '@angular/router';
import {DataService} from 'src/app/data.service';

@Component({
  selector: 'app-mission-page',
  templateUrl: './mission-page.component.html',
  styleUrls: ['./mission-page.component.css']
})
export class MissionPageComponent implements OnInit  {

  listMission: MissionModule[];
  mission: MissionModule;
  decPassword:string = "CTS-Security";
  totalRecords: string;
  apiKey: string = "admin";
  page: number =1;
  idMission:number;
  edit:boolean;
  idNew: number ;

  deleteMission(id: number, status: number){
    if(status == -1)
    { 
      alert("Nhiệm vụ đã hủy từ trước");
      return;
    }
    else {
      var check = confirm('Bạn có muốn xóa không');
      if(check== true)
      { this.apiService.DeleteMission(id, this.apiKey, this.mission).subscribe(
        (data =>{        
         alert(data['message']);
          this.ngOnInit();
        })
      )}
      }    
  }
  DetailMission(id: number){
    this.dataService.idMission = id; 
    this.router.navigate(['/detail']);
  }
  onSelectNew() {
    this.dataService.idMission=null;
    this.router.navigate(['/addmission']);
  }
  onSelect(id: number, status: number) {
    if(status == -1)
    { 
      alert("Nhiệm vụ đã hủy từ trước");
      return;
    }
    else
    {this.dataService.idMission = id;  
      this.router.navigate(['/editmission']);
    }
  }
  constructor(private apiService: ApiService,
                private router: Router,
                private dataService:DataService) { 
                }

  ngOnInit(): void {
    let i;
    this.apiService.GetListMission().subscribe(
      (data: MissionModule[] )=>{
        this.listMission = data['results'],
        this.totalRecords = data['results'].lenght;          
      })
      
      }
    }