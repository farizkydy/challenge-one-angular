import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallengeOneComponent } from './challenge-one.component';

const routes: Routes = [
  {
    path: "",
    component: ChallengeOneComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallengeOneRoutingModule { }
