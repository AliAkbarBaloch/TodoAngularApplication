import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponentComponent } from './student-component/student-component.component';



@NgModule({
  declarations: [
    StudentComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[StudentComponentComponent]
})
export class StudentDataModuleModule { }
