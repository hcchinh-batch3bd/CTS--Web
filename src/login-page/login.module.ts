import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ],
  exports:[
    LoginComponent, 
    ForgotPasswordComponent
  ]
})
export class LoginModule { }
