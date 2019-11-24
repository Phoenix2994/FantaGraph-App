import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Player } from 'src/app/model/player';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.page.html',
  styleUrls: ['./player-detail.page.scss'],
})
export class PlayerDetailPage implements OnInit {

  player: Player;
  loading: boolean;
  showStats: boolean;
  season: string;

  @ViewChild(IonContent, { static: false }) content: IonContent;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.loading = true;
    this.showStats = false;
  }

  ngOnInit() {
    this.getPlayer();
  }

  getPlayer() {
    this.apiService.getPlayerById(this.route.snapshot.params.id).subscribe(
      player => {
        this.player = this.apiService.checkEncoding(player);
        this.loading = false;
      });
  }

  onChange(season: string) {
    this.season = season;
    setTimeout(() => {
      this.scrollToBottom();
    }, 500);
  }

  order(playerStats: any) {
    playerStats.sort((a, b) => a.season.localeCompare(b.season));
    return playerStats;
  }

  scrollToBottom() {
    this.content.scrollToBottom(1500);

  }

}
