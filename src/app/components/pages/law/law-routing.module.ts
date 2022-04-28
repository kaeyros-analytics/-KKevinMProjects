import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LawComponent} from './law.component';

const routes: Routes = [{ path: '', component: LawComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class lawRoutingModule { }
