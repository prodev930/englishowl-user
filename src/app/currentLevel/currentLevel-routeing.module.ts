import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentLevelPage } from './currentLevel.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentLevelPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrentLevelRoutingModule {}
