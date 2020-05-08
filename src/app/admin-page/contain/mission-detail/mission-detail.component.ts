import { Component, OnInit } from '@angular/core';
import { MissionModule } from 'src/app/models/mission/mission.module';
import { ApiService } from 'src/app/api.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-mission-detail',
  templateUrl: './mission-detail.component.html',
  styleUrls: ['./mission-detail.component.css']
})
export class MissionDetailComponent implements OnInit {
  idMission:number;
  mission: MissionModule;

  constructor(private apiService: ApiService,
            private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.idMission = id;

    this.apiService.GetDetailMission(this.idMission).subscribe(
      (data: MissionModule[] )=>{
        this.mission = data['results'];
      });
  }

}
