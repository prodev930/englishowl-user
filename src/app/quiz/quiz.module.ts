import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


// import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { CardSnippetModule } from 'src/@core/components/card-snippet/card-snippet.module';
// import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { QuizPageRoutingModule } from './quiz-routing.module';


import { QuizPage } from './quiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizPageRoutingModule,
    NgbModule,
    // ContentHeaderModule,
    // CardSnippetModule
  ],
  declarations: [QuizPage]
})
export class QuizPageModule { }


