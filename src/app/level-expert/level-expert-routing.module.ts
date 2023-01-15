import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelExpertPage } from './level-expert.page';

const routes: Routes = [
  {
    path: '',
    component: LevelExpertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelExpertPageRoutingModule {}
