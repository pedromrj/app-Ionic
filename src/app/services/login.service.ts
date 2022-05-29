import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../modals/User';

import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject
} from "@angular/fire/compat/database";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private list: AngularFireList<User>;

  constructor(private db: AngularFireDatabase) { }


  findUser() {
    this.list = this.db.list<User>("/user");
    return this.list;
  }


}
