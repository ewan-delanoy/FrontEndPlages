import {PaysInput} from "./pays-input";

export interface ReservationInput {
  clientId: number;
  plageId: number;
  affectations : number[];
  dateDebut: Date;
  dateFin: Date;
  lienDeParenteNom: String;
}
