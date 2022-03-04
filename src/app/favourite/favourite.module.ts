import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouriteComponent } from './favourite/favourite.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'' , component:FavouriteComponent}
];

@NgModule({
  declarations: [
    FavouriteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class FavouriteModule { }
