import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { NavigationService } from 'src/app/navigation.service';

@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.page.html',
  styleUrls: ['./new-team.page.scss'],
})
export class NewTeamPage implements OnInit {

  userId: number;
  teamName: string;

  constructor(private apiService: ApiService, private navigationService: NavigationService) {
    this.teamName = '';
  }

  ngOnInit() {
    this.userId = this.navigationService.userId;
  }

  createFantateam(teamName: string, userId: number) {
    this.apiService.createFantateam(teamName, userId).subscribe();
  }

}
