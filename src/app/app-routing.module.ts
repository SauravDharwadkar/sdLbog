import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RedditModule } from './reddit/reddit.module';

const routes: Routes = [
  { path: '',   redirectTo: '/reddit', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
