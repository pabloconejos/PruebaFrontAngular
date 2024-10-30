import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'search', loadChildren: () => import('../../../features/search/search.module').then( m => m.SearchModule)},
      { path: 'ranking', loadChildren: () => import('../../../features/ranking/ranking.module').then( m => m.RankingModule)},
      { path: 'ficha', loadChildren: () => import('../../../features/ficha/ficha.module').then( m => m.FichaModule)},
      { path: 'favs', loadChildren: () => import('../../../features/favs/favs.module').then( m => m.FavsModule)},
      { path: '', redirectTo: 'search', pathMatch: 'full' }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }