import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'team-dashboard',
        children: [
          {
            path: '',
            loadChildren: '../team-dashboard/team-dashboard.module#TeamDashboardPageModule'
          }
        ]
      },
      {
        path: 'team-rosa',
        children: [
          {
            path: '',
            loadChildren: '../team-rosa/team-rosa.module#TeamRosaPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/team-dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/team-dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}