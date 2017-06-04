import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class TeachersService {
  
  baseUrl: string;

  constructor(private _http: Http) {
    this.baseUrl = 'http://localhost:3000/api/';
  }

  getAllTeachers () {
    let url = this.baseUrl + 'teacher/';
    return this._http
               .get(url)
               .map(res => res.json());
               
  }

  delTeacherById(_id) {
    let url = this.baseUrl + 'teacher/' +_id;
    return this._http
               .delete(url)
               .map(res => res.json());
  }

  getTeacherById(_id) {
    let url = this.baseUrl + 'teacher/' +_id;
    return this._http
               .get(url)
               .map(res => res.json());
  }
  
}
