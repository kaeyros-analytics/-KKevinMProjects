import {Component} from '@angular/core';
import {DonationHelperService} from 'src/app/components/services/donation-helper.service';
import data from '../../data/actual.json';

// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-donation-sidebar',
  templateUrl: './donation-sidebar.component.html',
  styleUrls: ['./donation-sidebar.component.css']
})
export class DonationSidebarComponent extends DonationHelperService {
  actual = data;

  searchOutput(value: string): void {
    if (value === '') {
      this.actual = this.actualData();
    } else {
      this.actual = this.actualData(value);
    }
  }

  public actualData(search?: string): any[] {
    if (!search) {
      return  data;
    }
    return data.filter((n: {title: string, shortdesc: string}) => n.title.toUpperCase().includes(search.toUpperCase()));
  }
}
