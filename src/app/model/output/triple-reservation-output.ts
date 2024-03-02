import {ReservationOutput} from "./reservation-output";

export interface TripleReservationOutput {
  enAttente: ReservationOutput[];
  acceptees: ReservationOutput[];
  refusees: ReservationOutput[];
}
