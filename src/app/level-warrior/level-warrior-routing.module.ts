import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelWarriorPage } from './level-warrior.page';

const routes: Routes = [
  {
    path: '',
    component: LevelWarriorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelWarriorPageRoutingModule {}
