import { Component, OnInit } from '@angular/core';
import { Prosecutor } from 'src/app/model/prosecutor';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-prosecutors-list',
  templateUrl: './prosecutors-list.page.html',
  styleUrls: ['./prosecutors-list.page.scss'],
})
export class ProsecutorsListPage implements OnInit {

  prosecutors: Prosecutor[];
  loading: boolean;

  constructor(private apiService: ApiService) {
    this.prosecutors = [];
    this.loading = true;
  }

  ngOnInit() {
    this.getProsecutors();
  }

  getProsecutors() {
    this.prosecutors = this.apiService.prosecutors;
    if (this.prosecutors === undefined) {
      this.apiService.getProsecutors().subscribe(
        prosecutors => {
          this.prosecutors = this.apiService.checkEncoding(prosecutors);
          this.loading = false;
        }
      );
    } else {
      this.loading = false;
    }
  }

  checkName(name: string) {
    if (name !== '' && name !== 'Giocatore minorenne' && name !== 'Famiglia') {
      return true;
    } else {
      return false;
    }
  }

}
