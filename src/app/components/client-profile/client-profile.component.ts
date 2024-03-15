import { Component } from '@angular/core';
import {UtilisateurOutput} from "../../model/output/utilisateur-output";
import {TripleReservationOutput} from "../../model/output/triple-reservation-output";
import {ApiCallerService} from "../../service/api-caller.service";
import {TripleReservationFrontEnd} from "../../model/front-end/triple-reservation-front-end";
import {dummyTripleReservation} from "../../shared/constants";
import {StorageService} from "../../shared/storage.service";

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent {
  currentUser: UtilisateurOutput
  reservations: TripleReservationFrontEnd
  constructor(
    public storage: StorageService,
    private apiCaller: ApiCallerService
  ) {
    this.currentUser = this.storage.currentUser;
    this.reservations = dummyTripleReservation
  }
  ngOnInit() {
    this.apiCaller.getReservationsForClient(this.storage.currentUser.utilisateurId).subscribe(
      (tripleReservations:TripleReservationOutput) => {
        this.reservations=
          new TripleReservationFrontEnd(false,tripleReservations);
      }
    )
  }
}
