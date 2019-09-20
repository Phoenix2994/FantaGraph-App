import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'player-detail', loadChildren: './player-detail/player-detail.module#PlayerDetailPageModule' },
  { path: 'team-detail', loadChildren: './team-detail/team-detail.module#TeamDetailPageModule' },
  { path: 'stadium-detail', loadChildren: './stadium-detail/stadium-detail.module#StadiumDetailPageModule' },
  { path: 'coach-detail', loadChildren: './coach-detail/coach-detail.module#CoachDetailPageModule' },
  { path: 'prosecutor-detail', loadChildren: './prosecutor-detail/prosecutor-detail.module#ProsecutorDetailPageModule' },
  { path: 'president-detail', loadChildren: './president-detail/president-detail.module#PresidentDetailPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
