import {LienDeParenteOutput} from "./lien-de-parente-output";
import {EquipementOutput} from "./equipement-output";
import {ParasolOutput} from "./parasol-output";
import {FileOutput} from "./file-output";

export interface PreparationReservationOutput {
  parasols: ParasolOutput[]
  files: FileOutput[]
  equipements : EquipementOutput[]
  liensDeParente : LienDeParenteOutput[]
}
