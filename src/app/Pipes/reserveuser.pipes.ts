import { Pipe, PipeTransform } from '@angular/core';

 @Pipe({  
  name: 'reverseuser',
  pure:false
 })


export class ReverseuserPipe implements PipeTransform{

transform (values: any) {
 if (values) {
  return values.slice().reverse();
   }
  }
 }