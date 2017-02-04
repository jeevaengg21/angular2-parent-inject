import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent }   from './home.component';
import { routing } from './home.lazy.routing';

@NgModule({
  imports: [routing,CommonModule],
  declarations: [HomeComponent]
})
export class LazyModule {}