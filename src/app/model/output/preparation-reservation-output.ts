import {LienDeParenteOutput} from "./lien-de-parente-output";
import {EquipementOutput} from "./equipement-output";
import {ParasolOutput} from "./parasol-output";

export interface PreparationReservationOutput {
  parasols: ParasolOutput[]
  equipements : EquipementOutput[]
  liensDeParente : LienDeParenteOutput[]
}
