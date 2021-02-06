import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallengeOneRoutingModule } from './challenge-one-routing.module';
import { ChallengeOneComponent } from './challenge-one.component';
import { CardComponent } from './card/card.component';
// import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    ChallengeOneComponent,
    CardComponent
    // CartComponent
  ],
  imports: [
    CommonModule,
    ChallengeOneRoutingModule
  ]
})
export class ChallengeOneModule { }
