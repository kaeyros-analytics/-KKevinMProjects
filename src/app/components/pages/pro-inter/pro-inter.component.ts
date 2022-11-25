import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pro-inter',
  templateUrl: './pro-inter.component.html',
  styleUrls: ['./pro-inter.component.css']
})
export class ProInterComponent implements OnInit {
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
