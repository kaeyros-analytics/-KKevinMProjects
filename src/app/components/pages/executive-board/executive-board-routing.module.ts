import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExecutiveBoardComponent} from './executive-board.component';

const routes: Routes = [{ path: '', component: ExecutiveBoardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonationArchiveRoutingModule { }
