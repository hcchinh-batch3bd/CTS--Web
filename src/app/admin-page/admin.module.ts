import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { MissionPageComponent } from './contain/mission-page/mission-page.component';
import { TypemissionPageComponent } from './contain/typemission-page/typemission-page.component';
import { AccountPageComponent } from './contain/account-page/account-page.component';
import { StatisticalPageComponent } from './contain/statistical-page/statistical-page.component';
import { FooterComponent } from './footer/footer.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from './admin-page.component';



@NgModule({
  declarations: [
    SidebarComponent, 
    NavbarComponent, 
    MenuComponent,
    MissionPageComponent, 
    TypemissionPageComponent, 
    AccountPageComponent, 
    StatisticalPageComponent, 
    FooterComponent, AdminPageComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports:[
    AdminPageComponent
  ]
})
export class AdminModule { }
