import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDataModuleModule } from './student-data-module/student-data-module.module';
import {ToDoModulesModule} from './todo-module/todo-module.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToDoModulesModule,
    StudentDataModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
