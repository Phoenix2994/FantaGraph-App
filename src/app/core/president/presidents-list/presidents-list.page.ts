import { Component, OnInit } from '@angular/core';
import { President } from 'src/app/model/president';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-presidents-list',
  templateUrl: './presidents-list.page.html',
  styleUrls: ['./presidents-list.page.scss'],
})
export class PresidentsListPage implements OnInit {

  presidents: President[];
  loading: boolean;

  constructor(private apiService: ApiService) {
    this.presidents = [];
    this.loading = true;
  }

  ngOnInit() {
    this.getPresidents();
  }

  getPresidents() {
    this.presidents = this.apiService.presidents;
    if (this.presidents === undefined) {
      this.apiService.getPresidents().subscribe(
        presidents => {
          this.presidents = this.apiService.checkEncoding(presidents);
          this.loading = false;
        }
      );
    } else {
      this.loading = false;
    }
  }
}
