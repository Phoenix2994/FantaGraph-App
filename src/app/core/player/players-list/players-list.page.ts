import { Component, OnInit } from '@angular/core';
import { Player } from '../../../model/player';
import { ApiService } from '../../../api.service';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from 'src/app/navigation.service';


@Component({
  selector: 'app-players-list',
  templateUrl: 'players-list.page.html',
  styleUrls: ['players-list.page.scss'],
})
export class PlayersListPage implements OnInit {
  role: string;
  players: Player[];
  value: boolean;
  searchedPlayer: string;

  constructor(private apiService: ApiService, private navigationService: NavigationService, private route: ActivatedRoute, ) {
    this.role = 'tutti';
    this.players = [];
    this.value = false;
    this.searchedPlayer = '';
  }

  ngOnInit() {
    if (this.navigationService.teamId !== 0) {
      this.value = true;
    }
    this.getPlayers();
  }

  getPlayers() {
    this.players = this.apiService.players;
    if (this.players === undefined) {
      this.apiService.getPlayers().subscribe(players => {
        this.players = players;
      });
    }
  }

  addPlayer(playerId: number) {
    this.apiService.addPlayer(playerId, this.navigationService.teamId).subscribe(
      result => {
        console.log('Giocatore aggiunto');
      });
  }

}