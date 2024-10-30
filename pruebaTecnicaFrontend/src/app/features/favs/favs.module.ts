import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavsComponent } from './pages/favs/favs.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FavsComponent
  }
]

@NgModule({
  declarations: [
    FavsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FavsModule { }
