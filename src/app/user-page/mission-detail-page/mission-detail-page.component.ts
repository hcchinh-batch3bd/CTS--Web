import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import { MissionModule } from 'src/app/models/mission/mission.module';
import { TypemissionModule } from 'src/app/models/typemission/typemission.module';
import { stringify } from 'querystring';

@Component({
  selector: 'app-mission-detail-page',
  templateUrl: './mission-detail-page.component.html',
  styleUrls: ['./mission-detail-page.component.css']
})
export class MissionDetailPageComponent implements OnInit {
  click=false;
  Mission: MissionModule;
  data: any;
  endTime: any ;
  id_mission: any;
  totalRecords: string;
  count: any;
  message: string;  
  constructor(
    private route:ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {  
     this.id_mission=this.route.snapshot.params['id_mission'];
    this.apiService.GetMissionDetail(this.id_mission).subscribe(data=>
      {
        this.Mission = data['results'][0];
        console.log(this.Mission);
        this.totalRecords = data['results'].length;
        console.log(data['results'].length);
        var endDate= new Date(this.Mission.Stardate);
        this.endTime=endDate.setDate(endDate.getDate()+ this.Mission.exprie);
        if(this.Mission.Count == 0)
        {
          this.count='Không giới hạn số lượng';
        }
        else
        {
          this.count = this.Mission.Count;
        }
        this.apiService.OrderMission;
      }
     );
  }
 CallApiOrder(): void{
    var txt;
    var r = confirm("Bạn có chắc chắn nhận nhiệm vụ này?");
    if (r == true) {
      const Mission: MissionModule = Object.assign({}, this.Mission);
      this.click = true;
      this.apiService.OrderMission(this.Mission.id_mission,"rhtnscmxtu",Mission).subscribe(data=>{
        this.Mission=data['results'];
        if(data['status'] = true)
        {
          console.log(data);
          var r1  = alert(data['message']);
          window.location.href = 'home/mission';
        } 
      });
      
    } else {
      txt = "You pressed Cancel!";
    }
  }
 }
