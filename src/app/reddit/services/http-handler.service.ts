import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { redditDataModel } from '../models/reddit.model';

@Injectable({
  providedIn: 'root'
})
export class HttpHandlerService {

  constructor(private http:HttpClient) { }
  public getJsonReddit(comunity:string="meme",type:string="hot",after:string){
   
    //console.log("https://www.reddit.com/r/meme/hot.json?limit=10&after="+after)
    return this.http.get<redditDataModel>("https://www.reddit.com/r/"+comunity+"/"+type+".json?limit=20&after="+after)
  }

}
