import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserInfo } from "../../modals/UserInfo";
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject
} from "@angular/fire/compat/database";

@Injectable({
  providedIn: "root",
})
export class RegistrionDataService {
  private readonly url = "http://localhost:3000/profile";

  private object: AngularFireObject<UserInfo>;

  constructor(private db: AngularFireDatabase) {}

  getUser(id) {
    this.object = this.db.object<UserInfo>("/registrion-data/"+ id);
    return this.object;
  }
}
