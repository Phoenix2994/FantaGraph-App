import { Component, OnInit } from '@angular/core';
import { Player } from '../model/player';
import { ApiService } from '../api.service';
import { User } from '../model/user';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  role: string;
  user: User;
  loading: boolean;
  userId: number;

  constructor(private apiService: ApiService, private navigationService: NavigationService) {
    this.role = 'tutti';
    this.loading = true;
    this.userId = 1;
  }

  ngOnInit() {
    this.getUserById(this.userId);
    this.navigationService.teamId = 0;
    this.navigationService.userId = this.userId;
  }

  getUserById(userId: number) {
    this.apiService.getUserById(userId).subscribe(user => {
      this.user = user;
      this.loading = false;
    });
  }

  setTeamNavigation(teamId: number){
    this.navigationService.setTeamNavigation(teamId);

  }

}


