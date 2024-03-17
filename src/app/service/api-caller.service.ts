import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {LoginInput} from "../model/input/login-input";
import {LoginOutput} from "../model/output/login-output";
import {TripleReservationOutput} from "../model/output/triple-reservation-output";
import {PlageOutput} from "../model/output/plage-output";
import {catchError} from "rxjs/operators";
import {ClientRegistrationInput} from "../model/input/client-registration-input";
import {PreparationReservationInput} from "../model/input/preparation-reservation-input";
import {PreparationReservationOutput} from "../model/output/preparation-reservation-output";
import {ReservationInput} from "../model/input/reservation-input";
import {PaysOutput} from "../model/output/pays-output";




@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {

  endpoint: string = 'http://localhost:8000';
  loginUrl:string = `${this.endpoint}/api/connexion` ;
  plagesUrl:string = `${this.endpoint}/api/plages` ;
  paysUrl:string = `${this.endpoint}/api/pays` ;
  clientInscriptionUrl:string = `${this.endpoint}/api/clients` ;
  preparationUrl:string = `${this.endpoint}/api/clients/form-data` ;
  reservationUrl:string = `${this.endpoint}/api/clients/reservation` ;
  constructor(private http: HttpClient) { }

  editReservationStatus(concessionnaireId: number,reservationId:number,statusName:string) {
    const finalUrl= `${this.endpoint}/api/concessionnaires/${concessionnaireId}/reservations/${reservationId}`;
    return this.http
      .post(finalUrl,statusName)
      .pipe(catchError(this.handleError));
  }


  getPays():Observable<PaysOutput[]> {
    return this.http
      .get<PaysOutput[]>(this.paysUrl)
      .pipe(catchError(this.handleError));
  }

  getPlages():Observable<PlageOutput[]> {
    return this.http
      .get<PlageOutput[]>(this.plagesUrl)
      .pipe(catchError(this.handleError));
  }

  getReservationsForClient(clientId: number):Observable<TripleReservationOutput> {
    const finalUrl= `${this.endpoint}/api/clients/${clientId}/reservations`;
    return this.http
      .get<TripleReservationOutput>(finalUrl)
      .pipe(catchError(this.handleError));
  }

  getReservationsForManager(managerId: number):Observable<TripleReservationOutput> {
    const finalUrl= `${this.endpoint}/api/concessionnaires/${managerId}/reservations`;
    return this.http
      .get<TripleReservationOutput>(finalUrl)
      .pipe(catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError( () => new Error(msg));
  }
  login(loginInput: LoginInput) {
    return this.http
      .post<LoginOutput>(this.loginUrl, loginInput)
      .pipe(catchError(this.handleError));

  }

  prepareForm(prepInput:PreparationReservationInput): Observable<PreparationReservationOutput> {
    return this.http
      .post<PreparationReservationOutput>(this.preparationUrl, prepInput)
      .pipe(catchError(this.handleError));
  }

  sendReservation(reservationInput:ReservationInput): Observable<number> {
    return this.http
      .post<number>(this.reservationUrl, reservationInput)
      .pipe(catchError(this.handleError));
  }

  signUp(newClientData:ClientRegistrationInput) {
    return this.http
      .post(this.clientInscriptionUrl,newClientData)
      .pipe(catchError(this.handleError));
  }
}
