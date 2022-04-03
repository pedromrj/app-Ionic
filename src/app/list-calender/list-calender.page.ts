import { Component, OnInit } from "@angular/core";
import { CalenderService } from "../services/calender/calender.service";

@Component({
  selector: "app-list-calender",
  templateUrl: "./list-calender.page.html",
  styleUrls: ["./list-calender.page.scss"],
})
export class ListCalenderPage implements OnInit {
  eventos;

  constructor(private service: CalenderService) {
    this.get();
  }

  ngOnInit(): void {}

  delete(eventoId: any) {
    console.log(eventoId);
    this.service.deleteEvento(eventoId).subscribe((e) => this.get());
  }

  private get() {
    this.service.getEvento().subscribe((obj) => (this.eventos = obj));
  }
}
