import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {ApiCallerService} from "../../service/api-caller.service";
import {ClientRegistrationInput} from "../../model/input/client-registration-input";
import {PaysInput} from "../../model/input/pays-input";
import {PaysOutput} from "../../model/output/pays-output";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup
  countries: PaysInput[]= []

  constructor(
    public fb: FormBuilder,
    public apiCaller: ApiCallerService,
    public router: Router
  ) {
    this.signupForm = this.fb.group({
      nom: ['', [Validators.required, Validators.pattern("[a-zA-Z -]+")]],
      prenom: ['', [Validators.required, Validators.pattern("[a-zA-Z -]+")]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]],
      motDePasse: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(58)]],
      pays: ['', [Validators.required]]
    });
  }
  ngOnInit() {
    this.apiCaller.getPays().subscribe(
      (countries:PaysOutput[]) => {
        this.countries = countries.map(p =>
          (p as PaysInput)
        )
      }
    )
  }

  onSubmit() {
    if (this.signupForm.valid) {
      // Handle form submission here
      this.registerUser()
    }
  }

  registerUser() {
    const formData = this.signupForm.value
    const paysOuUndefined =
      this.countries.find( p => p.code == formData.pays)
    if(paysOuUndefined === undefined) {
      this.signupForm.reset()
      return;
    } else {
      const pays: PaysInput = paysOuUndefined as PaysInput;
      const clientData: ClientRegistrationInput =
        {
          prenom: formData.prenom,
          nom: formData.nom,
          email: formData.email,
          motDePasse: formData.motDePasse,
          paysInput: pays,
          dateHeureInscription: new Date()
        }


      this.apiCaller.signUp(clientData).subscribe(() => {
        this.signupForm.reset()
        this.router.navigate(['log-in'])
      })
    }
  }

  errorMessageNecessaryForFormElement(elementName:string): boolean {
    let element = this.signupForm.get(elementName)
    if(element === null) { return false }
    return element.invalid && (element.dirty || element.touched)
  }

  formElementHasError(elementName:string,errorName:string) {
    let element = this.signupForm.get(elementName)
    if(element === null) { return false }
    return element.errors?.[errorName]
  }


  paysOutputToInput(p: PaysOutput):PaysInput {
     return p
  }

  paysInputConstructor(codeDonne:string,nomDonne:string):PaysInput {
    return {
      code:codeDonne,
      nom:nomDonne
    }
  }

}
