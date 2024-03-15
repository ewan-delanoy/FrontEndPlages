import {Component,  Input} from '@angular/core';
import {ParasolChooserFrontEnd} from "../../model/front-end/parasol-chooser-front-end";
import {LienDeParenteOutput} from "../../model/output/lien-de-parente-output";
import {ParasolFrontEnd} from "../../model/front-end/parasol-front-end";
import {StorageService} from "../../shared/storage.service";



@Component({
  selector: 'app-parasol-chooser',
  templateUrl: './parasol-chooser.component.html',
  styleUrls: ['./parasol-chooser.component.css']
})
export class ParasolChooserComponent {
  @Input()
  chooser:ParasolChooserFrontEnd= new ParasolChooserFrontEnd()
  files: null[] = []
  emplacements: null [] = []


  constructor(private storage: StorageService) {
  }

  ngOnInit() {
     this.files = [].constructor(this.chooser.nbDeFiles)
     this.emplacements = [].constructor(this.chooser.nbDemplacementsParFile)
  }

  handleLienDeParenteSelection(nomLienDeParente:string){

    const lienDeParente:(LienDeParenteOutput|undefined) =
      this.chooser.tousLesLiensDeParente.find( ldp =>
      {return ldp.nom === nomLienDeParente})
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
    this.storage.afterSelectionIsFinished(this.chooser)
  }
}
