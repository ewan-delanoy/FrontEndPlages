import {Component, Input} from '@angular/core';
import {TripleReservationFrontEnd} from "../../model/front-end/triple-reservation-front-end";

@Component({
  selector: 'app-triple-reservation',
  templateUrl: './triple-reservation.component.html',
  styleUrls: ['./triple-reservation.component.css']
})
export class TripleReservationComponent {
  @Input()
  tripleReservation!: TripleReservationFrontEnd

}
