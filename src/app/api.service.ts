import { Injectable } from '@angular/core';
import { Player } from './model/player';
import { PLAYERS } from './players-list';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  players: Player[];

  constructor() {}

  getPlayers(): Observable<Player[]> {
    if (!this.players) {
      this.players = PLAYERS;
      return of(this.players);
    } else {
      return of(this.players);
    }
  }
}
