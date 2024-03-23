import { Component } from '@angular/core';
import {ReservationOutput} from "../../model/output/reservation-output";
import {StorageService} from "../../service/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-detail-view',
  templateUrl: './customer-detail-view.component.html',
  styleUrls: ['./customer-detail-view.component.css']
})
export class CustomerDetailViewComponent {
  reservation: ReservationOutput


  constructor(
    public storageService: StorageService,
    public router:Router
  ) {
    this.reservation = this.storageService.pastReservation

  }

}
