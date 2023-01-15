import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { signUpComponent } from './signUp.page';

const routes: Routes = [
  {
    path: '',
    component: signUpComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpRoutingModule {}
