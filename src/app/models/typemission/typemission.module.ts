import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TypemissionModule {
  public id_type: number;
  name_type_mission: string;
  id_employee: number;
  status: boolean;
  date: Date;
 }
