import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class ParentsService {
  
  baseUrl: string;

  constructor(private _http: Http) {
    this.baseUrl = 'http://localhost:3000/api/';
  }

  getAllParents () {
    let url = this.baseUrl + 'parent/';
    return this._http
               .get(url)
               .map(res => res.json());
               
  }

  delParentById (id) {
    let url = this.baseUrl + 'parent/' + id;
    return this._http
               .delete(url)
               .map(res => res.json());
  }

  addParent (body) {
    let url = this.baseUrl + 'parent/';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http
               .post(url, JSON.stringify(body), {headers: headers })
               .map(res => res.json());

  }
}
