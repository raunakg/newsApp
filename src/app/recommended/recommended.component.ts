import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ConfigService } from '../services/config.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {
  posts= [];
  user:User;

  constructor(public auth: AuthService,private config: ConfigService, private elementRef: ElementRef,@Inject(DOCUMENT) private doc,private route: ActivatedRoute,private router: Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    const tag = this.route.snapshot.paramMap.get('tag');

    if(tag){
      this.getTagPosts(tag)
    }
    else{
      this.getLastRead();
    }

  
    var s2 = document.createElement("script");
    s2.type = "text/javascript";
    s2.src = "../assets/js/main1.js";
    this.elementRef.nativeElement.appendChild(s2);


    this.auth.user$.subscribe(userData => {
      this.user = userData;
      
    })
  }

  getLastRead(){
    this.config.getRecommend().subscribe(data => {
      this.posts = data.articles;
      console.log(this.posts);
    })
  }

  getTagPosts(tag){
    this.config.getNewsTags(tag).subscribe(data => {
      this.posts = data.articles;
      console.log(this.posts);
    })
  }

  goToLink(url){

    if(this.user){
      if(!this.user.postUrl){
        this.user.postUrl=[url];
        
        this.config.updateKeywords(this.user);

      }else {
        this.user.postUrl.push(url);
        this.config.updateKeywords(this.user);
      }

    }

    window.open(url, "myWindow", 'width=800,height=600');
    window.close();
  }

}
