import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelPage } from './level.page';

const routes: Routes = [
  {
    path: '',
    component: LevelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelPageRoutingModule {}
