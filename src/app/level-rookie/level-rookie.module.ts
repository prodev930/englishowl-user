import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelRookiePageRoutingModule } from './level-rookie-routing.module';

import { LevelRookiePage } from './level-rookie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelRookiePageRoutingModule
  ],
  declarations: [LevelRookiePage]
})
export class LevelRookiePageModule {}
