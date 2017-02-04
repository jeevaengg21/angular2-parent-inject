import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child2Component } from './child2.component';
import { routing } from './child2.lazy.routing';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [routing, CommonModule],
  declarations: [Child2Component],
  exports:[RouterModule]
})
export class Child2Module {}