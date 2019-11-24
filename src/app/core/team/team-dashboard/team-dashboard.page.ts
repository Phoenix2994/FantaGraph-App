import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/navigation.service';
import { Fantateam } from 'src/app/model/fantateam';
import { Player } from 'src/app/model/player';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-team-dashboard',
  templateUrl: './team-dashboard.page.html',
  styleUrls: ['./team-dashboard.page.scss'],
})
export class TeamDashboardPage {

  fantaTeam: Fantateam;
  loading: boolean;

  constructor(private navigationService: NavigationService, private apiService: ApiService) {
    this.loading = true;
  }

  ionViewWillEnter() {
    this.getFantateam();
  }

  getFantateam() {
    this.apiService.getFantateam(this.navigationService.teamId).subscribe(
      fantaTeam => {
        this.fantaTeam = this.apiService.checkEncoding(fantaTeam);
        this.loading = false;
      });
  }

}
