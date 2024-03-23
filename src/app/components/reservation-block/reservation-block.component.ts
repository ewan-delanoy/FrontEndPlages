import {Component, Input} from '@angular/core';
import {ReservationOutput} from "../../model/output/reservation-output";
import {ReservationListFrontEnd} from "../../model/front-end/reservation-list-front-end";
import {StorageService} from "../../service/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reservation-block',
  templateUrl: './reservation-block.component.html',
  styleUrls: ['./reservation-block.component.css']
})
export class ReservationBlockComponent {
  @Input()
  reservations!: ReservationListFrontEnd

  constructor(public storageService: StorageService,
              public router: Router) {

  }
  seeReservationDetail(allowTreatment:boolean,reservation:ReservationOutput) {
    this.storageService.treatmentAllowedOnPastReservation = allowTreatment
    this.storageService.pastReservation = reservation
    const debutDeRoute:string = (this.storageService.clientConnecte()) ? 'customer' : 'manager'
    this.router.navigate([debutDeRoute + '/detail'])
  }
}
