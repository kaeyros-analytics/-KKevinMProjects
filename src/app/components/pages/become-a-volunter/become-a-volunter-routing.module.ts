import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BecomeAVolunterComponent} from './become-a-volunter.component';

const routes: Routes = [{path: '', component: BecomeAVolunterComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BecomeAVolunterRoutingModule {
}
