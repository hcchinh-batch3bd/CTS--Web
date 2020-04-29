import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo:'Login', pathMatch:'full'},
  {path:'Login', loadChildren:'../login-page/login.module#LoginModule'},
  {path:'admin-page', loadChildren:'./admin-page/admin.module#AdminModule'}
  // {path: '', redirectTo: 'home', pathMatch:'full'},
  // {
  //   path: 'home', loadChildren:'./user-page/user.module#UserModule',
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
