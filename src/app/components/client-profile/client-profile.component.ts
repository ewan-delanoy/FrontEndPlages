import { Component } from '@angular/core';
import {UtilisateurOutput} from "../../model/output/utilisateur-output";
import {TripleReservationOutput} from "../../model/output/triple-reservation-output";
import {AuthService} from "../../shared/auth.service";
import {ApiCallerService} from "../../service/api-caller.service";
import {TripleReservationFrontEnd} from "../../model/front-end/triple-reservation-front-end";
import {dummyTripleReservation} from "../../model/constants";

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent {
  currentUser: UtilisateurOutput
  reservations: TripleReservationFrontEnd
  constructor(
    public authService: AuthService,
    private apiCaller: ApiCallerService
  ) {
    this.currentUser = this.authService.currentUser;
    this.reservations = dummyTripleReservation
  }
  ngOnInit() {
    this.apiCaller.getReservationsForClient(this.authService.currentUser.utilisateurId).subscribe(
      (tripleReservations:TripleReservationOutput) => {
        this.reservations=
          new TripleReservationFrontEnd(false,tripleReservations);
      }
    )
  }
}
