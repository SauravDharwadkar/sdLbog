
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedditModule } from './reddit/reddit.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import { BrowserModule, HammerGestureConfig, HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import * as Hammer from 'hammerjs';

export class HammerConfig extends HammerGestureConfig {
  override buildHammer(element: HTMLElement): HammerManager {
    return new Hammer.Manager(element,{
      inputClass:Hammer.TouchInput,
      touchAction:'auto',
      recognizers:[
        [
          Hammer.Swipe,{
            direction:Hammer.DIRECTION_HORIZONTAL
          }
        ]
      ]
    })
  }
  
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RedditModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    HammerModule
  ],
  providers: [ { 
    provide: HAMMER_GESTURE_CONFIG, 
    useClass: HammerConfig 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
