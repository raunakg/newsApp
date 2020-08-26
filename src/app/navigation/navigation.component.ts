import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ConfigService } from '../services/config.service';
import { User } from '../models/user';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  user:User;

  constructor(public auth: AuthService, private router: Router, private config: ConfigService) { }

  ngOnInit(): void {
      this.auth.user$.subscribe(userData => {
        this.user = userData;
        
      })

  }

  search(keywords){
    if(this.user){
      if(!this.user.tags){
        this.user.tags=[keywords];
        
        this.config.updateKeywords(this.user);

      }else {
        this.user.tags.push(keywords);
        this.config.updateKeywords(this.user);
      }

    }
    

    
    this.router.navigate(['/news/'+keywords])
  }

}
