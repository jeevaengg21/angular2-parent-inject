import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, Router, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { MainService } from './app.service';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,

  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule {

}