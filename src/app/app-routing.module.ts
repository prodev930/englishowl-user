import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then(m => m.splashPageModule)
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },

  //===================Main Start============//

  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then(m => m.splashPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signIn/signin.module').then(m => m.SignInPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signUp/signUp.module').then(m => m.signUpPageModule)
  },
  
  {
    path: 'chapter',
    loadChildren: () => import('./chapter/chapter.module').then(m => m.ChapterPageModule)
  },
  {
    path: 'level',
    loadChildren: () => import('./level/level.module').then( m => m.LevelPageModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./quiz/quiz.module').then( m => m.QuizPageModule)
  },
  {
    path: 'score',
    loadChildren: () => import('./score/score.module').then( m => m.ScorePageModule)
  },
  
  {
    path: 'level-rookie',
    loadChildren: () => import('./level-rookie/level-rookie.module').then( m => m.LevelRookiePageModule)
  },
  {
    path: 'level-warrior',
    loadChildren: () => import('./level-warrior/level-warrior.module').then( m => m.LevelWarriorPageModule)
  },
  {
    path: 'level-slayer',
    loadChildren: () => import('./level-slayer/level-slayer.module').then( m => m.LevelSlayerPageModule)
  },
  {
    path: 'level-expert',
    loadChildren: () => import('./level-expert/level-expert.module').then( m => m.LevelExpertPageModule)
  },

  //=================Main End================//

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
