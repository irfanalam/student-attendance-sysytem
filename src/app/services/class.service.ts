import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class ClassService {
  
  baseUrl: string;

  constructor(private _http: Http) {
    this.baseUrl = 'http://localhost:3000/api/';
  }

  getAllClasses () {
    let url = this.baseUrl + 'class/';
    return this._http
               .get(url)
               .map(res => res.json());
               
  }

  delClassById (id) {
    let url = this.baseUrl + 'class/' + id;
    return this._http
               .delete(url)
               .map(res => res.json());
  }

  addClass (body) {
    let url = this.baseUrl + 'class/';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http
               .post(url, JSON.stringify(body), {headers: headers })
               .map(res => res.json());

  }

}
