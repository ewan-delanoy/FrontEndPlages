import {EquipementOutput} from "../output/equipement-output";
import {FileOutput} from "../output/file-output";

export interface AffectationFrontEnd {
  file:FileOutput
  numEmplacement: number
  equipement: EquipementOutput
}
