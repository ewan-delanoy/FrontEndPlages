import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'frenchDate'
})
export class FrenchDatePipe implements PipeTransform {

  transform(oldDate: Date): string {
    const date = new Date(oldDate)
    return (date.getDate()) + "/" + (date.getMonth()+1) + "/" + date.getFullYear()
  }

}
