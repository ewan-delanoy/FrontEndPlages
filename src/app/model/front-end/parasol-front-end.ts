import {ParasolOutput} from "../output/parasol-output";
import {EquipementOutput} from "../output/equipement-output";
import {dummyEmplacementOutput, dummyEquipementOutput} from "../../shared/constants";
import {EmplacementOutput} from "../output/emplacement-output";

export class ParasolFrontEnd {
  // champs communs avec ParasolOutput
  emplacement: EmplacementOutput
  isForSomeoneElse: number
  // champs spécifiques à la version front-end
  isForMe: boolean
  equipement: EquipementOutput

  // retourne un objet vide
  constructor()

  constructor(parasolOutput:ParasolOutput, tousLesEquipements: EquipementOutput[])

  constructor(parasolOutput?:ParasolOutput, tousLesEquipements?: EquipementOutput[]) {
    if(parasolOutput && tousLesEquipements) {
      this.emplacement = parasolOutput.emplacement;
      this.isForSomeoneElse = parasolOutput.isForSomeoneElse;
      // champs spécifiques à la version front-end
      this.isForMe = false
      this.equipement = tousLesEquipements[0]
    } else {
      this.emplacement = dummyEmplacementOutput
      this.isForSomeoneElse = 0
      // champs spécifiques à la version front-end
      this.isForMe = false
      // On met un dummy plutôt que null ici, pour éviter des problèmes avec null ailleurs
      this.equipement = dummyEquipementOutput
    }
 }
}
