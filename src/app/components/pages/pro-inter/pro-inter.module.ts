import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProInterRoutingModule } from './pro-inter-routing.module';
import { ProInterComponent } from './pro-inter.component';
import { ContentComponent } from './content/content.component';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    ProInterComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    ProInterRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule
  ]
})
export class ProInterModule { }
