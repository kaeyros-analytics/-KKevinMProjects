import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxUsefulSwiperModule} from 'ngx-useful-swiper';

import {ContentComponent} from './content/content.component';
import {SharedModule} from '../../shared/shared.module';
import { BecomeAMemberRoutingModule} from './become-a-member-routing.module';
import {BecomeAMemberComponent} from './become-a-member.component';
import {FormsModule} from '@angular/forms';


// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    ContentComponent,
    BecomeAMemberComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        BecomeAMemberRoutingModule,
        NgbModule,
        FormsModule,

    ]
})
export class BecomeAMemberModule {
}
