import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CalenderService {
  private readonly url = "http://localhost:3000/evento";

  constructor(private http: HttpClient) {}

  getEvento() {
    return this.http.get(this.url);
  }

  getEventById(id) {
    return this.http.get(`${this.url}/${id}`);

  }

  update(id ,event) {
    return this.http.put(`${this.url}/${id}`,event)

  }

  creteEvent(event) {
    return this.http.post(this.url,event)

  }

  deleteEvento(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
