import { Component } from '@angular/core';
import {AuthService} from "../../shared/auth.service";
import {StorageService} from "../../shared/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent {
  constructor(public authService: AuthService, public storage:StorageService, private router:Router) { }
  logout() {
    this.authService.doLogout()
  }

  goToLoginPage() { this.router.navigate(['log-in']) }
}
