import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FichaComponent } from './pages/ficha/ficha.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ficha/:id',
    component: FichaComponent,
  }
];

@NgModule({
  declarations: [
    FichaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class FichaModule { }
