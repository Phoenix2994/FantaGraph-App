import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Coach } from 'src/app/model/coach';

@Component({
  selector: 'app-coach-detail',
  templateUrl: './coach-detail.page.html',
  styleUrls: ['./coach-detail.page.scss'],
})
export class CoachDetailPage implements OnInit {

  coach: Coach;
  loading: boolean;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.loading = true;
   }

  ngOnInit() {
    this.getCoach();
  }

  getCoach() {
    this.apiService.getCoach(this.route.snapshot.params.coachId).subscribe(
      coach => {
        this.coach = this.apiService.checkEncoding(coach);
        this.loading = false;
      }
    );
  }

}
