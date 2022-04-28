import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {StoryHelperService} from 'src/app/components/services/story-helper.service';
import {ActivatedRoute} from '@angular/router';
import {Actuality} from '../../../models/actuality';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent extends StoryHelperService implements OnInit {
  actuality?: Actuality;

  constructor(private routes: ActivatedRoute) {
    // @ts-ignore
    super();
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    super.ngOnInit();
    this.routes.paramMap.subscribe(params => {
      const data: { value?: string } = (params as any).params;
      if (data) {
        this.actuality = this.getActuality(data.value?.trim());
      }
    });
    console.log(this.storydetails);

  }
}
