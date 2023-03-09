import { Component, OnInit } from '@angular/core';
import {Student} from './student';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-student-component',
  templateUrl: './student-component.component.html',
  styleUrls: ['./student-component.component.css']
})
export class StudentComponentComponent implements OnInit{
  student!: Student[];
constructor(private service:ServiceService){
}
getStudents(){
  this.student=this.service.getAllStudents();
}
  ngOnInit() {     
    this.getStudents()    
  }    
    

}
