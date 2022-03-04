import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SidebarDirective } from './directives/sidebar.directive';
import { AppService } from './services/app.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule
   
  ],
 
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
