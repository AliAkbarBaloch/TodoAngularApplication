import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDataModuleModule } from './student-data-module/student-data-module.module';
import {ToDoModulesModule} from './todo-module/todo-module.module';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent
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
