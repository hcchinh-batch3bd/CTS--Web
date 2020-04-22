import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes} from '@angular/router';
import { from } from 'rxjs';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path:'', component:HomePageComponent}
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
