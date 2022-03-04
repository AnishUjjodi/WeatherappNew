import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home', 
  loadChildren:()=>import('./home/home.module').then(mod=>mod.HomeModule)},
  {path:'favourite', 
  loadChildren:()=>import('./favourite/favourite.module').then(mod=>mod.FavouriteModule)},
  {path:'recentsearch',
  loadChildren:()=>import('./recent/recent.module').then(mod=>mod.RecentModule)}
  ,
    { path: '',
     pathMatch: 'full', 
     loadChildren:()=>import('./home/home.module').then(mod=>mod.HomeModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
