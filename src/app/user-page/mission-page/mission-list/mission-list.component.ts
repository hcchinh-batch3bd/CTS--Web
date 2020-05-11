import { Component, OnInit } from '@angular/core';
import { MissionModule } from 'src/app/models/mission/mission.module';
import { ApiService } from 'src/app/api.service';


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
    this.apiService.GetListMission(this.apiKey).subscribe(
      (data: MissionModule[])=>{
        this.listMission = data['results'];
        this.totalRecords = data['results'].length;
        console.log(data['results'].length);
      }
    );
  }

  

}
