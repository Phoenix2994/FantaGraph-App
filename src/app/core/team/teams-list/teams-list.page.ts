import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/model/team';
import { ApiService } from 'src/app/api.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.page.html',
  styleUrls: ['./teams-list.page.scss'],
})
export class TeamsListPage implements OnInit {

  teams: Team[];
  loading: boolean;
  profile: string;

  constructor(private apiService: ApiService, private userService: UserService) {
    this.teams = [];
    this.loading = true;
  }

  ngOnInit() {
    this.getUserProfile();
    this.getTeams();
  }


  getUserProfile() {
    this.profile = this.userService.getUserProfile();
  }

  getTeams() {
    this.teams = this.apiService.teams;
    console.log(this.teams);
    if (this.teams === undefined) {
      this.apiService.getTeams().subscribe(
        teams => {
          this.teams = this.apiService.checkEncoding(teams);
          this.loading = false;
        }
      );
    } else {
      this.loading = false;
    }
  }

}
