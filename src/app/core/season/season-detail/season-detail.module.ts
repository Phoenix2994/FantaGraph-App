import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SeasonDetailPage } from './season-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SeasonDetailPage
  }, { path: ':season', component: SeasonDetailPage }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SeasonDetailPage]
})
export class SeasonDetailPageModule {}
