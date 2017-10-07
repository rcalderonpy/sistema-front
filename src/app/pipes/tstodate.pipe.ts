import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tsToDate'
})
export class TsToDatePipe implements PipeTransform {
  transform(value):Date {
    let date = new Date(value * 1000);

    return date;
  }
}
