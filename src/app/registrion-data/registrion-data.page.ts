import { Component, OnInit } from "@angular/core";
import { RegistrionDataService } from "../services/registrion/registrion-data.service";

@Component({
  selector: "app-registrion-data",
  templateUrl: "./registrion-data.page.html",
  styleUrls: ["./registrion-data.page.scss"],
})
export class RegistrionDataPage implements OnInit {
  constructor(private service: RegistrionDataService) {
    this.service.getUser().subscribe((obj) => (this.user = obj[0]));
  }

  user: any = [];

  ngOnInit(): void {}
}
