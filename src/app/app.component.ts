import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';
import {StorageService} from "./shared/storage.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService: AuthService, public storage:StorageService) { }
  logout() {
    this.authService.doLogout()
  }
}
