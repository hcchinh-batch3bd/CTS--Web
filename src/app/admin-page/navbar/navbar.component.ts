import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { MissionModule } from 'src/app/models/mission/mission.module';
import { element } from 'protractor';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //data: any;
  Mission: MissionModule[];
  //id =this.Mission[0].id_mission;
  constructor(private apiService: ApiService,) { }

  ngOnInit(): void {
    this.apiService.loadNotify().subscribe(data=>
      {
        this.Mission = data['results'];
         console.log(this.Mission);
          
        
        //var r1  = alert("Chấp nhận ");
      })
    
  }
  // navabar(id):void{
  //   this.Mission.forEach(element => {
  //     if(element.status == 0)
  //     {
  //       console.log(element.id_mission);
  //     }
      
  //   });
  // }

  Confirm(id:any): void{
        this.apiService.CofirmMission(id,"BSXLENESQH").subscribe(data=>
          {
            this.Mission = data['results'];
            alert(data['message']);
            this.ngOnInit();
          })
      }
  close(id: any): void{
    this.apiService.ClearMission(id,"BSXLENESQH").subscribe(data=>
      {
        this.Mission = data['results'];
           alert(data['message']);
           this.ngOnInit();
      })
  }
}
