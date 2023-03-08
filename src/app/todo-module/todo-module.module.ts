import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoComponentComponent } from './todo-component/todo-component.component';



@NgModule({
  declarations: [
    TodoComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[TodoComponentComponent]
})
export class ToDoModulesModule { }
