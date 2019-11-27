import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seasons-list',
  templateUrl: './seasons-list.page.html',
  styleUrls: ['./seasons-list.page.scss'],
})
export class SeasonsListPage implements OnInit {

  seasonsList: Array<string>;
  constructor() {
    this.seasonsList = [];
  }

  ngOnInit() {
    this.seasonsList.push('2015-16', '2016-17', '2017-18', '2018-19', '2019-20');
  }

}
