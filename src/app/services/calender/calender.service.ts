import { Injectable } from "@angular/core";

import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject
} from "@angular/fire/compat/database";
import { Evento } from "src/app/modals/Evento";

@Injectable({
  providedIn: "root",
})
export class CalenderService {

  private list: AngularFireList<Evento>;
  private obj: AngularFireObject<Evento>;

  constructor(private db: AngularFireDatabase) {}

  getEvento() {
    this.list = this.db.list<Evento>("/evento");
    return this.list;
  }

  getEventById(id) {
    this.obj = this.db.object<Evento>("/evento/" + id);
    return this.obj;
  }

  update(id ,event) {
    return this.obj.update(new Evento (
      event.hours,
      event.date,
      event.name,
      event.discription,
      event.type,
      event.format,
      event.year
    ))
  }

  creteEvent(event: Evento) {
    this.list = this.db.list<Evento>("/evento");
    return this.list.push(new Evento (
      event.hours,
      event.date,
      event.name,
      event.discription,
      event.type,
      event.format,
      event.year
    ))
  }

  deleteEvento(id) {
    this.obj = this.db.object("/evento/" + id);
    this.obj.remove();
  }
}
