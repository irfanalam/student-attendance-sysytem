import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ParentsService } from '../../services/parents.service';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})
export class ParentsComponent implements OnInit {

  error: boolean = false;
  parents: any = [];

  constructor(private _parentService: ParentsService) { }

  ngOnInit() {
    this.getAllParents();
  }

  getAllParents() {
    let result = this._parentService.getAllParents();
    result.subscribe(
      (data) => {
        this.parents = data.parents;
        // console.log('Get all parents api res', data);
      },
      (error) => {
        if (error.status === 400) {
          let body = JSON.parse(error._body);
          this.error = body.message;
        }
      }
    );
  }

  onHandleDelParent (_id) {
    var parents = this.parents;
    let result = this._parentService.delParentById(_id);
      result.subscribe(
        (data) => {
            this.getAllParents();
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
