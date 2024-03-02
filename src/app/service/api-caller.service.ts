import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import {LoginInput} from "../model/input/login-input";
import {LoginOutput} from "../model/output/login-output";
import {TripleReservationOutput} from "../model/output/triple-reservation-output";




@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {

  endpoint: string = 'http://localhost:8000';
  loginUrl = `${this.endpoint}/api/connexion` ;
  clientsUrl:string = `${this.endpoint}/api/clients/` ;
  constructor(private http: HttpClient) { }

  login(loginInput: LoginInput) {
    return this.http
      .post<LoginOutput>(this.loginUrl, loginInput);
  }


  getReservationsForClient(clientId: number) {
    const finalUrl= `${this.endpoint}/api/clients/${clientId}/reservations`;
    console.log("The final client url is : ");
    console.log(finalUrl);
    return this.http
      .get<TripleReservationOutput>(finalUrl);
  }

  getReservationsForManager(managerId: number) {
    const finalUrl= `${this.endpoint}/api/concessionnaires/${managerId}/reservations`;
    console.log("The final manager url is : ");
    console.log(finalUrl);
    return this.http
      .get<TripleReservationOutput>(finalUrl);
  }


}
