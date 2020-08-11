import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ConfigService } from '../services/config.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {
  posts= [];

  constructor(private config: ConfigService, private elementRef: ElementRef,@Inject(DOCUMENT) private doc,private route: ActivatedRoute,private router: Router) { 
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

}
