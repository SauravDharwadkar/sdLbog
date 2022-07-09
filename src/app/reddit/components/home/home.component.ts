import { Component, HostListener, Input, OnInit } from '@angular/core';
import { filterdDataModel } from '../../models/filtered.model';
import { HttpHandlerService } from '../../services/http-handler.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  subreddit:any="pune";
  
  regexpImg = new RegExp('........i.redd.*');
  regexpVid = new RegExp('........v.redd.*');

  filterdData: filterdDataModel[] = [];
  count = 0;
  updatecount = 0;
  after: string[] = [];

  constructor(private httpHandler: HttpHandlerService) { 
    this.getNewData() 
  }

  getNewData() {
    console.log("got http functuionm")
    console.log(this.filterdData);
    if (this.count == this.updatecount) {
      this.count++;
      this.httpHandler
        .getJsonReddit(this.subreddit,"hot",this.after[this.after.length - 1])
        .subscribe((resp) => {
          //this.dataStreamer?.push(resp);

          for (let item of resp.data.children) {
            //  console.log(item.data.url)
            if (this.regexpImg.test(item.data.url)) {
              this.filterdData.push({
                id:item.data.id,
                title: item.data.title,
                type: 1,
                text: '',
                url: item.data.url,
                formate:"",
                formateType:""
              });
            } else if (
              this.regexpVid.test(item.data.url) &&
              item.data.is_video == true
            ) {
              this.filterdData.push({
                id:item.data.id,
                title: item.data.title,
                type: 2,
                text: '',
                url: item.data.secure_media.reddit_video.dash_url,  //hls_url //fallback_url, //dash_url
                formate:"dash",
                formateType:"application/dash+xml"
              });
            } else {
              this.filterdData.push({
                id:item.data.id,
                title: item.data.title,
                type: 0,
                text: item.data.selftext,
                url: item.data.url,
                formate:"",
                formateType:""
              });
            }
          }
          this.after.push(resp.data.after);
          console.log(this.after, resp.data.after);
          this.updatecount++;
        });
    }
  }

  ngOnInit(): void {
  }

  isInViewport(element: any) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  @HostListener('scroll', ['$event']) 
  public scrollHandler(event: any) {
    console.log("scoll triggerd")
    for (let x of document.getElementsByTagName('video')) {
      if (this.isInViewport(x)) {
        x.play().catch((e)=>{
          console.log(e)
       });
      } else {
        x.pause();
      }
    }

    //console.log( event.target.offsetHeight , event.target.scrollTop ,
     // event.target.scrollHeight)
    if (
      event.target.offsetHeight + event.target.scrollTop + 50 >=
      event.target.scrollHeight
    ) {
      this.getNewData();
    }
}
}