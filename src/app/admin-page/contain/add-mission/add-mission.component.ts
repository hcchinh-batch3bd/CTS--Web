import { Component, OnInit, Input } from '@angular/core';
import {TypemissionModule} from 'src/app/models/typemission/typemission.module';
import { ApiService } from 'src/app/api.service';
import { MissionModule } from 'src/app/models/mission/mission.module';

@Component({
  selector: 'app-add-mission',
  templateUrl: './add-mission.component.html',
  styleUrls: ['./add-mission.component.css']
})
export class AddMissionComponent implements OnInit {
  @Input() idMission: number
  name:string ="";
  apiKey: string = "admin";
  id_employee: number =189201;
  listTypeMission: TypemissionModule[];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.GetListTypeMission().subscribe((data: TypemissionModule[])=>
    {
    this.listTypeMission = data;
    },
    err => {
      console.log(err);
    }
    )
  }
  addMission(name: string, point: string, exprie: string,describe: string, count: string,id_type: number): void
  { 
    name = name.trim();
    describe = describe.trim();
    if( name && point && exprie  && describe )
    {
      if(!isNaN(Number(point)) && !isNaN(Number(exprie)) && !isNaN(Number(count)))
      { 
        if(Number(point) < 1 || Number(point) > 1000 )
        { 
          alert("Điểm của nhiệm vụ phải từ 1-1000 ");
        }
        else if(Number(exprie) > 30 )
        { 
          alert("Số ngày hết hạn phải từ 0-30.");
        }
        else if(Number(count) > 100 )
        { 
          alert("Số lượng nhiệm vụ phải từ 0-100.\n*Với 0: Không giới hạn");
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
          newMission.id_employee = this.id_employee, 
          this.apiService.CreateMission('admin',newMission).subscribe(data => {
            alert(data['message']);
            this.ngOnInit();
        }) 
        }
      }
      else
      {
        alert("Vui lòng nhập dữ liệu là số nguyên !! ");
        return;
     } 
    }
   else alert("Chưa nhập đủ thông tin");
  }
  


}