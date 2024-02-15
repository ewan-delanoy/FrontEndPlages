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
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endpoint: string = 'http://localhost:8000';
  headers // = new HttpHeaders().set('Content-Type', 'application/json');
  = new HttpHeaders();
  currentUser = {};

  constructor(private http: HttpClient, public router: Router) {
  }
  // Sign-up
  signUp(input: ClientRegistrationInput): Observable<any> {
    let api = `${this.endpoint}/auth/signup-customer`;
    return this.http.post(api, input).pipe(catchError(this.handleError));
  }
  // Sign-in
  signIn(loginInput: LoginInput) {
    return this.http
      .post<any>(`${this.endpoint}/auth/login`, loginInput)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token);
        this.getUserProfile(res.utilisateurId).subscribe((res) => {
          this.currentUser = res;
          this.router.navigate(['user-profile/' + res.utilisateurId]);
        });
      });
  }

  getToken() {
    return localStorage.getItem('access_token');
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null;
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
    localStorage.removeItem('access_token');
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
