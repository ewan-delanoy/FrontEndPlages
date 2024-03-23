import { Component } from '@angular/core';
import {UtilisateurOutput} from "../../model/output/utilisateur-output";
import {TripleReservationFrontEnd} from "../../model/front-end/triple-reservation-front-end";
import {StorageService} from "../../service/storage.service";
import {ApiCallerService} from "../../service/api-caller.service";
import {dummyTripleReservation} from "../../shared/constants";
import {TripleReservationOutput} from "../../model/output/triple-reservation-output";

@Component({
  selector: 'app-manager-list-view',
  templateUrl: './manager-list-view.component.html',
  styleUrls: ['./manager-list-view.component.css']
})
export class ManagerListViewComponent {
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
