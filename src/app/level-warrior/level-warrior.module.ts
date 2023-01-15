import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelWarriorPageRoutingModule } from './level-warrior-routing.module';

import { LevelWarriorPage } from './level-warrior.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelWarriorPageRoutingModule
  ],
  declarations: [LevelWarriorPage]
})
export class LevelWarriorPageModule {}
