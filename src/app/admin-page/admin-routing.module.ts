import { NgModule } from '@angular/core';
import{ Routes, RouterModule} from '@angular/router';
import { AdminComponent } from './admin.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes =[
  {path: '', component: AdminComponent}
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
