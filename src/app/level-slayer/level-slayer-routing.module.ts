import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelSlayerPage } from './level-slayer.page';

const routes: Routes = [
  {
    path: '',
    component: LevelSlayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelSlayerPageRoutingModule {}
