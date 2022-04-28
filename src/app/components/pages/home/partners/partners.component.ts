import {Component, Input} from '@angular/core';
import {ShopService} from 'src/app/components/services/shop.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent {

  partners = ['/assets/img/partners/partner-1.jpg', '/assets/img/partners/partner-2.jpg', '/assets/img/partners/partner-3.jpg'];
}
