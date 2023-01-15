import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelSlayerPageRoutingModule } from './level-slayer-routing.module';

import { LevelSlayerPage } from './level-slayer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelSlayerPageRoutingModule
  ],
  declarations: [LevelSlayerPage]
})
export class LevelSlayerPageModule {}
