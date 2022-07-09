import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as dashjs from 'dashjs';
import { filterdDataModel } from 'src/app/reddit/models/filtered.model';



@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  @Input()
  item!: filterdDataModel; 
  @ViewChild('videplayer') input!: ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    if (this.item.formate == "dash"){
    var url = this.item.url;
    var player = dashjs.MediaPlayer().create();
    let ele=document.getElementById(this.item.id)||this.input.nativeElement
    player.initialize(ele, url, true);
  }
  }

}
