import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProsecutorDetailPage } from './prosecutor-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ProsecutorDetailPage
  },
  { path: ':prosId', component: ProsecutorDetailPage }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProsecutorDetailPage]
})
export class ProsecutorDetailPageModule { }
