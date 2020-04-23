import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissionPageComponent } from './contain/mission-page/mission-page.component';
import { AdminPageComponent } from './admin-page.component';
import { StatisticalPageComponent } from './contain/statistical-page/statistical-page.component';
import { TypemissionPageComponent } from './contain/typemission-page/typemission-page.component';
import { AccountPageComponent } from './contain/account-page/account-page.component';

const routes: Routes = [
  {
    path: '', component: AdminPageComponent, children: [
      { path: '', component: StatisticalPageComponent },
      { path: 'statistical', component: StatisticalPageComponent },
      { path: 'mission', component: MissionPageComponent },
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
