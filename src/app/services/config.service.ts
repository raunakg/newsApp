import { Injectable } from '@angular/core';
import { configuration } from '../configuration';
import { Post } from '../models/post';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  uid;
  userRef: AngularFirestoreDocument<User>


  

  config = configuration;

  URL = "https://newsapi.org/v2/";
  API_KEY = environment.newsConfig.API_KEY;

  constructor(private httpClient: HttpClient, private afs: AngularFirestore, private auth: AuthService) { 

  }
  
  getConfig() {
    return this.config;
  }

  getTrending(){
    return this.httpClient.get<{status:String, totalResults: Number, articles: []}>(this.URL+"top-headlines?country=in&apiKey="+this.API_KEY)
  }

  getRecommend(){
    return this.httpClient.get<{status:String, totalResults: Number, articles: []}>(this.URL+"everything?q=cricket&pageSize=5&apiKey="+this.API_KEY)
  }

  getNewsTags(tag){
    return this.httpClient.get<{status:String, totalResults: Number, articles: []}>(this.URL+"everything?q="+tag+"&pageSize=5&apiKey="+this.API_KEY)
  }

  updateKeywords(user:User){
     this.afs.doc<User>(`users/${user.uid}`).update(user);
  }

  // getUserDataById(id: string){
  //   this.userRef = this.afs.doc<User>(`users/${id}`);
  //   return this.userRef.valueChanges();
  // }








}
