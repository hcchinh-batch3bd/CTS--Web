import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SessionModule {
  id_employee: number;
  name_employee: string;
  point : number;
  level_employee: boolean;
  apiKey: string;
  constructor(){
    
  }
}
