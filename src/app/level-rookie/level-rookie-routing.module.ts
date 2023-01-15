import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelRookiePage } from './level-rookie.page';

const routes: Routes = [
  {
    path: '',
    component: LevelRookiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelRookiePageRoutingModule {}
