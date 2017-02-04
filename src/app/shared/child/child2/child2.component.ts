import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'child-page',
  templateUrl: './child2.component.html'
})
export class Child2Component {
  title = 'Child No.2 page';

  constructor() {
    console.log('inside chid');
  }
}
