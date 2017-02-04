import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child.component';
import { routing } from './child.lazy.routing';

@NgModule({
  imports: [routing, CommonModule],
  declarations: [ChildComponent],
  
})
export class LazyModule { }