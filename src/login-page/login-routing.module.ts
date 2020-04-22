import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminPageComponent } from 'src/app/admin-page/admin-page.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'admin', loadChildren:'../app/admin-page/admin.module#AdminModule'},
  { path: 'home', loadChildren:'../app/user-page/user.module#UserModule'}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule { }
