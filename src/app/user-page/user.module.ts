import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { HomePageComponent } from './home-page/home-page.component';



@NgModule({
  declarations: [
  HomePageComponent],
  imports: [
    UserRoutingModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class UserModule { }
