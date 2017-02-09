import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'datepipe' })
export class DatePipe implements PipeTransform {

  transform(date: Date): string {
     if (date) {
      let d: string = '';
       date.getDate() < 10 ? d = '0' +  date.getDate() : d =  date.getDate().toString();
      d += ".";
      ( date.getMonth() + 1) < 10 ? d += '0' + ( date.getMonth() + 1) : d += ( date.getMonth() + 1).toString();
      d += "." +  date.getFullYear() + " ";
       date.getHours() < 10 ? d += '0' +  date.getHours() : d +=  date.getHours().toString();
      d += ":"
       date.getMinutes() < 10 ? d += '0' +  date.getMinutes() : d +=  date.getMinutes().toString();
      return d;
    }
    return "";
  }
}