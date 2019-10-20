import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Players List',
      url: '/players-list',
      icon: 'list'
    },
    {
      title: 'Player Detail',
      url: '/player-detail',
      icon: 'list'
    },
    {
      title: 'Prosecutor Detail',
      url: '/prosecutor-detail',
      icon: 'list'
    },
    {
      title: 'Team Detail',
      url: '/team-detail',
      icon: 'list'
    }, {
      title: 'Coach Detail',
      url: '/coach-detail',
      icon: 'list'
    }, {
      title: 'President Detail',
      url: '/president-detail',
      icon: 'list'
    },
    {
      title: 'Stadium Detail',
      url: '/stadium-detail',
      icon: 'list'
    },
    {
      title: 'President Detail',
      url: '/president-detail',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
