import { Injectable } from '@angular/core';
import { configuration } from '../configuration';
import { Post } from '../models/post';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  

  config = configuration;

  URL = "https://api.currentsapi.services/v1/";
  API_KEY = environment.newsConfig.API_KEY;

  constructor(private httpClient: HttpClient) { }
  
  getConfig() {
    return this.config;
  }

  getTrending(){
    return this.httpClient.get<{status:String,  news: []}>(this.URL+"latest-news?apiKey="+this.API_KEY)
  }

  getRecommend(){
    return this.httpClient.get<{status:String, news: []}>(this.URL+"search?keywords=covid&apiKey="+this.API_KEY)
  }

  getNewsTags(tag){
    return this.httpClient.get<{status:String, news: []}>(this.URL+"search?keywords="+tag+"&apiKey="+this.API_KEY)
  }
  



}
