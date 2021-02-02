import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Question1Component } from './components/question1/question1.component';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  {
    path: 'question1',
    component: DefaultComponent,
    children: [{
      path: '',
      component: Question1Component
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
