import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-select-profile',
  templateUrl: './select-profile.page.html',
  styleUrls: ['./select-profile.page.scss'],
})
export class SelectProfilePage implements OnInit {

  profile: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  selectUserProfile(profile: string){
    this.userService.setUserProfile(profile);
  }

}
