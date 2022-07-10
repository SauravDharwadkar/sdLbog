import { HttpClient } from '@angular/common/http';
import { Component, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { HttpHandlerService } from './reddit/services/http-handler.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SdLbog';
  subTitle!: string;
  @ViewChild('drawer')
  sidenav!: MatSidenav;
  subConf :any
  // filterdCat!:{[cat:string]:data: any[]};
  // catagories!:{ [catagary:string]:{data:any[]} }  
  dataFilter!: {cat:string,data:any[]}[];
  catagory:string[] = []
  filterdData:{catagory:any,data:any}[]=[]
  constructor(private http: HttpClient,private util:HttpHandlerService) {
util.subtitle.subscribe(data=>{
  this.subTitle=data
})

    this.http.get('assets/baseSub.json').subscribe((res) => {
      this.subConf = res;
      console.log(this.subConf)

      for ( let i of this.subConf){
        for ( let cat of i.catagary){
          this.catagory.includes(cat)?"":this.catagory.push(cat)
          this.filterdData.push({catagory:cat,data:i})
        }
      }
      console.log(this.filterdData)
     //todo fix logic
  //   for ( let i of this.subConf){
  //     for ( let cat of i.catagary){
  //       // this.catagories[cat].push(i)
  //       this.catagory.includes(cat)?"":this.catagory.push(cat)
  //       let notfound=true
  //       for ( let key of this.dataFilter){
  //            if( key.cat==cat){
  //               key.data.push(i)
  //               notfound=false
  //               break
  //            }
  //       }   
  //       if(notfound){
  //         this.dataFilter.push({cat:cat,data:[i]})
  //       }   

  //     }
        
  // }
  
  // console.log(this.dataFilter)

  // // console.log(this.catagories)
  // // console.log("cat",this.catagories["meme"])
    });
    
    

  }

  tranfsformToArr(value:any){
    let arr = [];
    for (let key in value) {
      arr.push({key: key, value: value[key]});
    }
    console.log("whatever array pip",arr)
    return arr;
  }

  onSwipe(evt:any){
    // console.log(`${evt.deltaX} ${evt.deltaY}`)
    Math.abs(evt.deltaX) > 40 ? (evt.deltaX > 0 ?  this.sidenav.open():  this.sidenav.close()):'';
    //const y = Math.abs(evt.deltaY) > 40 ? (evt.deltaY > 0 ? 'down' : 'up') : '';
   
    // console.log( `${x} ${y}`);
  }
}
