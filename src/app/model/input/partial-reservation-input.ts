import {AffectationInput} from "./affectation-input";

// comme une ReservationInput, mais sans les données de paiement
export interface PartialReservationInput {
  clientId: number
  plageId: number
  affectations : AffectationInput[]
  dateDebut: Date
  dateFin: Date
  lienDeParenteNom: string
}
