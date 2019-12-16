import { Injectable } from '@angular/core';
import { Player } from './model/player';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NavigationService } from './navigation.service';
import { Prosecutor } from './model/prosecutor';
import { Team } from './model/team';
import { President } from './model/president';
import { Coach } from './model/coach';
import { Stadium } from './model/stadium';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'http://127.0.0.1:8100/api';
  response: any;
  players: Player[];
  teams: Team[];
  presidents: President[];
  coaches: Coach[];
  prosecutors: Prosecutor[];
  stadiums: Stadium[];


  constructor(private http: HttpClient) {
  }

  getPlayerById(playerId: string): any {
    const params = new HttpParams()
      .set('showStats', 'true');
    return this.http.get(`${this.url}/player/${playerId}`, { params });
  }

  getPlayers(): any {
    return this.http.get(`${this.url}/player/`);
  }

  getUserById(userId: number): any {
    return this.http.get(`${this.url}/user/${userId}`);
  }

  createFantateam(name: string, userId: number): any {
    const params = new HttpParams()
      .set('name', name)
      .set('userId', userId.toString());
    return this.http.post(`${this.url}/fantateam/`, params);
  }

  addPlayer(playerId: number, teamId: number): any {
    const params = new HttpParams()
      .set('playerId', playerId.toString());
    return this.http.post(`${this.url}/fantateam/${teamId}/player`, params);
  }

  deletePlayer(playerId: number, teamId: number): any {
    return this.http.post(`${this.url}/fantateam/${teamId}/player/${playerId}`, new HttpParams());
  }

  getPlayersFantateam(teamId: number): any {
    return this.http.get(`${this.url}/fantateam/${teamId}/player/`);
  }

  getFantateam(teamId: number): any {
    return this.http.get(`${this.url}/fantateam/${teamId}`);
  }

  getTeam(teamId: number): any {
    return this.http.get(`${this.url}/team/${teamId}`);
  }

  getTeams(): any {
    return this.http.get(`${this.url}/team/`);
  }

  getPresident(presId: number): any {
    return this.http.get(`${this.url}/president/${presId}`);
  }

  getProsecutor(prosId: number): any {
    return this.http.get(`${this.url}/prosecutor/${prosId}`);
  }

  getPresidents(): any {
    return this.http.get(`${this.url}/president/`);
  }

  getCoaches(): any {
    return this.http.get(`${this.url}/coach/`);
  }

  getStadiums(): any {
    return this.http.get(`${this.url}/stadium/`);
  }

  getProsecutors(): any {
    return this.http.get(`${this.url}/prosecutor/`);
  }

  getCoach(coachId: number): any {
    return this.http.get(`${this.url}/coach/${coachId}`);
  }

  getStadium(stadiumId: number): any {
    return this.http.get(`${this.url}/stadium/${stadiumId}`);
  }

  savePlayers(players: Player[]) {
    this.players = players;
  }

  checkEncoding(object: any) {
    return JSON.parse(JSON.stringify(object).replace(/Ã²/g, 'ò').replace(/Ã¨/g, 'è').replace(/Ã¬/g, 'ì').replace(/Ã/g, 'à'));
  }

  getLogo(teamName: string) {
    this.teams.forEach(team => {
      if (team.name === teamName) {
        return team.logo;
      }
    });
  }

}
