import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  error: boolean = false;
  students: any = [];

  constructor(private _studentsService: StudentsService, private router:Router) { 
    
  }

  ngOnInit() {
    this.getAllStudents();
  }

  getAllStudents() {
    let result = this._studentsService.getAllStudents();
    result.subscribe(
      (data) => {
        this.students = data.students;
        //console.log('Get all students api res', data);
      },
      (error) => {
        if (error.status === 400) {
          let body = JSON.parse(error._body);
          this.error = body.message;
        }
      }
    );
  }

  onHandleDelStudent(_id) {
    var students = this.students;
    let result = this._studentsService.delStudentById(_id);
      result.subscribe(
        (data) => {
            this.getAllStudents();
        },
        (error) => {
          if (error.status === 400) {
          let body = JSON.parse(error._body);
          this.error = body.message;
        }
      }
    );
  }

  onHandleAddStudent = function () {
    this.router.navigate(['/students/add-student']);
    console.log('add class called');
  }

}
