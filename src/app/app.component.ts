import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sdLbog';
  @ViewChild('drawer')
  sidenav!: MatSidenav;
  onSwipe(evt:any){
    // console.log(`${evt.deltaX} ${evt.deltaY}`)
    Math.abs(evt.deltaX) > 40 ? (evt.deltaX > 0 ?  this.sidenav.open():  this.sidenav.close()):'';
    //const y = Math.abs(evt.deltaY) > 40 ? (evt.deltaY > 0 ? 'down' : 'up') : '';
   
    // console.log( `${x} ${y}`);
  }
}
