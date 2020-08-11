import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as $ from 'jquery';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private elementRef: ElementRef,@Inject(DOCUMENT) private doc, public auth: AuthService ) 
  { 
  }

   ngOnInit(): void {


     var s2 = document.createElement("script");
     s2.type = "text/javascript";
     s2.src = "../assets/js/main1.js";
     this.elementRef.nativeElement.appendChild(s2);

  }

}
