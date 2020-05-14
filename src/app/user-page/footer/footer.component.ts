import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private cookie: CookieService) { }

  ngOnInit(): void {
  }
  logout() {
    this.cookie.delete("cookieLogin");
    window.location.href = "";
  }

}
