import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})
export class LogoutComponent implements OnInit {

  constructor(private _router: Router, private _authService: AuthService) {
    localStorage.removeItem('token');
    this._router.navigate(['']);
   }

  ngOnInit() {}

  onHandleLogout(){
    console.log('im being called #logout')
  }

}
