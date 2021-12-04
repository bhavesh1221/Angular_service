import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { ServiceofemployeeService } from './serviceofemployee.service';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    EmployeelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ServiceofemployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
