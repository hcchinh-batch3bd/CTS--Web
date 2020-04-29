import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class InfoModule {
  id_employee: number;
  name_employee: string;
  point: number;
  totalComplete:number;
  totalProcess:number;
  constructor()
  {}
 }
