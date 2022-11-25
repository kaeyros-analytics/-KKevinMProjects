import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProInterComponent } from './pro-inter.component';

const routes: Routes = [
  { path: '', component: ProInterComponent },
  /* { path: 'international', component: ProInterComponent, data: {type: 'international'} } */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProInterRoutingModule { }
