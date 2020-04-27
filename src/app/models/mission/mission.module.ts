import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MissionModule {
  id_mission: number;
  name_mission: string;
  Stardate: string;
  point: number;
  exprie: number;
  describe: string;
  status: string;
  count:number;
  id_type:number;
  id_employee:number
 }
