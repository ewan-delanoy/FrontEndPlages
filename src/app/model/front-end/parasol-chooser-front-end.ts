import {ParasolFrontEnd} from "./parasol-front-end";
import {ParasolOutput} from "../output/parasol-output";
import {NOMBRE_DEMPLACEMENTS_PAR_FILE} from "../../shared/numerical-constants";
import {AffectationInput} from "../input/affectation-input";
import {EquipementOutput} from "../output/equipement-output";
import {LienDeParenteOutput} from "../output/lien-de-parente-output";
import {PreparationReservationOutput} from "../output/preparation-reservation-output";
import {dummyLienDeParenteOutput} from "../../shared/constants";

export class ParasolChooserFrontEnd {
  private parasols: ParasolFrontEnd[]

  private tousLesEquipements : EquipementOutput[]
  private tousLesLiensDeParente : LienDeParenteOutput[]

  // champs publics (utilisés pour construire un objet ReservationInput
  affectations:AffectationInput[]
  lienDeParente: LienDeParenteOutput

  // utilisé pour construire une instance vide
  constructor()

  constructor(preparation:PreparationReservationOutput)
  constructor(preparation?:PreparationReservationOutput) {
    this.parasols = []
    this.affectations = []
    if(preparation) {
      this.tousLesEquipements = preparation.equipements
      this.tousLesLiensDeParente = preparation.liensDeParente
      this.lienDeParente = preparation.liensDeParente[0]
      const parasolsOutput:ParasolOutput[]=preparation.parasols

      const n:number=parasolsOutput.length
      for(let i=0; i<n; i++) {
        this.parasols.push(new ParasolFrontEnd(parasolsOutput[i],this.tousLesEquipements))
      }
    } else {
        this.tousLesEquipements = []
        this.tousLesLiensDeParente = []
        this.lienDeParente = dummyLienDeParenteOutput
    }


  }



  toggleParasol(numeroFile:number,numEmplacement:number) {
    const idx=(numEmplacement-1) + NOMBRE_DEMPLACEMENTS_PAR_FILE * (numeroFile-1);
    const parasolWasSelected = this.parasols[idx].isForMe;
    if(parasolWasSelected) {
      this.unselectParasol(idx)
    } else {
      this.selectParasol(idx)
    }
  }

  setEquipement(numeroFile:number,numEmplacement:number,equipementIdx:number) {
    const idx = (numEmplacement - 1) + NOMBRE_DEMPLACEMENTS_PAR_FILE * (numeroFile - 1);
    const nouvelEquipement = this.tousLesEquipements[equipementIdx]
    this.parasols[idx].equipement  = nouvelEquipement;
    this.affectations.forEach(
      affectation => {
        if(affectation.emplacementId === this.parasols[idx].emplacementId) {
          affectation.nbDeLits = nouvelEquipement.nbDeLits
          affectation.nbDeFauteuils = nouvelEquipement.nbDeFauteuils
      }}
    )
  }
  setLienDeParente(lienDeParenteIdx:number) {
    this.lienDeParente = this.tousLesLiensDeParente[lienDeParenteIdx]
  }

  private selectParasol(idx:number) {
    let parasol:ParasolFrontEnd = this.parasols[idx]
    parasol.isForMe = true;
    this.affectations.push({
      emplacementId: parasol.emplacementId,
      numeroFile: parasol.numeroFile,
      numEmplacement: parasol.numEmplacement,
      nbDeLits: parasol.equipement.nbDeLits,
      nbDeFauteuils : parasol.equipement.nbDeFauteuils
    })
  }

  private unselectParasol(idx:number) {
    let parasol:ParasolFrontEnd = this.parasols[idx]
    parasol.isForMe = false;
    this.affectations = this.affectations.filter(affectation =>
      affectation.emplacementId !== parasol.emplacementId
    )
  }


}
