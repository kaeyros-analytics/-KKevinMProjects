import {Component, OnInit} from '@angular/core';
import {SwiperOptions} from 'swiper';
import data from '../../../data/teams.json';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  public teamblock: {
    img: string,
    name: string,
    countryCode: string
  }[] = data;

  constructor() {
  }

  // Settings
  settings: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 15,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      576: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 8,
        spaceBetween: 5,
      },
    }
  };

  ngOnInit(): void {
  }

}
