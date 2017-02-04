import { NgModule, Inject, forwardRef, Host } from '@angular/core';
import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { IChild } from './ichild';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'child-page',
  templateUrl: './child.component.html',
})
export class ChildComponent implements IChild {
  title = 'Child page';
  respose = '';
  ic: IChild;
  /*
  appComponent: AppComponent;

  constructor( @Inject(forwardRef(() => AppComponent)) appComponent) {
    console.log('inside child');
    this.appComponent = appComponent;
    //this.appComponent.opendialog(this);
  }
*/

  constructor(private appComponent: AppComponent) {
    console.log('inside child');
    //this.appComponent = appComponent;
    this.appComponent.opendialog(this);
  }

  public callparent() {
    console.log('child to parent');
    this.appComponent.opendialog(this);
  }

  getTest(): String {
    console.log('inside getTest');
    return "working";
  }

  setTest(test: String): void {

    console.log("status >> " + test)
  }
}
