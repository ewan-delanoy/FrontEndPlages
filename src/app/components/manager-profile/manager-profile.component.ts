import { Component } from '@angular/core';
import {UtilisateurOutput} from "../../model/output/utilisateur-output";
import {TripleReservationOutput} from "../../model/output/triple-reservation-output";
import {AuthService} from "../../shared/auth.service";
import {ApiCallerService} from "../../service/api-caller.service";
import {TripleReservationFrontEnd} from "../../model/front-end/triple-reservation-front-end";
import {dummyTripleReservation} from "../../shared/constants";
import {StorageService} from "../../shared/storage.service";

@Component({
  selector: 'app-manager-profile',
  templateUrl: './manager-profile.component.html',
  styleUrls: ['./manager-profile.component.css']
})
export class ManagerProfileComponent {
  currentUser: UtilisateurOutput;
  reservations: TripleReservationFrontEnd
  constructor(
    public storage: StorageService,
    private apiCaller: ApiCallerService
  ) {
    this.currentUser = this.storage.currentUser;
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
