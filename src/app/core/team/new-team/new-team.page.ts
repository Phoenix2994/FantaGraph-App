import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { NavigationService } from 'src/app/navigation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Fantateam } from 'src/app/model/fantateam';

@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.page.html',
  styleUrls: ['./new-team.page.scss'],
})
export class NewTeamPage implements OnInit {

  userId: number;
  teamName: string;
  team: Fantateam;
  loading: boolean;

  constructor(private apiService: ApiService, private navigationService: NavigationService, private router: Router) {
    this.teamName = '';
    this.loading = false;
  }

  ngOnInit() {
    this.userId = this.navigationService.userId;
  }

  createFantateam(teamName: string, userId: number) {
    this.loading = true;
    this.apiService.createFantateam(teamName, userId).subscribe(
      result => {
        this.team = result;
        this.setTeamNavigation(this.team.id);
        this.router.navigate(['/tabs']);
      }
    );
  }

  setTeamNavigation(teamId: number) {
    this.navigationService.setTeamNavigation(teamId);
  }

}
