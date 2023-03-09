import { Injectable } from '@angular/core';
import {STUDENT} from './student-component/student-component-data';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  getAllStudents(){
    return STUDENT;
  }
}
