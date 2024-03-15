import {EquipementOutput} from "./equipement-output";
import {FileOutput} from "./file-output";

export interface AffectationOutput {
  file:FileOutput
  numEmplacement: number
  equipement: EquipementOutput
}
