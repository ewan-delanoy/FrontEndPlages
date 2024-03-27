import {AffectationInput} from "./affectation-input";

export interface ReservationInput {
  clientId: number
  plageId: number
  affectations : AffectationInput[]
  dateDebut: string
  dateFin: string
  lienDeParenteNom: string
  numeroCarte: string
  anneeExpiration: number
  moisExpiration: number
  cryptogramme: string
}
