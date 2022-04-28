import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SearchResultRoutingModule } from './search-result-routing.module';
import { SearchResultComponent } from './search-result.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    SearchResultComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    SearchResultRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class SearchResultModule { }
