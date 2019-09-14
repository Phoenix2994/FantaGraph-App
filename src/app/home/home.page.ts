import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  role = 'tutti';
  constructor() { }


  checkRole(role: string) {
    if (role === this.role) {
      return true;
    } else {
      return false;
    }
  }

}
