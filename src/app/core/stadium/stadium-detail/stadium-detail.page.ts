import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Stadium } from 'src/app/model/stadium';

@Component({
  selector: 'app-stadium-detail',
  templateUrl: './stadium-detail.page.html',
  styleUrls: ['./stadium-detail.page.scss'],
})
export class StadiumDetailPage implements OnInit {

 
  stadium: Stadium;
  loading: boolean;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.loading = true;
   }

  ngOnInit() {
    this.getStadium();
  }

  getStadium() {
    this.apiService.getStadium(this.route.snapshot.params.stadiumId).subscribe(
      stadium => {
        this.stadium = this.apiService.checkEncoding(stadium);
        this.loading = false;
      }
    );
  }
}
