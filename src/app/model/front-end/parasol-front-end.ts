import {ParasolOutput} from "../output/parasol-output";
import {EquipementOutput} from "../output/equipement-output";
import {dummyEquipementOutput} from "../../shared/constants";

export class ParasolFrontEnd {
  // champs communs avec ParasolOutput
  emplacementId: number
  numeroFile: number
  numEmplacement: number
  isForSomeoneElse: number
  // champs spécifiques à la version front-end
  isForMe: boolean
  equipement: EquipementOutput

  // retourne un objet vide
  constructor()

  constructor(parasolOutput:ParasolOutput, tousLesEquipements: EquipementOutput[])

  constructor(parasolOutput?:ParasolOutput, tousLesEquipements?: EquipementOutput[]) {
    if(parasolOutput && tousLesEquipements) {
      this.emplacementId = parasolOutput.emplacementId
      this.numeroFile = parasolOutput.numeroFile
      this.numEmplacement = parasolOutput.numEmplacement;
      this.isForSomeoneElse = parasolOutput.isForSomeoneElse;
      // champs spécifique à la version front-end
      this.isForMe = false
      this.equipement = tousLesEquipements[0]
    } else {
      this.emplacementId = 0
      this.numeroFile = 0
      this.numEmplacement = 0
      this.isForSomeoneElse = 0
      // champs spécifique à la version front-end
      this.isForMe = false
      this.equipement = dummyEquipementOutput
    }
 }

}
