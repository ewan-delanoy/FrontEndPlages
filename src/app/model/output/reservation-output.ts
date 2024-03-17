import {ClientOutput} from "./client-output";
import {PlageOutput} from "./plage-output";
import {LienDeParenteOutput} from "./lien-de-parente-output";
import {AffectationOutput} from "./affectation-output";

export interface ReservationOutput {
  plage: PlageOutput
  reservationId: number
  affectations: AffectationOutput[]
  client: ClientOutput
  dateDebut: Date
  dateFin: Date
  lienDeParente: LienDeParenteOutput
  statutNom: string
  numeroCarte: string
  anneeExpiration: number
  moisExpiration: number
  totalAvantRemise: number
  totalApresRemise: number
}
