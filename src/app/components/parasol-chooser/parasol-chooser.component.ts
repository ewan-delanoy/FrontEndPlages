import {Component,  Input} from '@angular/core';
import {ParasolChooserFrontEnd} from "../../model/front-end/parasol-chooser-front-end";
import {LienDeParenteOutput} from "../../model/output/lien-de-parente-output";
import {NOMBRE_DE_FILES, NOMBRE_DEMPLACEMENTS_PAR_FILE} from "../../shared/numerical-constants";
import {ParasolFrontEnd} from "../../model/front-end/parasol-front-end";
import {StorageService} from "../../shared/storage.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-parasol-chooser',
  templateUrl: './parasol-chooser.component.html',
  styleUrls: ['./parasol-chooser.component.css']
})
export class ParasolChooserComponent {
  @Input()
  chooser:ParasolChooserFrontEnd= new ParasolChooserFrontEnd()
  files: null[] = [].constructor(NOMBRE_DE_FILES)
  emplacements: number [] = [].constructor(NOMBRE_DEMPLACEMENTS_PAR_FILE)
  nbEmplacments: number = NOMBRE_DEMPLACEMENTS_PAR_FILE

  constructor(private storage: StorageService,
              private router: Router) {
  }

  handleLienDeParenteSelection(nomLienDeParente:string){
    console.log("the selected ldp is " + nomLienDeParente);
    console.log("the list is :",this.chooser.tousLesLiensDeParente)
    const lienDeParente:(LienDeParenteOutput|undefined) =
      this.chooser.tousLesLiensDeParente.find( ldp =>
      {return ldp.nom === nomLienDeParente})
    console.log("just found :",nomLienDeParente)
    if (lienDeParente !== undefined) this.chooser.lienDeParente = lienDeParente
  }

  handleParasolToggle (e:ParasolFrontEnd)  {
    this.chooser.toggleParasol(e.numeroFile,e.numEmplacement)
  }

  handleEquipementChange(numeroFile:number, numEmplacement:number, nomEquipement:string) {
    this.chooser.setEquipement(numeroFile, numEmplacement, nomEquipement)
    console.log('affectations are now ', this.chooser.affectations)
  }


  afterSelectionIsFinished() {
    this.storage.parasolChooser = this.chooser
    this.storage.reservationDraftComplete = true
    this.router.navigate(['confirm-reservation'])
  }
}
