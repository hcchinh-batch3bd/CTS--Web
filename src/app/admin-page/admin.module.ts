import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { AdminComponent } from './admin.component';
import { AppRoutingModule } from '../app-routing.module';
import { MissionPageComponent } from './contain/mission-page/mission-page.component';
import { TypemissionPageComponent } from './contain/typemission-page/typemission-page.component';
import { AccountPageComponent } from './contain/account-page/account-page.component';
import { StatisticalPageComponent } from './contain/statistical-page/statistical-page.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    SidebarComponent, 
    NavbarComponent, 
    MenuComponent, 
    AdminComponent,
    MissionPageComponent, 
    TypemissionPageComponent, 
    AccountPageComponent, 
    StatisticalPageComponent, 
    FooterComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    AdminComponent
  ]
})
export class AdminModule { }
