import { Component, OnInit } from '@angular/core';
import { Coach } from 'src/app/model/coach';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-coaches-list',
  templateUrl: './coaches-list.page.html',
  styleUrls: ['./coaches-list.page.scss'],
})
export class CoachesListPage implements OnInit {

  coaches: Coach[];
  loading: boolean;

  constructor(private apiService: ApiService) {
    this.coaches = [];
    this.loading = true;
  }

  ngOnInit() {
    this.getCoaches();
  }

  getCoaches() {
    this.coaches = this.apiService.coaches;
    if (this.coaches === undefined) {
      this.apiService.getCoaches().subscribe(
        coaches => {
          this.coaches = this.apiService.checkEncoding(coaches);
          this.loading = false;
        }
      );
    } else {
      this.loading = false;
    }
  }
}
