import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduction'
})
export class ReductionPipe implements PipeTransform {

  transform(coeff: number): string {
    const debut = (coeff == 1)?'Pas':(Math.round(100*(1-coeff)).toString())+'%'
    return debut + ' de réduction';
  }

}
