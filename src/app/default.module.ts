import { NgModule } from '@angular/core';
import { DefaultComponent } from './default/default.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Question1Component } from './components/question1/question1.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import { BrowserModule } from '@angular/platform-browser';
import { Question2Component } from './components/question2/question2.component';
import { CategoryService } from './service/category.service';

@NgModule({
  imports: [RouterModule, FormsModule, BrowserModule],
  exports: [],
  declarations: [DefaultComponent, Question1Component, FirstComponent, SecondComponent, ThirdComponent, Question2Component],
  providers: [CategoryService],
})
export class DefaultModule { }
