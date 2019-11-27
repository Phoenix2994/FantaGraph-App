import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Prosecutor } from 'src/app/model/prosecutor';

@Component({
  selector: 'app-prosecutor-detail',
  templateUrl: './prosecutor-detail.page.html',
  styleUrls: ['./prosecutor-detail.page.scss'],
})
export class ProsecutorDetailPage implements OnInit {

  prosecutor: Prosecutor;
  loading: boolean;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.loading = true;
   }

  ngOnInit() {
    this.getProsecutor();
  }

  getProsecutor() {
    this.apiService.getProsecutor(this.route.snapshot.params.prosId).subscribe(
      prosecutor => {
        this.prosecutor = this.apiService.checkEncoding(prosecutor);
        this.loading = false;
      }
    );
  }

}
