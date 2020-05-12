import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { MissionModule } from 'src/app/models/mission/mission.module';
import { TypemissionModule } from 'src/app/models/typemission/typemission.module';
import { MydialogComponent } from 'src/app/mydialog/mydialog.component';


@Component({
  selector: 'app-mission-donging',
  templateUrl: './mission-donging.component.html',
  styleUrls: ['./mission-donging.component.css']
})
export class MissionDongingComponent implements OnInit {
  listMission: MissionModule[];
  endTime: any;
  totalRecords: string;
  data: any;
  message: string;
  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.apiService.GetMissionDoing("rhtnscmxtu").subscribe(data=>
      {
        this.listMission = data['results'];
        console.log(this.listMission);
        this.totalRecords = data['results'].length;
        console.log(data['results'].length);
        var endDate= new Date(this.listMission[0].Stardate);
        this.endTime=endDate.setDate(endDate.getDate()+ this.listMission[0].exprie);
      }
    );
  }
  CompelteMission(): void{
    var txt;
    var r = confirm("Bạn có chắc chắn muốn hoàn thành nhiệm vụ?");
    if (r == true) {
      this.apiService.ComleteMission(this.listMission[0].id_mission,"rhtnscmxtu",this.listMission[0]).subscribe(data=>
      {
        this.listMission = data['results'];
        console.log(data);
        var r1  = alert(data['message']);
        window.location.href='home/mission';
      })
    } else {
      txt = "You pressed Cancel!";
    }
  }
   }
