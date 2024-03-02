import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import {ClientRegistrationInput} from "../model/input/client-registration-input";
import {LoginInput} from "../model/input/login-input";
import {UtilisateurOutput} from "../model/output/utilisateur-output";
import {LoginOutput} from "../model/output/login-output";
import {ApiCallerService} from "../service/api-caller.service";
import {dummyUtilisateurOutput, ID_UTILISATEUR_INEXISTANT} from "../model/constants";


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endpoint: string = 'http://localhost:8000';
  headers // = new HttpHeaders().set('Content-Type', 'application/json');
  = new HttpHeaders();
  currentUser = dummyUtilisateurOutput;


  constructor(private http: HttpClient,
              private apiCaller: ApiCallerService,
              public router: Router) {
  }
  // Sign-up
  signUp(input: ClientRegistrationInput): Observable<any> {
    let api = `${this.endpoint}/auth/signup-customer`;
    return this.http.post(api, input).pipe(catchError(this.handleError));
  }
  // Sign-in
  signIn(loginInput: LoginInput) {
    return this.apiCaller.login(loginInput)
      .subscribe((loginOutput: any) => {
        this.currentUser = loginOutput.utilisateurConnecte;
        if(this.currentUser.typeUtilisateur === 'Client') {
          this.router.navigate(['client-profile/']);
        }
        if(this.currentUser.typeUtilisateur === 'Concessionnaire') {
          this.router.navigate(['manager-profile/']);
        }
        console.log(`typeUtilisateur ${this.currentUser.typeUtilisateur} not read correctly`);
      });
  }

  get isLoggedIn(): boolean {
    return this.currentUser.utilisateurId !== ID_UTILISATEUR_INEXISTANT;
  }
  // User profile
  getUserProfile(id: any): Observable<UtilisateurOutput> {
    let api = `${this.endpoint}/utilisateurs/${id}`;
    return this.http.get<UtilisateurOutput>(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }
  doLogout() {
    this.currentUser = dummyUtilisateurOutput;
    this.router.navigate(['log-in']);

  }

  // Error handling
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
}
