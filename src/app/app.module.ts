
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedditModule } from './reddit/reddit.module';
import { UtilsModule } from './utils/utils.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RedditModule,
    UtilsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    HammerModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
