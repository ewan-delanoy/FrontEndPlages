import { Component } from '@angular/core';
import {ReservationOutput} from "../../model/output/reservation-output";
import {dummyReservationOutput} from "../../shared/constants";
import {StorageService} from "../../shared/storage.service";
import {ApiCallerService} from "../../service/api-caller.service";
import {Router} from "@angular/router";
import {StatutEnum} from "../../model/front-end/statut-enum";

@Component({
  selector: 'app-manager-detail-view',
  templateUrl: './manager-detail-view.component.html',
  styleUrls: ['./manager-detail-view.component.css']
})
export class ManagerDetailViewComponent {
  reservation: ReservationOutput = dummyReservationOutput
  totalPrice: number = 0
  isEditable : boolean = false


  constructor(
    public storageService: StorageService,
    public apiCaller:ApiCallerService,
    public router:Router
  ) {
    this.reservation = this.storageService.getViewedReservation()
    this.totalPrice = this.storageService.totalPrice
    this.isEditable = (this.reservation.statutNom == StatutEnum.Statut_en_attente.toString())
  }
  treatReservation(accepted:boolean) {
    const acceptee : string = StatutEnum.Statut_acceptee.toString()
    const refusee : string = StatutEnum.Statut_refusee.toString()
    const statusName = accepted? acceptee : refusee ;
    const concessionnaireId = this.reservation.plage.concessionnaire.concessionnaireId;
    const reservationId = this.reservation.reservationId;
    this.apiCaller.editReservationStatus(concessionnaireId,reservationId,statusName)
      .subscribe(() => {
        this.router.navigate(['manager/profile/list']);
      });


  }
}
