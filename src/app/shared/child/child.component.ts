import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'child-page',
  templateUrl: './child.component.html'
})
export class ChildComponent {
  title = 'Child page';

  constructor() {
    console.log('inside chid');
  }
}
