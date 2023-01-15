import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChapterPage } from './chapter.page';

const routes: Routes = [
  {
    path: '',
    component: ChapterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChapterPageRoutingModule {}
