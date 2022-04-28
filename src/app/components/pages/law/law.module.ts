import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LawComponent} from './law.component';
import {SharedModule} from '../../shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import {ContentComponent} from './content/content.component';
import { lawRoutingModule} from './law-routing.module';



@NgModule({
  declarations: [
    LawComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule,
    lawRoutingModule
  ]
})
export class LawModule { }
