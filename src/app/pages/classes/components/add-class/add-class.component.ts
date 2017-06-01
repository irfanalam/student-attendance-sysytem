import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { ClassService } from '../../../../services/class.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})
export class AddClassComponent implements OnInit {
  myForm:  FormGroup;
  success: boolean = false;
  error:   boolean = false;
  data:    any;

  constructor(private _router: Router, private _classService: ClassService) {
    this.myForm = new FormGroup({
      'class_assign': new FormControl('', Validators.required),
      'class_no': new FormControl('', Validators.required),
    });
   }

  ngOnInit() {
  }

  onSubmit () {
    let formBody = {
      class_assign: this.myForm.value.class_assign,
      class_no: this.myForm.value.class_no,
    };
    console.log('Form Is being submitted', formBody);

    let result = this._classService.addClass(formBody);
    result.subscribe(
      (data) => {
        this.success = true;
        this.data    = data;
        this._router.navigate(['dashboard/classes']);
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
