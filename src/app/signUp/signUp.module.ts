import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { signUpComponent } from './signUp.page';

import { SignUpRoutingModule } from './signUp-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpRoutingModule
  ],
  declarations: [signUpComponent]
})
export class signUpPageModule {}