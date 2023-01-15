import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { splashComponent } from './splash.page';

import { splashRoutingModule } from './splash-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    splashRoutingModule
  ],
  declarations: [splashComponent]
})
export class splashPageModule {}