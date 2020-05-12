import { Component, OnInit } from '@angular/core';
import { MissionModule } from 'src/app/models/mission/mission.module';
import { ApiService } from 'src/app/api.service';
import { element } from 'protractor';


@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {
  listMission: MissionModule[];
  apiKey: string;
  totalRecords: string;
  page: number=1;
  decPassword:string = "CTS-Security";
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
      this.apiService.GetListMissionavailable().subscribe(
        (data: MissionModule[])=>{
          this.listMission = data['results'];
          this.listMission.forEach(element=>{
            if(element.point == 100)
            console.log(element);
          })
          this.totalRecords = data['results'].length;
          console.log(data['results'].length);
         // console.log(this.listMission[0].status);
        }
      );
    
  }

  

}
