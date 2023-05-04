import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../app/login/login.component').then(c => c.LoginComponent)
  },
  {
    path: 'home',
    loadComponent: () => import('../app/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('../app/create-question/create-question.component').then(c => c.CreateQuestionComponent)
  },
  {
    path: 'vote',
    loadComponent: () => import('../app/vote-question/vote-question.component').then(c => c.VoteQuestionComponent)
  },
  {
    path: 'results',
    loadComponent: () => import('../app/results/results.component').then(c => c.ResultsComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
