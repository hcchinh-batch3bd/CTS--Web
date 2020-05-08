import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { MissionPageComponent } from './contain/mission-page/mission-page.component';
import { AccountPageComponent } from './contain/account-page/account-page.component';
import { StatisticalPageComponent } from './contain/statistical-page/statistical-page.component';
import { FooterComponent } from './footer/footer.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from './admin-page.component';
import { FormsModule } from '@angular/forms';
import { AddMissionComponent } from 'src/app/admin-page/contain/add-mission/add-mission.component';
import { NgxPaginationModule} from 'ngx-pagination';
import {ReversePipe } from 'src/app/Pipes/reserve.pipes';
import { MissionDetailComponent } from './contain/mission-detail/mission-detail.component';
import {DataService} from 'src/app/data.service';

@NgModule({
  declarations: [
    SidebarComponent, 
    NavbarComponent, 
    MenuComponent,
    MissionPageComponent, 
    AccountPageComponent, 
    StatisticalPageComponent, 
    FooterComponent, AdminPageComponent, AddMissionComponent,ReversePipe, MissionDetailComponent
    ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [DataService],
  exports:[
    AdminPageComponent
  ]
})
export class AdminModule { }
