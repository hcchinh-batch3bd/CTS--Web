import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-mission-detail-page',
  templateUrl: './mission-detail-page.component.html',
  styleUrls: ['./mission-detail-page.component.css']
})
export class MissionDetailPageComponent implements OnInit {
  private routeSub: Subscription;
  private id: number;
  mission;
  constructor(private route: ActivatedRoute, private apiService:ApiService) { }

  ngOnInit(): void {
    this.mission = new Object();
    this.routeSub = this.route.params.subscribe(params=>{
      this.id = params['id'];
    });
    this.apiService.GetDetailMission(this.id).subscribe(data=>{
      this.mission = data['results'][0];
    });
  }

}