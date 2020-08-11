import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ConfigService } from '../services/config.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-last-read',
  templateUrl: './last-read.component.html',
  styleUrls: ['./last-read.component.css']
})
export class LastReadComponent implements OnInit {

  posts= [];


  constructor(private config: ConfigService, private elementRef: ElementRef,@Inject(DOCUMENT) private doc, ) { }

  ngOnInit(): void {
    this.getLastRead();
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


}
