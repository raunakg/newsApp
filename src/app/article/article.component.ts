import { Component, OnInit, ElementRef, Inject} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  state$:Observable<any>;

  constructor(private elementRef: ElementRef,@Inject(DOCUMENT) private doc , private route: ActivatedRoute) {}

  ngOnInit(): void {

    

    var s2 = document.createElement("script");
    s2.type = "text/javascript";
    s2.src = "../assets/js/main1.js";
    this.elementRef.nativeElement.appendChild(s2);

    this.state$ = this.route.paramMap.pipe(map(()=> window.history.state  ))
    console.log(this.state$)
  }


}
