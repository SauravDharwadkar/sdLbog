import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RedditModule } from './reddit/reddit.module';

const routes: Routes = [
  { path: '',   redirectTo: '/reddit/meme/hot', pathMatch: 'full' }, 
 // {path:"**",redirectTo: '/reddit/meme/hot'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
