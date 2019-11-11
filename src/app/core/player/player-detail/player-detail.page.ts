import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Player } from 'src/app/model/player';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.page.html',
  styleUrls: ['./player-detail.page.scss'],
})
export class PlayerDetailPage implements OnInit {

  player: Player;
  loading: boolean;
  showStats: boolean;
  season: string;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.loading = true;
    this.showStats = false;
  }

  ngOnInit() {
    this.getPlayer();
  }

  getPlayer() {
    this.apiService.getPlayerById(this.route.snapshot.params.id).subscribe(
      player => {
        this.player = player;
        this.loading = false;
      });
  }

  onChange(season: string) {
    this.season = season;
  }

}
