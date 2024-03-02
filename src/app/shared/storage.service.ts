import { Injectable } from '@angular/core';
import {ReservationOutput} from "../model/output/reservation-output";
import {dummyReservationOutput} from "../model/constants";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  currentReservation: ReservationOutput = dummyReservationOutput
  treatmentAllowedOnReservation: boolean = false
  constructor() { }
}
