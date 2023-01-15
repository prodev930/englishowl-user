import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CurrentLevelPage } from './currentLevel.page';

import { CurrentLevelRoutingModule } from './currentLevel-routeing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentLevelRoutingModule
  ],
  declarations: [CurrentLevelPage]
})
export class CurrentLevelPageModule {}
