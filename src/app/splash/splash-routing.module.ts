import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { splashComponent } from './splash.page';

const routes: Routes = [
  {
    path: '',
    component: splashComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class splashRoutingModule {}
