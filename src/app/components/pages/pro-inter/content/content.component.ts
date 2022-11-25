import {Component, Input} from '@angular/core';
import {StoryHelperService} from 'src/app/components/services/story-helper.service';
import storyblock from '../../../data/story/story.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent extends StoryHelperService {

  @Input() type =  '';
  isInternational = false;

  years = [
    {

      id: 0,
      year: 'all'
    },
    {

      id: 1,
      year: 2019
    },
    {
      id: 2,
      year: 2018
    },
    {
      id: 3,
      year: 2017
    },
    {
      id: 4,
      year: 2016
    }
  ];

  filterByYear(year: any): void {
    if (year === 'all') {
      this.storyblock =  storyblock;
    } else {
      this.filterProject(year);
    }

  }

  ngOnInit(): void {
    super.ngOnInit();
    if (this.type === 'international') {
      this.isInternational = true;
    }
  }
}
