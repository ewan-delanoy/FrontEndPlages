import { Component } from '@angular/core';
import {UtilisateurOutput} from "../../model/output/utilisateur-output";
import {TripleReservationOutput} from "../../model/output/triple-reservation-output";
import {AuthService} from "../../shared/auth.service";
import {ApiCallerService} from "../../service/api-caller.service";
import {ReservationListFrontEnd} from "../../model/front-end/reservation-list-front-end";
import {TripleReservationFrontEnd} from "../../model/front-end/triple-reservation-front-end";
import {dummyTripleReservation} from "../../model/constants";

@Component({
  selector: 'app-manager-profile',
  templateUrl: './manager-profile.component.html',
  styleUrls: ['./manager-profile.component.css']
})
export class ManagerProfileComponent {
  currentUser: UtilisateurOutput;
  reservations: TripleReservationFrontEnd
  constructor(
    public authService: AuthService,
    private apiCaller: ApiCallerService
  ) {
    this.currentUser = this.authService.currentUser;
    this.reservations = dummyTripleReservation
  }
  ngOnInit() {
    this.apiCaller.getReservationsForManager(this.currentUser.utilisateurId).subscribe(
      (tripleReservations:TripleReservationOutput) => {
        this.reservations=
          new TripleReservationFrontEnd(true,tripleReservations);
      }
    )
  }
}
