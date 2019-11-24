import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'select-profile',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'players-list', loadChildren: './core/player/players-list/players-list.module#PlayersListPageModule' },
  { path: 'player-detail', loadChildren: './core/player/player-detail/player-detail.module#PlayerDetailPageModule' },
  { path: 'team-detail', loadChildren: './core/team/team-detail/team-detail.module#TeamDetailPageModule' },
  { path: 'stadium-detail', loadChildren: './core/stadium/stadium-detail/stadium-detail.module#StadiumDetailPageModule' },
  { path: 'coach-detail', loadChildren: './core/coach/coach-detail/coach-detail.module#CoachDetailPageModule' },
  { path: 'prosecutor-detail', loadChildren: './core/prosecutor/prosecutor-detail/prosecutor-detail.module#ProsecutorDetailPageModule' },
  { path: 'president-detail', loadChildren: './core/president/president-detail/president-detail.module#PresidentDetailPageModule' },
  { path: 'players-list', loadChildren: './core/player/players-list/players-list.module#PlayersListPageModule' },
  { path: 'tabs', loadChildren: './core/team/tabs/tabs.module#TabsPageModule' },
  { path: 'new-team', loadChildren: './core/team/new-team/new-team.module#NewTeamPageModule' },
  { path: 'teams-list', loadChildren: './core/team/teams-list/teams-list.module#TeamsListPageModule' },
  { path: 'select-profile', loadChildren: './select-profile/select-profile.module#SelectProfilePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
