import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {LoginInput} from "../model/input/login-input";
import {LoginOutput} from "../model/output/login-output";
import {TripleReservationOutput} from "../model/output/triple-reservation-output";
import {PlageOutput} from "../model/output/plage-output";
import {catchError} from "rxjs/operators";
import {ClientRegistrationInput} from "../model/input/client-registration-input";




@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {

  endpoint: string = 'http://localhost:8000';
  loginUrl:string = `${this.endpoint}/api/connexion` ;
  plagesUrl:string = `${this.endpoint}/api/plages` ;
  clientInscriptionUrl:string = `${this.endpoint}/api/clients` ;
  constructor(private http: HttpClient) { }

  editReservationStatus(concessionnaireId: number,reservationId:number,statusName:string) {
    const finalUrl= `${this.endpoint}/api/concessionnaires/${concessionnaireId}/reservations/${reservationId}`;
    console.log("The final manager-reservation url is : ");
    console.log(finalUrl);
    return this.http
      .post(finalUrl,statusName)
      .pipe(catchError(this.handleError));
  }

  getReservationsForClient(clientId: number):Observable<TripleReservationOutput> {
    const finalUrl= `${this.endpoint}/api/clients/${clientId}/reservations`;
    console.log("The final client url is : ");
    console.log(finalUrl);
    return this.http
      .get<TripleReservationOutput>(finalUrl)
      .pipe(catchError(this.handleError));
  }

  getReservationsForManager(managerId: number):Observable<TripleReservationOutput> {
    const finalUrl= `${this.endpoint}/api/concessionnaires/${managerId}/reservations`;
    console.log("The final manager url is : ");
    console.log(finalUrl);
    return this.http
      .get<TripleReservationOutput>(finalUrl)
      .pipe(catchError(this.handleError));
  }

  getPlages():Observable<PlageOutput[]> {
    return this.http
      .get<PlageOutput[]>(this.plagesUrl)
      .pipe(catchError(this.handleError));
  }
  login(loginInput: LoginInput) {
    return this.http
      .post<LoginOutput>(this.loginUrl, loginInput)
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

  signUp(newClientData:ClientRegistrationInput) {
    return this.http
      .post(this.clientInscriptionUrl,newClientData)
      .pipe(catchError(this.handleError));
  }
}
