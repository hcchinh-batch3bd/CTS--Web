import { Component, OnInit, Input } from '@angular/core';
import {TypemissionModule} from 'src/app/models/typemission/typemission.module';
import { ApiService } from 'src/app/api.service';
import { MissionModule } from 'src/app/models/mission/mission.module';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-add-mission',
  templateUrl: './add-mission.component.html',
  styleUrls: ['./add-mission.component.css']
})
export class AddMissionComponent implements OnInit {
  idMission: number
  name:string ="";
  apiKey: string = "admin";
  id_employee: number =189201;
  listTypeMission: TypemissionModule[];
  mission: MissionModule;
  listMission: MissionModule[];
  nameMission:string ;
  i: number;
  checkId: boolean = false;
  listId: number[] = []; 
  totalId:string;
  idNew: number;
  constructor(private apiService: ApiService,
              private activatedRoute: ActivatedRoute,
              private router : Router              
              ) { }
    
  ngOnInit(): void {
    var i;
    let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.idMission = id;
    this.apiService.GetListMission().subscribe(
      (data: MissionModule[] )=>{
        this.listMission = data['results'];
        this.totalId = data['results'].length;
        for(i=0; i< Number( this.totalId)  ; i++ )
          {
            this.listId.push(Number(data['results'][i]?.id_mission));
            this.listId.forEach(item => {
              if(item == this.idMission)
              { 
                this.checkId = true;
              }
            });
            this.listMission.forEach(item => {
              this.idNew = item.id_mission+1;
            })
            if(this.idNew == this.idMission )
              { 
              this.checkId = true;
              this.router.navigate(['/addmission',this.idNew]);
              }
          }
          console.log(this.checkId); 
         if(isNaN(this.idMission) || !this.checkId)
          {
              alert('không tồn tại');
            this.router.navigate(['/mission']);
            }              
        });
  
    this.apiService.GetListTypeMission().subscribe((data: TypemissionModule[])=>
    {
    this.listTypeMission = data;
    },
    err => {
      console.log(err);
    });
    this.apiService.GetDetailMission(this.idMission).subscribe(
      (data: MissionModule[] )=>{
        this.mission = data['results'];
      });
      
  }    
  addMission(name: string, point: string, exprie: string,describe: string, count: string,id_type: number): void
  { 
    name = name.trim();
    describe = describe.trim();
    if( name && count && point && exprie  && describe )
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
            this.router.navigate(['/mission']);
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

editMission(idMission:string, name: string, date: Date, point: string, exprie: string,describe: string, count: string,id_type: number):void 
{ 
  name = name.trim();
    describe = describe.trim();
    if( name && count && describe )
    { 
      if(!isNaN(Number(count)))
      {   
        if(Number(count) > 100 )
        { 
          alert("Số lượng nhiệm vụ phải từ 0-100.\n*Với 0: Không giới hạn");
        }
        else { 
          const editMission: MissionModule = new MissionModule(); 
          editMission.id_mission = Number(idMission);
          editMission.name_mission=name,
          editMission.Stardate = date,
          editMission.point =  Number(point),
          editMission.exprie = Number(exprie),
          editMission.Count = Number(count),
          editMission.describe =describe,
          editMission.status = 1,
          editMission.id_type = Number(id_type),
          editMission.id_employee = this.id_employee, 
          this.apiService.EditMission('admin',editMission).subscribe(data => {
            alert(data['message']);
            this.router.navigate(['/mission']);
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