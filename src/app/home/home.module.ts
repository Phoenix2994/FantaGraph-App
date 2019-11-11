import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      {
        path: 'tabs', loadChildren:
          () => import('../core/team/tabs/tabs.module').then(m => m.TabsPageModule)
      },
      {
        path: 'new-team', loadChildren:
          () => import('../core/team/new-team/new-team.module').then(m => m.NewTeamPageModule)
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
