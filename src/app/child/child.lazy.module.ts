import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child.component';
import { ChildRoutingModule } from './child.lazy.routing';
import { AppComponent } from '../app.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../app.shared.module';

@NgModule({
  imports: [CommonModule, SharedModule, ChildRoutingModule],
  declarations: [ChildComponent]
})
export class LazyModule { }