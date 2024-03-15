import {ParasolFrontEnd} from "./parasol-front-end";
import {ParasolOutput} from "../output/parasol-output";
import {EquipementOutput} from "../output/equipement-output";
import {LienDeParenteOutput} from "../output/lien-de-parente-output";
import {PreparationReservationOutput} from "../output/preparation-reservation-output";
import {dummyLienDeParenteOutput} from "../../shared/constants";
import {FileOutput} from "../output/file-output";
import {AffectationOutput} from "../output/affectation-output";

export class ParasolChooserFrontEnd {
  nbDeFiles: number
  nbDemplacementsParFile: number
  parasols: ParasolFrontEnd[]
  toutesLesFiles: FileOutput[]
  tousLesEquipements : EquipementOutput[]
  tousLesLiensDeParente : LienDeParenteOutput[]
  affectations:AffectationOutput[]
  lienDeParente: LienDeParenteOutput

  // utilisé pour construire une instance vide
  constructor()

  constructor(preparation:PreparationReservationOutput)
  constructor(preparation?:PreparationReservationOutput) {
    this.nbDeFiles = 0
    this.nbDemplacementsParFile = 0
    this.parasols = []
    this.affectations = []
    if(preparation) {
      this.nbDeFiles = preparation.nbDeFiles
      this.nbDemplacementsParFile = preparation.nbDemplacementsParFile
      this.toutesLesFiles = preparation.files
      this.tousLesEquipements = preparation.equipements

      this.tousLesLiensDeParente = this.reorderLiensDeParente(preparation.liensDeParente)
      this.lienDeParente = this.tousLesLiensDeParente[0]
      const parasolsOutput:ParasolOutput[]=preparation.parasols

      const n:number=parasolsOutput.length
      for(let i=0; i<n; i++) {
        this.parasols.push(new ParasolFrontEnd(parasolsOutput[i],this.tousLesEquipements))
      }
      console.log('NANABOZO1 found this ldp :',this.lienDeParente)
    } else {
        this.toutesLesFiles = []
        this.tousLesEquipements = []
        this.tousLesLiensDeParente = []
        this.lienDeParente = dummyLienDeParenteOutput
    }


  }



  toggleParasol(numeroFile:number,numEmplacement:number) {
    const idx=(numEmplacement-1) + this.nbDemplacementsParFile * (numeroFile-1);
    const parasolWasSelected = this.parasols[idx].isForMe;
    if(parasolWasSelected) {
      this.unselectParasol(idx)
    } else {
      this.selectParasol(idx)
    }
  }

  setEquipement(numeroFile:number,numEmplacement:number,nomEquipement:string) {
    const nouvelEquipement:(EquipementOutput|undefined) =
      this.tousLesEquipements.find( equipement =>
      {return equipement.nom === nomEquipement})
    if (nouvelEquipement !== undefined) {
      const idx = (numEmplacement - 1) + this.nbDemplacementsParFile * (numeroFile - 1)
      this.parasols[idx].equipement  = nouvelEquipement
      this.affectations.forEach(
        affectation => {
          if(
            (affectation.file.numero === this.parasols[idx].numeroFile)
            && (affectation.numEmplacement === this.parasols[idx].numEmplacement)
          ) {
            affectation.equipement = nouvelEquipement
          }}
      )
    }



  }

  private selectParasol(idx:number) {
    let parasol:ParasolFrontEnd = this.parasols[idx]
    parasol.isForMe = true;

    const laFile = this.toutesLesFiles.find( f =>
    {return f.numero === parasol.numeroFile})

    if(laFile !== undefined) {
      this.affectations.push({
        file: laFile,
        numEmplacement: parasol.numEmplacement,
        equipement: parasol.equipement
      })
    }
  }

  private unselectParasol(idx:number) {
    let parasol:ParasolFrontEnd = this.parasols[idx]
    parasol.isForMe = false;
    this.affectations = this.affectations.filter(affectation =>
      (affectation.file.numero !== parasol.numeroFile)
      || (affectation.numEmplacement !== parasol.numEmplacement)
    )
  }

  // met le lien de parenté par défaut au début
  private reorderLiensDeParente(original:LienDeParenteOutput[]) {
    const lienDeParenteParDefaut = original.find( ldp =>
    {return ldp.coefficient == 1})
    if(lienDeParenteParDefaut === undefined) {
       return original;
    } else {
      const autresLiens = original.filter( ldp =>
      {return !(ldp.coefficient == 1)})
      return [lienDeParenteParDefaut].concat(autresLiens)
    }
  }


}
