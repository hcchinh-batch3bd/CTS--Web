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
  Stardate: Date;
  point: number;
  exprie: number;
  describe: string;
  status: number;
  Count: number;
  id_type:number;
  id_employee:number;
  name_type_mission: string;
  name_employee: string;
 }
