import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../modals/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  host = "http://localhost:3000";
  endpoint = "/user";
  constructor(public http: HttpClient) { }


  findUser(username):Observable<Array<User>> {
    let httpOptions = {
      headers : new HttpHeaders({"Content-Type" : "application/json"})
    }
    return this.http.get<Array<User>>(`${this.host}${this.endpoint}?username=${username}`, httpOptions);
  }


}
