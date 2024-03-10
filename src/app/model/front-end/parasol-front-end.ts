import {ParasolOutput} from "../output/parasol-output";
import {EquipementOutput} from "../output/equipement-output";

export class ParasolFrontEnd {
  // champs communs avec ParasolOutput
  emplacementId: number
  numeroFile: number
  numEmplacement: number
  isForSomeoneElse: number
  // champs spécifiques à la version front-end
  isForMe: boolean
  equipement: EquipementOutput

  constructor(parasolOutput:ParasolOutput, tousLesEquipements: EquipementOutput[]) {
    this.emplacementId = parasolOutput.emplacementId
    this.numeroFile = parasolOutput.numeroFile
    this.numEmplacement= parasolOutput.numEmplacement;
    this.isForSomeoneElse= parasolOutput.isForSomeoneElse;
    // champs spécifique à la version front-end
    this.isForMe = false
    this.equipement = tousLesEquipements[0]
 }

}
