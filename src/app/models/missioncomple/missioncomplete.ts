import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MissionCompleteModule {
  id_mission: number;
  name_mission: string;
  date: Date;
  point: number;
  id_type:number;
  name_type_mission: string;
 }
