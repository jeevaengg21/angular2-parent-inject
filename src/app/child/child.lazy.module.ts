import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child.component';
import { ChildRoutingModule } from './child.lazy.routing';
import { AppComponent } from '../app.component';
import { Routes, RouterModule } from '@angular/router';


@NgModule({
  imports: [CommonModule, ChildRoutingModule],
  declarations: [ChildComponent]
})
export class LazyModule { }