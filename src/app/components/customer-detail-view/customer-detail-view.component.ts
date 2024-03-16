import { Component } from '@angular/core';
import {ReservationOutput} from "../../model/output/reservation-output";
import {dummyReservationOutput} from "../../shared/constants";
import {StorageService} from "../../shared/storage.service";
import {ApiCallerService} from "../../service/api-caller.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-detail-view',
  templateUrl: './customer-detail-view.component.html',
  styleUrls: ['./customer-detail-view.component.css']
})
export class CustomerDetailViewComponent {
  reservation: ReservationOutput = dummyReservationOutput
  totalPrice: number = 0



  constructor(
    public storageService: StorageService,
    public apiCaller:ApiCallerService,
    public router:Router
  ) {
    this.reservation = this.storageService.getViewedReservation()
    this.totalPrice = this.storageService.totalPrice

  }

}
