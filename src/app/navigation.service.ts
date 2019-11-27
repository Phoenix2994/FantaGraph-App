import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Fantateam } from './model/fantateam';
import { Player } from './model/player';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  teamId: number;
  fantaTeam: Fantateam;
  players: Player[];
  userId: number;

  constructor(private apiService: ApiService) {
    this.teamId = 0;
    this.players = [];
    this.userId = 0;
  }

  setTeamNavigation(teamId: number) {
    this.teamId = teamId;
    this.apiService.getFantateam(teamId).subscribe(fantateam =>
      this.fantaTeam = this.apiService.checkEncoding(fantateam)
    );
    this.apiService.getPlayersFantateam(teamId).subscribe(players => {
      this.players = this.apiService.checkEncoding(players);
    }
    );
  }

  getFantateam() {
    return this.fantaTeam;
  }

  getPlayers() {
    return this.players;
  }

}
