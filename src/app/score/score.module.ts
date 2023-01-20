import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScorePageRoutingModule } from './score-routing.module';
import { NgApexchartsModule } from "ng-apexcharts";
import { ScorePage } from './score.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScorePageRoutingModule,
    NgApexchartsModule
  ],
  declarations: [ScorePage]
})
export class ScorePageModule {}
