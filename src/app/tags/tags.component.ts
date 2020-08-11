import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags=[]

  constructor(private config:ConfigService) { }

  ngOnInit(): void {
    this.tags = this.config.getConfig().tags;
  }

}
