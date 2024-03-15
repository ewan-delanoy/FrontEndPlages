import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'frenchDate'
})
export class FrenchDatePipe implements PipeTransform {

  transform(oldDate: Date): string {
    //return date.toLocaleString('fr-FR');
    const date = new Date(oldDate)
    return (date.getDay()) + "/" + (date.getMonth()) + "/" + date.getFullYear()
  }

}
