import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizPage } from './quiz.page';

const routes: Routes = [
  {
    path: '',
    component: QuizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizPageRoutingModule {}
