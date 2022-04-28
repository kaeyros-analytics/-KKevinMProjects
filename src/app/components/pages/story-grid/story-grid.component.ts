import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';

@Component({
  selector: 'app-story-grid',
  templateUrl: './story-grid.component.html',
  styleUrls: ['./story-grid.component.css']
})
export class StoryGridComponent implements OnInit {
  private id: any;
  data: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void{
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
    });

    if (this.route.data) {
      this.route.data.subscribe(values => {
        this.data = values;
      });
    }
  }
}
