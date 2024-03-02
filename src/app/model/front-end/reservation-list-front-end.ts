import {ReservationOutput} from "../output/reservation-output";

export class ReservationListFrontEnd {
  userIsAManager: boolean;
  notYetTreated: boolean;
  list: ReservationOutput[];

  constructor(userIsAManager: boolean,notYetTreated: boolean,list: ReservationOutput[]) {
    this.userIsAManager = userIsAManager;
    this.notYetTreated = notYetTreated;
    this.list = list;
  }
}
