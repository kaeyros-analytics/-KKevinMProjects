import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../services/contact.service';
import { Contact } from '../../../models/contact';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  contactForm: FormGroup = this.createContactForm();

  model = new Contact;
  submitted = false;
  error: {} | undefined;
  constructor( private contactService: ContactService, private formBuilder: FormBuilder) { }

  onSubmit() {
    this.submitted = true;
    return this.contactService.contactForm(this.model).subscribe(
      data => this.model = data,
      error => this.error = error
    );
  }

  ngOnInit(): void {
  }

  /**
   * Create contact form
   */
  createContactForm(): FormGroup
  {
    return this.formBuilder.group({
      name    : [null, [Validators.required]],
      email   : [null, [Validators.email, Validators.required]],
      phone   : [null],
      subject   : [null, [Validators.required]],
      message   : [null, [Validators.required]],
    });
  }

}
