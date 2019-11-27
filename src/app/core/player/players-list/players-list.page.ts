import { Component, OnInit } from '@angular/core';
import { Player } from '../../../model/player';
import { ApiService } from '../../../api.service';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from 'src/app/navigation.service';
import { AlertController } from '@ionic/angular';
import { UserService } from 'src/app/user.service';


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
  roleCounter: boolean;
  quotCounter: boolean;
  loading: boolean;
  profile: string;

  constructor(private apiService: ApiService, private navigationService: NavigationService, private route: ActivatedRoute,
              private alertController: AlertController, private userService: UserService) {
    this.role = 'tutti';
    this.players = [];
    this.value = false;
    this.searchedPlayer = '';
    this.roleCounter = false;
    this.quotCounter = false;
    this.loading = true;
  }

  ngOnInit() {
    this.getUserProfile();
    this.getPlayers();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Giocatore aggiunto!',
      message: 'Hai aggiunto un giocatore alla tua Rosa',
      buttons: ['OK']
    });

    await alert.present();
  }

  getUserProfile() {
    this.profile = this.userService.getUserProfile();
  }

  getPlayers() {
    this.players = this.apiService.players;
    if (this.players === undefined) {
      this.apiService.getPlayers().subscribe(players => {
        this.players = this.apiService.checkEncoding(players);
        this.loading = false;
      });
    } else {
      this.loading = false;
    }
  }

  addPlayer(playerId: number) {
    this.apiService.addPlayer(playerId, this.navigationService.teamId).subscribe(
      result => {
        console.log('Giocatore aggiunto');
        this.presentAlert();
      });
  }

  orderByRole() {
    this.quotCounter = false;
    if (this.roleCounter === false) {
      this.players.sort((a, b) => a.position.slice(0, 1).localeCompare(b.position.slice(0, 1)));
      this.roleCounter = true;
    } else {
      this.players.reverse();
      this.roleCounter = false;
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
