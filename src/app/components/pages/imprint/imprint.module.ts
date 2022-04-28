import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { ImprintRoutingModule } from './imprint-routing.module';
import { ImprintComponent } from './imprint.component';
import { SharedModule } from '../../shared/shared.module';
import { AboutTextComponent } from './about-text/about-text.component';
import { ProcessComponent } from './process/process.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import {ContentComponent} from './content/content.component';


@NgModule({
    declarations: [
        ImprintComponent,
        AboutTextComponent,
        ProcessComponent,
        TestimonialsComponent,
        BlogPostComponent,
        ContentComponent
    ],
  imports: [
    CommonModule,
    ImprintRoutingModule,
    SharedModule,
    NgbModule,
    NgxUsefulSwiperModule
  ]
})
export class ImprintModule { }
