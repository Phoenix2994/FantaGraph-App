import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/model/player';
import { ApiService } from 'src/app/api.service';
import { NavigationService } from 'src/app/navigation.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-team-rosa',
  templateUrl: './team-rosa.page.html',
  styleUrls: ['./team-rosa.page.scss'],
})
export class TeamRosaPage {

  players: Player[];
  roleCounter: boolean;
  quotCounter: boolean;
  loading: boolean;

  constructor(private navigationService: NavigationService, private apiService: ApiService, private alertController: AlertController) {
    this.players = [];

  }

  ionViewWillEnter() {
    this.getRosa();
    this.roleCounter = false;
    this.quotCounter = false;
    this.loading = true;
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Giocatore cancellato!',
      message: 'Hai cancellato un giocatore dalla tua Rosa',
      buttons: ['OK']
    });

    await alert.present();
  }

  getRosa() {
    this.apiService.getPlayersFantateam(this.navigationService.teamId).subscribe(
      players => {
        players.sort(((a, b) => a.position.slice(0, 1).localeCompare(b.position.slice(0, 1))));
        this.players = this.apiService.checkEncoding(players.reverse());
        this.loading = false;
      }
    );

  }

  deletePlayer(playerId: number) {
    this.apiService.deletePlayer(playerId, this.navigationService.teamId).subscribe(value => {
      console.log('Giocatore rimosso');
      this.presentAlert();
      this.apiService.getPlayersFantateam(this.navigationService.teamId).subscribe(
        players => {
          this.players = this.apiService.checkEncoding(players);
        });
    });
  }

  orderByRole() {
    this.quotCounter = false;
    if (this.roleCounter === false) {
      this.players.sort((a, b) => a.position.slice(0, 1).localeCompare(b.position.slice(0, 1)));
      this.roleCounter = true;

    } else {
      this.roleCounter = false;
      this.players.reverse();
    }
  }
  orderByQuot() {
    this.roleCounter = false;
    if (this.quotCounter === false) {
      this.players.sort((a, b) => a.quot - b.quot);
      this.quotCounter = true;

    } else {
      this.quotCounter = false;
      this.players.reverse();
    }
  }
}
