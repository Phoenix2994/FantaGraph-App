import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TeamDashboardPage } from './team-dashboard.page';


const routes: Routes = [
  {
    path: '',
    component: TeamDashboardPage,
  }
];

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TeamDashboardPage]
})
export class TeamDashboardPageModule { }
