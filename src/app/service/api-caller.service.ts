import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import {LoginInput} from "../model/input/login-input";
import {LoginOutput} from "../model/output/login-output";




@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {

  endpoint: string = 'http://localhost:8000';
  loginUrl = `${this.endpoint}/api/connexion` ;

  constructor(private http: HttpClient) { }

  login(loginInput: LoginInput) {
    return this.http
      .post<LoginOutput>(this.loginUrl, loginInput);

  }


}
