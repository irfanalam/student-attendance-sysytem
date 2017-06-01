import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ClassService } from '../../services/class.service';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})
export class ClassesComponent implements OnInit {

  error: boolean = false;
  classes: any = [];

  constructor(private _classService: ClassService) { }

  ngOnInit() {

    this.getAllClasses();
  }

  getAllClasses() {
    let result = this._classService.getAllClasses();
    result.subscribe(
      (data) => {
        this.classes = data.classes;
        //console.log('get All Classes called ', data);
      },
      (error) => {
        if (error.status === 400) {
          let body = JSON.parse(error._body);
          this.error = body.message;
        }
      }
    );
  }

  onHandleClassDel(_id){  
    var classes = this.classes;
    let result = this._classService.delClassById(_id);
      result.subscribe(
        (data) => {
            this.getAllClasses();
        },
        (error) => {
          if (error.status === 400) {
          let body = JSON.parse(error._body);
          this.error = body.message;
        }
      }
    );
    
  }

  onHandleAddClass = function () {
    this.router.navigate(['students/add-student']);
  }

}
