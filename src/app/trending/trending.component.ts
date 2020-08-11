import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
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

  constructor(private config: ConfigService) { }

  ngOnInit(): void {
    this.config.getTrending().subscribe(data => {
      this.posts = data.articles;
      console.log(this.posts);
    })
    
  }

}
