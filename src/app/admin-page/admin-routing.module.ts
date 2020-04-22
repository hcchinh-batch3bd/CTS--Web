import { NgModule } from '@angular/core';
import{ Routes, RouterModule} from '@angular/router';
import { MissionPageComponent } from './contain/mission-page/mission-page.component';
import { AdminPageComponent } from './admin-page.component';

const routes: Routes =[
  {path: '', redirectTo:'mission', pathMatch:'full'},
     {path:'mission', component:AdminPageComponent}
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
