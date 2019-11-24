import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { President } from 'src/app/model/president';

@Component({
  selector: 'app-president-detail',
  templateUrl: './president-detail.page.html',
  styleUrls: ['./president-detail.page.scss'],
})
export class PresidentDetailPage implements OnInit {

  president: President;
  loading: boolean;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.loading = true;
   }

  ngOnInit() {
    this.getPresident();
  }

  getPresident() {
    this.apiService.getPresident(this.route.snapshot.params.presId).subscribe(
      president => {
        this.president = this.apiService.checkEncoding(president);
        this.loading = false;
      }
    );
  }

}
