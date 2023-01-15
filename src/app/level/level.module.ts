import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import { BrowserModule } from "@angular/platform-browser";
import { LevelPage } from "./level.page";
import { SwiperModule } from "swiper/angular";

import { LevelPageRoutingModule } from './level-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelPageRoutingModule,
    [CommonModule, FormsModule, SwiperModule],

  ],
  declarations: [LevelPage],
  bootstrap: [LevelPage]
})
export class LevelPageModule { }
