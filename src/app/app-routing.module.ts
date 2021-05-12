import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'liste-profil',
    loadChildren: () => import('./liste-profil/liste-profil.module').then( m => m.ListeProfilPageModule)
  },
  {
    path: 'detail-profil',
    loadChildren: () => import('./detail-profil/detail-profil.module').then( m => m.DetailProfilPageModule)
  },
  {
    path: 'messagerie',
    loadChildren: () => import('./messagerie/messagerie.module').then( m => m.MessageriePageModule)
  },
  {
    path: 'favoris',
    loadChildren: () => import('./favoris/favoris.module').then( m => m.FavorisPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
