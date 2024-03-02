import {ReservationOutput} from "../output/reservation-output";
import {TripleReservationOutput} from "../output/triple-reservation-output";
import {ReservationListFrontEnd} from "./reservation-list-front-end";

export class TripleReservationFrontEnd {
  enAttente: ReservationListFrontEnd
  acceptees: ReservationListFrontEnd
  refusees: ReservationListFrontEnd

  constructor(userIsAManager: boolean,original:TripleReservationOutput) {
     this.enAttente = new ReservationListFrontEnd(userIsAManager,true,original.enAttente)
     this.acceptees = new ReservationListFrontEnd(userIsAManager,false,original.acceptees)
     this.refusees = new ReservationListFrontEnd(userIsAManager,false,original.acceptees)
  }
}
