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

  URL = "https://newsapi.org/v2/";
  API_KEY = environment.newsConfig.API_KEY;

  constructor(private httpClient: HttpClient) { }
  
  getConfig() {
    return this.config;
  }

  getTrending(){
    return this.httpClient.get<{status:String, totalResults: Number, articles: []}>(this.URL+"top-headlines?country=in&apiKey="+this.API_KEY)
  }

  getRecommend(){
    return this.httpClient.get<{status:String, totalResults: Number, articles: []}>(this.URL+"everything?q=covid&pageSize=5&apiKey="+this.API_KEY)
  }

  getNewsTags(tag){
    return this.httpClient.get<{status:String, totalResults: Number, articles: []}>(this.URL+"everything?q="+tag+"&pageSize=5&apiKey="+this.API_KEY)
  }
  



}
