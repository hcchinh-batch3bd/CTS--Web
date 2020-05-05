import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes} from '@angular/router';
import { from } from 'rxjs';
import { HomePageComponent } from './home-page/home-page.component';
import { SectionComponent } from './section/section.component';
import { MissionPageComponent } from '../user-page/mission-page/mission-page.component';
import { AccountPageComponent } from '../user-page/account-page/account-page.component';
import { MissionDetailPageComponent } from './mission-detail-page/mission-detail-page.component';

const routes: Routes = [
  { path:'', component:HomePageComponent, children:[
    {path: '', component: SectionComponent},
    {path: 'mission', component: MissionPageComponent},
    {path: 'account', component: AccountPageComponent},
    {path: ':id/detail', component:MissionDetailPageComponent}
  ]}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
