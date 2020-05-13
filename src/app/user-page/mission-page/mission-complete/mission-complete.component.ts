import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { MissionModule } from 'src/app/models/mission/mission.module';
import { TypemissionModule } from 'src/app/models/typemission/typemission.module';
import { MissionCompleteModule } from 'src/app/models/missioncomple/missioncomplete';
//import { type } from 'os';

@Component({
  selector: 'app-mission-complete',
  templateUrl: './mission-complete.component.html',
  styleUrls: ['./mission-complete.component.css']
})
export class MissionCompleteComponent implements OnInit {
  totalRecords: string;
  listMission: MissionCompleteModule[];
  endTime: any;
 // data: any;
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.GetMissionComplete("rhtnscmxtu").subscribe(data=>
      {
        this.listMission = data['results'];
        console.log(this.listMission);
        this.totalRecords = data['results'].length;
        console.log(data['results'].length);
      }
    );
  }
}
