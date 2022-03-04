import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent
  ],

  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],

  exports:[
    HeaderComponent,
    NavigationComponent
  ]
})

export class CoreModule { }
