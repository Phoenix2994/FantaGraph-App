import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-profile',
  templateUrl: './select-profile.page.html',
  styleUrls: ['./select-profile.page.scss'],
})
export class SelectProfilePage implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  selectUserProfile(profile: string) {
    this.userService.setUserProfile(profile);
  }

  navigateToHome() {
    if (this.userService.getUserProfile() === 'user') {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/stats-home']);
    }
  }
}
