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
  isCalendar : boolean = false
  year! : any ;

  years1 = [
    {
      id: 0,
      year: 'all'
    },
    {

      id: 1,
      year: 2018
    },
    {
      id: 2,
      year: 2019
    },
    {
      id: 3,
      year: 2020
    },
   
  ];
  years2 =[ 

    {
      id: 4,
      year: 2021
    },
    {
      id: 5,
      year: 2022
    },
    {
      id: 6,
      year: 2023
    },
   
   
   
  ];
 /*  years3 =[
   {
      id: 6,
      year: 2023
    },
   
   {
      id: 7,
      year: 2024
    },
    {
      id: 8,
      year: 2025
    },
    {
      id: 9,
      year: 2026
    },
    {
      id: 10,
      year: 2027
    },
    {
      id: 11,
      year: 2028
    },
   
   
  ] */

  filterByYear(year: any): void {
   /*  this.year = year;
    this.storyblock =  storyblock;
    this.filterProject(year); */
    if (year === 'all') {
      this.year = year
     
        
      this.storyblock =  storyblock;
    } else {
      this.year = year;
      this.filterProject(year);
    } 

  }

  ngOnInit(): void {
    super.ngOnInit();
    if (this.type === 'international') {
      this.isInternational = true;
    }
  }

  displayCalendar(){
    this.isCalendar = !this.isCalendar
  }

  clickYear(yearSelect:number){
    this.year= yearSelect

  }
}
