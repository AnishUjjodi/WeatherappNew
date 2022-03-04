import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentComponent } from './recent/recent.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'' , component:RecentComponent}
];

@NgModule({
  declarations: [
    RecentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RecentModule { }
