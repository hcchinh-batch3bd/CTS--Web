import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private cookie: CookieService) { }

  ngOnInit(): void {
  }
  
  logout() {
    this.cookie.delete("cookieLogin");
  }
}
