import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { SpendenRoutingModule } from './spenden-routing.module';
import { SpendenComponent } from './spenden.component';
import { SharedModule } from '../../shared/shared.module';
import { AboutTextComponent } from './about-text/about-text.component';
import { ProcessComponent } from './process/process.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import {ContentComponent} from './content/content.component';


@NgModule({
    declarations: [
        SpendenComponent,
        AboutTextComponent,
        ProcessComponent,
        TestimonialsComponent,
        BlogPostComponent,
        ContentComponent
    ],
  imports: [
    CommonModule,
    SpendenRoutingModule,
    SharedModule,
    NgbModule,
    NgxUsefulSwiperModule
  ]
})
export class SpendenModule { }
