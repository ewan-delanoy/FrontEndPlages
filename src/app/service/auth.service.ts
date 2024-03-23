import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {LoginInput} from "../model/input/login-input";
import {ApiCallerService} from "./api-caller.service";
import {dummyUtilisateurOutput} from "../shared/constants";
import {ID_UTILISATEUR_INEXISTANT} from "../shared/numerical-constants";
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
          this.router.navigate(['customer/list'])
        } else {
            this.router.navigate(['manager/list'])
          }
        }
      )
  }


  isLoggedIn(): boolean {
    return this.storage.currentUser.utilisateurId !== ID_UTILISATEUR_INEXISTANT
  }


  doLogout() {
    this.storage.currentUser = dummyUtilisateurOutput;
    this.router.navigate(['home']);
  }


}
