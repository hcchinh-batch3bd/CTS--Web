import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  show = false;
  menu = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleDisplay() {
    this.show = !this.show;
  }
  menuShow(){
    this.menu = !this.menu;
  }
}
