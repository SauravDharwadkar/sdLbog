import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoPlayerComponent } from '../utils/components/video-player/video-player.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
{path:"reddit",component:HomeComponent,children:[{
  path:"reddit",component:HomeComponent,

}

]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedditRoutingModule { }
