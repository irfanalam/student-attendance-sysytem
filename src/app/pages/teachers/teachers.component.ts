import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TeachersService } from '../../services/teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})
export class TeachersComponent implements OnInit {
  error: boolean = false;
  teachers: any = [];

  constructor(private _teacherService: TeachersService) { }

  ngOnInit() {
    this.getAllTeachers();
  }

  getAllTeachers() {
     let result = this._teacherService.getAllTeachers();
    result.subscribe(
      (data) => {
        this.teachers = data.teachers;
        //console.log('Get all teachers api res', data);
      },
      (error) => {
        if (error.status === 400) {
          let body = JSON.parse(error._body);
          this.error = body.message;
        }
      }
    );
  }

  onHandleDelTeacher(_id) {
    var teachers = this.teachers;
    let result = this._teacherService.delTeacherById(_id);
      result.subscribe(
        (data) => {
            this.getAllTeachers();
        },
        (error) => {
          if (error.status === 400) {
          let body = JSON.parse(error._body);
          this.error = body.message;
        }
      }
    );
  }

}
