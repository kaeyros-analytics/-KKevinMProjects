import {Component} from '@angular/core';
import {StoryHelperService} from 'src/app/components/services/story-helper.service';
import storyblock from '../../../data/story/story.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent extends StoryHelperService {

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

  // tslint:disable-next-line:typedef
  filterByYear(year: any) {
    if (year === 'all') {
      this.storyblock =  storyblock;
    } else {
      this.filterProject(year);
    }

  }
}
