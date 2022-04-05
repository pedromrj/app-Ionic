import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class RegistrionDataService {
  private readonly url = "http://localhost:3000/profile";

  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get(this.url);
  }
}
