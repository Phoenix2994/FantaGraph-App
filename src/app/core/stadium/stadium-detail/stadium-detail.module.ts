import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StadiumDetailPage } from './stadium-detail.page';

const routes: Routes = [
  {
    path: '',
    component: StadiumDetailPage
  },
  { path: ':stadiumId', component: StadiumDetailPage }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StadiumDetailPage]
})
export class StadiumDetailPageModule { }
