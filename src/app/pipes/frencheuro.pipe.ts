import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'frencheuro'
})
export class FrencheuroPipe implements PipeTransform {

  transform(n: number): string {
    return (n.toFixed(2)) + " €";
  }

}
