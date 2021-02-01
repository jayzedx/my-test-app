import { NgModule } from '@angular/core';
import { DefaultComponent } from './default/default.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [RouterModule],
  exports: [],
  declarations: [DefaultComponent, HomeComponent],
  providers: [],
})
export class DefaultModule { }
