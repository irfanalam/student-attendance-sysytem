import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { StudentsService } from '../../../../services/students.service';
 
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})
export class AddStudentComponent implements OnInit {

  myForm:  FormGroup;
  success: boolean = false;
  error:   boolean = false;
  data:    any;

  constructor(private _router: Router, private _studentsService: StudentsService) { 
    this.myForm = new FormGroup({
      'fname': new FormControl('', Validators.required),
      'lname': new FormControl('', Validators.required),
      'cnic': new FormControl('', Validators.required),
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
      'teacher_id': new FormControl('', Validators.required),
      'parent_id': new FormControl('', Validators.required),
      'location_id': new FormControl('', Validators.required),
      'status': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'dob': new FormControl('', Validators.required),
      'profile_picture': new FormControl('', Validators.required),

    });
  }

  ngOnInit() {
  }

   onSubmit () {
    let formBody = {
      'fname': this.myForm.value.fname,
      'lname': this.myForm.value.lname,
      'cnic':this.myForm.value.cnic,
      'username':this.myForm.value.username,
      'password': this.myForm.value.password,
      'teacher_id':this.myForm.value.teacher_id,
      'parent_id': this.myForm.value.parent_id,
      'location_id': this.myForm.value.location_id,
      'status': this.myForm.value.status,
      'email': this.myForm.value.email,
      'dob': this.myForm.value.dob,
      // 'profile_picture': this.myForm.profile_picture,
    };
    console.log('Form Is being submitted', formBody);

    let result = this._studentsService.addStudent(formBody);
    result.subscribe(
      (data) => {
        this.success = true;
        this.data    = data;
        this._router.navigate(['dashboard/students']);
      },
      (error) => {
        if (error.status === 400) {
          let body = JSON.parse(error._body);
          this.error = body.message;
          this.success = false;
        }
      }
    );
  }

}
