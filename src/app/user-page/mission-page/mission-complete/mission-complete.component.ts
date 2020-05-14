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
  apiKey: string;
  decPassword: string = "CTS-Security";
  listComplete: Object[];
  totalComplete: number;
  pageComplete: number = 1;
  constructor(private apiService: ApiService, private cookie: CookieService) { }

  ngOnInit(): void {
    this.Decrypt(this.cookie.get('cookieLogin'));
    this.apiService.GetLisComplete(this.apiKey).subscribe((data:Object[])=>{
      this.listComplete = data['results'];
      this.totalComplete = this.listComplete.length;
    });
  }
  
  private Decrypt(encryptText: string){
    this.apiKey = CryptoJS.AES.decrypt(encryptText, this.decPassword.trim()).toString(CryptoJS.enc.Utf8);
  }
}
