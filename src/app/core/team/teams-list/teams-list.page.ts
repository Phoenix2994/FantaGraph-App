import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/model/team';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.page.html',
  styleUrls: ['./teams-list.page.scss'],
})
export class TeamsListPage implements OnInit {

  teams: Team[];
  loading: boolean;

  constructor(private apiService: ApiService) { 
    this.teams = [];
    this.loading = true;
  }

  ngOnInit() {
    this.getTeams();
  }

  getTeams(){
    this.apiService.getTeams().subscribe(
      teams => {
        this.teams = this.apiService.checkEncoding(teams);
        this.loading = false;
      }
    );
  }

}
