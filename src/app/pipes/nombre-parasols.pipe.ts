import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreParasols'
})
export class NombreParasolsPipe implements PipeTransform {

  transform(n: number): string {
    if(n<1) { return 'Aucun parasol'}
    if(n==1) { return '1 parasol'}
    return (n.toString()) + " parasols";
  }

}
