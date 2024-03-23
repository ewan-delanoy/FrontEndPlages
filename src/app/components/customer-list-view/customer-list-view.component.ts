import { Component } from '@angular/core';
import {UtilisateurOutput} from "../../model/output/utilisateur-output";
import {TripleReservationFrontEnd} from "../../model/front-end/triple-reservation-front-end";
import {StorageService} from "../../service/storage.service";
import {ApiCallerService} from "../../service/api-caller.service";
import {dummyTripleReservation} from "../../shared/constants";
import {TripleReservationOutput} from "../../model/output/triple-reservation-output";

@Component({
  selector: 'app-customer-list-view',
  templateUrl: './customer-list-view.component.html',
  styleUrls: ['./customer-list-view.component.css']
})
export class CustomerListViewComponent {
  currentUser: UtilisateurOutput
  reservations: TripleReservationFrontEnd
  constructor(
    private storage: StorageService,
    private apiCaller: ApiCallerService
  ) {
    this.currentUser = this.storage.currentUser
    this.reservations = dummyTripleReservation
  }
  ngOnInit() {
    this.apiCaller.getReservationsForClient(this.currentUser.utilisateurId).subscribe(
      (tripleReservations:TripleReservationOutput) => {
        this.reservations=
          new TripleReservationFrontEnd(false,tripleReservations);
        console.log("This was before")
        setTimeout(() => {
          console.log("This is now")
        }, 7000);
      }
    )
  }
}
