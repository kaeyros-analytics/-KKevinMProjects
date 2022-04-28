import {Component} from '@angular/core';
import {DonationHelperService} from 'src/app/components/services/donation-helper.service';
import {BecomeMember} from '../../../models/become-member';
import {ContactService} from '../../../services/contact.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  model = new BecomeMember;
  submitted = false;
  error: {} | undefined;

  constructor(private contactService: ContactService) {
  }

  onSubmit() {
    this.submitted = true;
    // return this.contactService.contactForm(this.model).subscribe(
    //   data => this.model = data,
    //   error => this.error = error
    // );
  }

}
