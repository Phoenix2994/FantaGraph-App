import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlayerDetailPage } from './player-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PlayerDetailPage
  },
  { path: ':id', component: PlayerDetailPage },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlayerDetailPage]
})
export class PlayerDetailPageModule { }
