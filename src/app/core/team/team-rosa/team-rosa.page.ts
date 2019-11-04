import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/model/player';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-team-rosa',
  templateUrl: './team-rosa.page.html',
  styleUrls: ['./team-rosa.page.scss'],
})
export class TeamRosaPage implements OnInit {
  players: Player[];
  constructor(private apiService: ApiService) {
    this.players = [];
  }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this.apiService.getPlayers().subscribe(players => this.players = players);
    // if service else DB
  }
}
