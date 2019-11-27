import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';
import { Player } from './model/player';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  players: Player[];
  public appPages = [
    {
      title: 'Home',
      url: 'stats-home',
      icon: 'home'
    },
    {
      title: 'Elenco Giocatori',
      url: 'players-list',
      icon: 'list'
    },
    {
      title: 'Elenco Stagioni',
      url: 'seasons-list',
      icon: 'list'
    },
    {
      title: 'Elenco Squadre',
      url: 'teams-list',
      icon: 'list'
    },
    {
      title: 'Elenco Presidenti',
      url: 'presidents-list',
      icon: 'list'
    },
    {
      title: 'Elenco Allenatori',
      url: 'coaches-list',
      icon: 'list'
    },
    {
      title: 'Elenco Procuratori',
      url: 'prosecutors-list',
      icon: 'list'
    },
    {
      title: 'Elenco Stadi',
      url: 'stadiums-list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.getPlayers();
    });
  }

  getPlayers() {
    this.players = [];
    this.apiService.getPlayers().subscribe(players => {
      this.players = this.apiService.checkEncoding(players);
      this.apiService.savePlayers(this.players);
    });
    this.apiService.getTeams().subscribe(teams =>{
      this.apiService.teams = this.apiService.checkEncoding(teams);
    });
    this.apiService.getProsecutors().subscribe(prosecutors =>{
      this.apiService.prosecutors = this.apiService.checkEncoding(prosecutors);
    });
    this.apiService.getPresidents().subscribe(presidents =>{
      this.apiService.presidents = this.apiService.checkEncoding(presidents);
    });
    this.apiService.getCoaches().subscribe(coaches =>{
      this.apiService.coaches = this.apiService.checkEncoding(coaches);
    });
    this.apiService.getStadiums().subscribe(stadiums =>{
      this.apiService.stadiums = this.apiService.checkEncoding(stadiums);
    });
  }
}