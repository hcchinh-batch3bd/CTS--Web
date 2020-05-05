import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AccountModule {
  id_employee: number;
  name_employee: string;
  password : string;
  email: string;
  date: Date;
  point: number;
  level_employee: boolean;
  status: boolean;
  constructor()
  {}
 }
