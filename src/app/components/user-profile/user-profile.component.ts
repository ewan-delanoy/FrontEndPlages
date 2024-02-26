import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../shared/auth.service';
import { UtilisateurOutput } from '../../model/output/utilisateur-output';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  currentUser: UtilisateurOutput
  constructor(
    public authService: AuthService,
    private actRoute: ActivatedRoute
  ) {
      this.currentUser = this.authService.currentUser;
  }
  ngOnInit() {}
}
