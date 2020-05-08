import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissionPageComponent } from './contain/mission-page/mission-page.component';
import { AdminPageComponent } from './admin-page.component';
import { StatisticalPageComponent } from './contain/statistical-page/statistical-page.component';
import { AccountPageComponent } from './contain/account-page/account-page.component';
import {AddMissionComponent} from './contain/add-mission/add-mission.component';
import{MissionDetailComponent} from './contain/mission-detail/mission-detail.component';

const routes: Routes = [
  {
    path: '', component: AdminPageComponent, children: [
      { path: '', component: StatisticalPageComponent },
      { path: 'statistical', component: StatisticalPageComponent },
      { path: 'mission', component: MissionPageComponent },
      { path: 'account', component: AccountPageComponent },
      { path: 'addmission', component:AddMissionComponent},
      { path: 'editmission', component:AddMissionComponent},
      { path: 'detail', component:MissionDetailComponent}
    ]
  },

]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
