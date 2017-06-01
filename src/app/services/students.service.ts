import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class StudentsService {
  
  baseUrl: string;

  constructor(private _http: Http) {
    this.baseUrl = 'http://localhost:3000/api/';
  }

  getAllStudents () {
    let url = this.baseUrl + 'student/';
    return this._http
               .get(url)
               .map(res => res.json());
               
  }

  delStudentById(_id) {
    let url = this.baseUrl + 'student/' + _id;
    return this._http
               .delete(url)
               .map(res => res.json());
  }

  addStudent (body){
    let url = this.baseUrl + 'student/';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http
                .post(url, JSON.stringify(body), {headers: headers })
                .map(res => res.json());
  }
  
}
