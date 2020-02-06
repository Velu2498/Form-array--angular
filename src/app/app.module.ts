import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Com1Component } from './com1/com1.component';

import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    Com1Component,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
