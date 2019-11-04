import { Component, OnInit } from '@angular/core';
import { Player } from '../../../model/player';
import { ApiService } from '../../../api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-players-list',
  templateUrl: 'players-list.page.html',
  styleUrls: ['players-list.page.scss'],
})
export class PlayersListPage implements OnInit {
  role: string;
  players: Player[];
  value: boolean;

  constructor(private apiService: ApiService, private route: ActivatedRoute, ) {
    this.role = 'a';
    this.players = [];
    this.value = false;
  }

  ngOnInit() {
    if (this.route.snapshot.queryParams['team-id']) {
      this. value = true;
     }
    this.getPlayers();
  }

  getPlayers() {
    this.apiService.getPlayers().subscribe(players => this.players = players);
    // if service else DB
  }

}