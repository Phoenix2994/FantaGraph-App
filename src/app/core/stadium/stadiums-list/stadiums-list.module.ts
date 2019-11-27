import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StadiumsListPage } from './stadiums-list.page';

const routes: Routes = [
  {
    path: '',
    component: StadiumsListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StadiumsListPage]
})
export class StadiumsListPageModule {}
