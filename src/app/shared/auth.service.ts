import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {LoginInput} from "../model/input/login-input";
import {ApiCallerService} from "../service/api-caller.service";
import {dummyUtilisateurOutput} from "./constants";
import {ID_UTILISATEUR_INEXISTANT} from "./numerical-constants";
import {StorageService} from "./storage.service";


@Injectable({
  providedIn: 'root',
})
export class AuthService {



  constructor(private apiCaller: ApiCallerService,
              private storage: StorageService,
              public router: Router) {
  }


  // Sign-in
  signIn(loginInput: LoginInput) {
    return this.apiCaller.login(loginInput)
      .subscribe((loginOutput: any) => {
        this.storage.currentUser = loginOutput.utilisateurConnecte;
        if( this.storage.currentUser.estUnClient ) {
          this.router.navigate(['client-profile/'])
        } else {
            this.router.navigate(['manager-profile/'])
          }
        }
      )
  }


  get isLoggedIn(): boolean {
    return this.storage.currentUser.utilisateurId !== ID_UTILISATEUR_INEXISTANT
  }


  doLogout() {
    this.storage.currentUser = dummyUtilisateurOutput;
    this.router.navigate(['log-in']);
  }


}
