import { Component } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {StorageService} from "../../service/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  constructor(public authService: AuthService, public storage:StorageService, private router:Router ) { }
  logout() {
    this.authService.doLogout()
  }

  goToLoginPage() { this.router.navigate(['log-in']) }
}
