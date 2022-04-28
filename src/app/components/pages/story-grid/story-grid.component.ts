import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-story-grid',
  templateUrl: './story-grid.component.html',
  styleUrls: ['./story-grid.component.css']
})
export class StoryGridComponent implements OnInit {
  private id: any;

  constructor(private route: ActivatedRoute) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
    });
  }
}
