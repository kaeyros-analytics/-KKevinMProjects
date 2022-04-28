import {Component, OnInit} from '@angular/core';
import {SwiperOptions} from 'swiper';
import data from '../../../data/executive-boads.json';
import {Team} from './team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  public teamblock: Team = data;

  constructor() {
  }

  ngOnInit(): void {
  }

}
