import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Stadium } from 'src/app/model/stadium';

@Component({
  selector: 'app-stadiums-list',
  templateUrl: './stadiums-list.page.html',
  styleUrls: ['./stadiums-list.page.scss'],
})
export class StadiumsListPage implements OnInit {

  stadiums: Stadium[];
  loading: boolean;

  constructor(private apiService: ApiService) {
    this.stadiums = [];
    this.loading = true;
  }

  ngOnInit() {
    this.getStadiums();
  }

  getStadiums() {
    this.stadiums = this.apiService.stadiums;
    if (this.stadiums === undefined) {
      this.apiService.getStadiums().subscribe(
        stadiums => {
          this.stadiums = this.apiService.checkEncoding(stadiums);
          this.loading = false;
        }
      );
    } else {
      this.loading = false;
    }
  }


}
