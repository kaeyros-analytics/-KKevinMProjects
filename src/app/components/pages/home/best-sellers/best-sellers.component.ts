import {Component, Input} from '@angular/core';
import {ShopService} from 'src/app/components/services/shop.service';

@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.css']
})
export class BestSellersComponent extends ShopService {
  @Input() title = '';
  @Input() datas: {
    image: string;
    title: string;
    links?: string
  }[] | undefined;

  // tslint:disable-next-line:typedef
 public gotoWebSite(links: string) {
   if(links) {  window.open(links, '_blank'); }
  }
}
