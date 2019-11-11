import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/model/player';
import { ApiService } from 'src/app/api.service';
import { NavigationService } from 'src/app/navigation.service';

@Component({
  selector: 'app-team-rosa',
  templateUrl: './team-rosa.page.html',
  styleUrls: ['./team-rosa.page.scss'],
})
export class TeamRosaPage implements OnInit {

  players: Player[];

  constructor(private navigationService: NavigationService, private apiService: ApiService) {
    this.players = [];
  }

  ngOnInit() {
    this.getRosa();
  }

  getRosa() {
    this.players = this.navigationService.getPlayers();
    if (this.players.length === 0) {
      this.apiService.getPlayersFantateam(this.navigationService.teamId).subscribe(
        players => {
          this.players = players;
        }
      )
    }
  }

  deletePlayer(playerId: number) {
    this.apiService.deletePlayer(playerId, this.navigationService.teamId).subscribe(value => {
      console.log('Giocatore rimosso');
      this.apiService.getPlayersFantateam(this.navigationService.teamId).subscribe(
        players => {
          this.players = players;
        });
    });
  }
}
