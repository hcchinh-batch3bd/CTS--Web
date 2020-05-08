import { Component, OnInit } from '@angular/core';
import { MissionModule } from 'src/app/models/mission/mission.module';
import { ApiService } from 'src/app/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from 'src/app/data.service';

@Component({
  selector: 'app-mission-detail',
  templateUrl: './mission-detail.component.html',
  styleUrls: ['./mission-detail.component.css']
})
export class MissionDetailComponent implements OnInit {
  idMission:number;
  mission: MissionModule;

  constructor(private apiService: ApiService,
            private dataService: DataService ) { }

  ngOnInit(): void {
  
    this.idMission = this.dataService.idMission;
    this.apiService.GetDetailMission(this.idMission).subscribe(
      (data: MissionModule[] )=>{
        this.mission = data['results'];
      });
  }

}
