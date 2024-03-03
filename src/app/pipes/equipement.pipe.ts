import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'equipement'
})
export class EquipementPipe implements PipeTransform {

  transform(n: number): string {
    const nbFauteuils:number = n%10
    const nbLits:number = Math.floor(n/10)
    const messageLits = this.messageLits(nbLits)
    const virgule = this.virgule(nbLits,nbFauteuils)
    const messageFauteuils = this.messageFauteuils(nbFauteuils)
    return messageLits + virgule + messageFauteuils;
  }

  private messageLits(nbLits:number):string {
    switch(nbLits) {
      case 0: return "";
      case 1: return "1 lit";
      default: return `${nbLits} lits`;
    }
  }

  private virgule(nbLits:number,nbFauteuils:number):string {
    return (nbLits > 0) && (nbFauteuils > 0) ? ", " : "";
  }

  private messageFauteuils(nbFauteuils:number):string {
    switch(nbFauteuils) {
      case 0: return "";
      case 1: return "1 fauteuil";
      default: return `${nbFauteuils} fauteuils`;
    }
  }

}
