import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedditRoutingModule } from './reddit-routing.module';
import { HomeComponent } from './components/home/home.component';
import { UtilsModule } from '../utils/utils.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RedditRoutingModule,
    UtilsModule
  ],
  exports:[HomeComponent]
})
export class RedditModule { }
