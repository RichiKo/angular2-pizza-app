import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'currency' })
export class CurrencyPipe implements PipeTransform {

  transform(number: number): string {
    return number + '€';
  }
}