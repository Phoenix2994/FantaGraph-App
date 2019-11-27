import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProsecutorsListPage } from './prosecutors-list.page';

const routes: Routes = [
  {
    path: '',
    component: ProsecutorsListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProsecutorsListPage]
})
export class ProsecutorsListPageModule {}
