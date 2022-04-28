import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { PrivacyPolicyComponent } from './privacy-policy.component';
import { SharedModule } from '../../shared/shared.module';
import { AboutTextComponent } from './about-text/about-text.component';
import { ProcessComponent } from './process/process.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import {DatenschutzerklRungComponent} from './content/content.component';
import {PrivacyPolicyRoutingModule} from './privacy-policy-routing.module';


@NgModule({
    declarations: [
        PrivacyPolicyComponent,
        AboutTextComponent,
        ProcessComponent,
        TestimonialsComponent,
        BlogPostComponent,
        DatenschutzerklRungComponent
    ],
  imports: [
    CommonModule,
    PrivacyPolicyRoutingModule,
    SharedModule,
    NgbModule,
    NgxUsefulSwiperModule
  ]
})
export class PrivacyPolicyModule { }
