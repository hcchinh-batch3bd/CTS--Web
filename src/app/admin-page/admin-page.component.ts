import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  slide:boolean = false;
  display:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  menu(){
    this.slide = !this.slide;
    this.display = true;
  }

  wrapper(){
    if(this.slide){
      this.display = !this.display;
      this.slide = !this.slide;
    }

  }
}
