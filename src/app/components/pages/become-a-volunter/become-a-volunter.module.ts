import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxUsefulSwiperModule} from 'ngx-useful-swiper';

import {ContentComponent} from './content/content.component';
import {SharedModule} from '../../shared/shared.module';
import { BecomeAVolunterRoutingModule} from './become-a-volunter-routing.module';
import {BecomeAVolunterComponent} from './become-a-volunter.component';
import {FormsModule} from '@angular/forms';


// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    ContentComponent,
    BecomeAVolunterComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        BecomeAVolunterRoutingModule,
        NgbModule,
        FormsModule,

    ]
})
export class BecomeAVolunterModule {
}
