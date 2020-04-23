import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../app/api.service';
import { from } from 'rxjs';
import { SessionModule } from 'src/app/models/session/session.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  session: SessionModule;
  username: number;
  password: string ='';
  constructor(private apiService : ApiService) { }
  ngOnInit(): void {
  }
  callAPILogin() : void
  {
    this.apiService.checkLogin(this.username, this.password).subscribe((data)=>{
      console.log(data);
    });  
  }
  
}
class A {
  constructor(public result: Array<SessionModule>, public status: boolean, public message : string) {}
}
