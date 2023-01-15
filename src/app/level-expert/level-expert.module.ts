import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelExpertPageRoutingModule } from './level-expert-routing.module';

import { LevelExpertPage } from './level-expert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelExpertPageRoutingModule
  ],
  declarations: [LevelExpertPage]
})
export class LevelExpertPageModule {}
