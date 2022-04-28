import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BecomeAMemberComponent} from './become-a-member.component';

const routes: Routes = [{path: '', component: BecomeAMemberComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BecomeAMemberRoutingModule {
}
