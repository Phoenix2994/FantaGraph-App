import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Team } from 'src/app/model/team';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.page.html',
  styleUrls: ['./team-detail.page.scss'],
})
export class TeamDetailPage implements OnInit {

  team: Team;
  loading: boolean;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.loading = true;
   }

  ngOnInit() {
    this.getTeam();
  }

  getTeam() {
    this.apiService.getTeam(this.route.snapshot.params.teamId).subscribe(
      team => {
        this.team = team;
        this.loading = false;
      }
    );
  }

}
