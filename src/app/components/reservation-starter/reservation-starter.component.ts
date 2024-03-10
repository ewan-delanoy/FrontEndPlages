import { Component } from '@angular/core';
import {ApiCallerService} from "../../service/api-caller.service";
import {PlageOutput} from "../../model/output/plage-output";

@Component({
  selector: 'app-reservation-starter',
  templateUrl: './reservation-starter.component.html',
  styleUrls: ['./reservation-starter.component.css']
})
export class ReservationStarterComponent {

  plages:PlageOutput[]=[]
  constructor(private apiCaller: ApiCallerService) {

  }


  ngOnInit() {
    this.apiCaller.getPlages().subscribe(
      (plages:PlageOutput[]) => {
        this.plages=plages;
        console.log("Here are the beaches");
        console.log(plages);
      }
    )
  }

}
