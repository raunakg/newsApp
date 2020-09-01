import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';


@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  user:User;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  posts =[]

  constructor(private config: ConfigService, public auth: AuthService) { }

  ngOnInit(): void {

    this.auth.user$.subscribe(userData => {
      this.user = userData;
      
    })



    this.config.getTrending().subscribe(data => {
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
