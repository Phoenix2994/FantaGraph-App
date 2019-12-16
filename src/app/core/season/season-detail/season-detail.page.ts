import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/model/player';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-season-detail',
  templateUrl: './season-detail.page.html',
  styleUrls: ['./season-detail.page.scss'],
})
export class SeasonDetailPage implements OnInit {

  players: Player[];
  loading: boolean;
  season: string;
  role: string;
  searchedPlayer: string;
  mvCounter: boolean;
  fvCounter: boolean;
  roleCounter: boolean;


  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.loading = true;
    this.searchedPlayer = '';
    this.role = 'tutti';
    this.roleCounter = false;
    this.mvCounter = false;
    this.fvCounter = false;
  }

  ngOnInit() {
    this.season = this.route.snapshot.params.season.replace('-', '/');
    this.getPlayers();
  }
  orderByRole() {
    this.mvCounter = false;
    this.fvCounter = false;
    if (this.roleCounter === false) {
      this.players.sort((a, b) => a.position.slice(0, 1).localeCompare(b.position.slice(0, 1)));
      this.roleCounter = true;
    } else {
      this.players.reverse();
      this.roleCounter = false;
    }
  }
/*
  orderByMv() {
    this.roleCounter = false;
    this.fvCounter = false;
    if (this.mvCounter === false) {
      this.players.sort(
        (a, b) => (
      for (stat in a.stats) {
        if (stat.season === this.season) {
          (a.quot - b.quot)
        }
      });
      this.mvCounter = true;
    } else {
      this.mvCounter = false;
      this.players.reverse();
    }
  }*/
  getPlayers() {
    this.players = this.apiService.players;
    console.log(this.players);
    if (this.players === undefined) {
      this.apiService.getPlayers().subscribe(players => {
        this.players = this.apiService.checkEncoding(players);
        this.loading = false;
        console.log(this.players);
      });
    } else {
      this.loading = false;
    }
  }

}
