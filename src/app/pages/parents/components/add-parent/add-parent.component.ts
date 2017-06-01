import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { ParentsService } from '../../../../services/parents.service';

@Component({
  selector: 'app-add-parent',
  templateUrl: './add-parent.component.html',
  styleUrls: ['./add-parent.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})
export class AddParentComponent implements OnInit {
  myForm:  FormGroup;
  success: boolean = false;
  error:   boolean = false;
  data:    any;

  constructor(private _router: Router, private _parentService: ParentsService) {
    this.myForm = new FormGroup({
      'fname': new FormControl('', Validators.required),
      'lname': new FormControl('', Validators.required),
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
      'location_id': new FormControl('', Validators.required),
      'contact_no': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
    });
   }

  ngOnInit() {
  }

  onSubmit () {
    let formBody = {
      fname: this.myForm.value.fname,
      lname: this.myForm.value.lname,
      username: this.myForm.value.username,
      password: this.myForm.value.password,
      location_id: this.myForm.value.location_id,
      contact_no: this.myForm.value.contact_no,
      email: this.myForm.value.email,
    };
    console.log('Form Is being submitted', formBody);

    let result = this._parentService.addParent(formBody);
    result.subscribe(
      (data) => {
        this.success = true;
        this.data    = data;
        this._router.navigate(['dashboard/parents']);
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
