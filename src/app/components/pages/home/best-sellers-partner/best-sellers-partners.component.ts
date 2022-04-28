import {Component} from '@angular/core';
import {ShopService} from 'src/app/components/services/shop.service';

@Component({
  selector: 'app-best-sellers-partners',
  templateUrl: './best-sellers-partners.component.html',
  styleUrls: ['./best-sellers-partners.component.css']
})
export class BestSellersPartnersComponent {
  partners = [
    '/assets/img/partners/partner-1.jpg',
    '/assets/img/partners/partner-2.jpg',
    '/assets/img/partners/partner-3.jpg',
  ];
}
