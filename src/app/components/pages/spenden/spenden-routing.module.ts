import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpendenComponent } from './spenden.component';

const routes: Routes = [{ path: '', component: SpendenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpendenRoutingModule { }
