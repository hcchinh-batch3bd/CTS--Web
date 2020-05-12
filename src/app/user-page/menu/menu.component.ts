import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  show = false;
  menu = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  toggleDisplay() {
    this.show = !this.show;
  }
  menuShow(){
    this.menu = !this.menu;
  }
  Logout(): void {
    localStorage.removeItem('userToken');
    this.router.navigate(['login']);
  }
}
