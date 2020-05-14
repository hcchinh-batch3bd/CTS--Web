import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { SectionMissionComponent } from './section/section-mission/section-mission.component';
import { SectionAccountComponent } from './section/section-account/section-account.component';
import { SectionStatisticalComponent } from './section/section-statistical/section-statistical.component';
import { SectionComponent } from './section/section.component';
import { MissionPageComponent } from './mission-page/mission-page.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { MissionListComponent } from './mission-page/mission-list/mission-list.component';
import { MissionDongingComponent } from './mission-page/mission-donging/mission-donging.component';
import { MissionCompleteComponent } from './mission-page/mission-complete/mission-complete.component';
import{NgxPaginationModule} from 'ngx-pagination';
import { from } from 'rxjs';
import { ReversePipe } from '../Pipes/reserve.pipes';
import { AddMissionComponent } from './mission-page/add-mission/add-mission.component';



@NgModule({
  declarations: [
  HomePageComponent,
  HeaderComponent,
  FooterComponent,
  MenuComponent,
  SectionMissionComponent,
  SectionAccountComponent,
  SectionStatisticalComponent,
  SectionComponent,
  MissionPageComponent,
  AccountPageComponent,
  MissionListComponent,
  MissionDongingComponent,
  MissionCompleteComponent,
  AddMissionComponent,
],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgxPaginationModule,
    FormsModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class UserModule { }
