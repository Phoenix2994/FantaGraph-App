import { Component, OnInit } from '@angular/core';
import { Player } from '../model/player';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-players-list',
  templateUrl: 'players-list.page.html',
  styleUrls: ['players-list.page.scss'],
})
export class PlayersListPage implements OnInit {
  role: string;
  players: Player[];

  constructor(private apiService: ApiService) {
    this.role = 'tutti';
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