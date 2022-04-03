import { Component, OnInit } from "@angular/core";
import { RegistrionDataService } from "../services/registrion-data.service";

@Component({
  selector: "app-registrion-data",
  templateUrl: "./registrion-data.page.html",
  styleUrls: ["./registrion-data.page.scss"],
})
export class RegistrionDataPage implements OnInit {
  constructor(private service: RegistrionDataService) {}

  user: any;

  ngOnInit(): void {
    this.service.listar().subscribe((obj) => (this.user = obj));
  }
}
