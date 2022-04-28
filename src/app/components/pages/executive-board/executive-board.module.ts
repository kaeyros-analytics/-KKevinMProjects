import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExecutiveBoardComponent} from './executive-board.component';
import {SharedModule} from '../../shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import {TeamComponent} from './team/team.component';
import {ContentComponent} from './content/content.component';
import {DonationArchiveRoutingModule} from './executive-board-routing.module';



@NgModule({
  declarations: [
    ExecutiveBoardComponent,
    TeamComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule,
    DonationArchiveRoutingModule
  ]
})
export class ExecutiveBoardModule { }
