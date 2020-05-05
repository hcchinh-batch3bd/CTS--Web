import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissionPageComponent } from './contain/mission-page/mission-page.component';
import { AdminPageComponent } from './admin-page.component';
import { StatisticalPageComponent } from './contain/statistical-page/statistical-page.component';
import { TypemissionPageComponent } from './contain/typemission-page/typemission-page.component';
import { AccountPageComponent } from './contain/account-page/account-page.component';
import { AddMissionComponent } from './contain/add-mission/add-mission.component';
import { AddAccountComponent } from './contain/add-account/add-account.component';

import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '', component: AdminPageComponent, children: [
      { path: '', redirectTo:'statistical', pathMatch:'full' },
      { path: 'statistical', component: StatisticalPageComponent },
      { path: 'mission', component: MissionPageComponent},
      { path: 'add-mission', component:AddMissionComponent},
      { path: 'add-account', component:AddAccountComponent},
      { path: 'typemission', component: TypemissionPageComponent },
      { path: 'account', component: AccountPageComponent }
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
