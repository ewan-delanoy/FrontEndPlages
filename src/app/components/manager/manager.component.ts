import { Component } from '@angular/core';
import {AuthService} from "../../shared/auth.service";
import {StorageService} from "../../shared/storage.service";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent {
  constructor(public authService: AuthService, public storage:StorageService) { }
  logout() {
    this.authService.doLogout()
  }
}
