import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'parallax',
    loadChildren: () => import('./pages/item-details-parallax/item-details-parallax.module').then( m => m.ItemDetailsParallaxPageModule)
  },
  {
    path: 'expandable',
    loadChildren: () => import('./pages/item-details-expandable/item-details-expandable.module').then( m => m.ItemDetailsExpandablePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
