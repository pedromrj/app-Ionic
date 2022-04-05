import { Component, OnInit } from "@angular/core";
import { ModalController } from '@ionic/angular';
import { ModalComponent } from './components/modal/modal.component';
import { CalenderService } from "../services/calender/calender.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-list-calender",
  templateUrl: "./list-calender.page.html",
  styleUrls: ["./list-calender.page.scss"],
})
export class ListCalenderPage implements OnInit {
  eventos;

  constructor(private service:CalenderService , private modalCtrl: ModalController, private router: Router) {
    this.get();
  }

  ngOnInit(): void {}

  goToRegistrionData() {
    this.router.navigate(["/registrion-data"])
  }

  delete(eventoId: any) {
    this.service.deleteEvento(eventoId).subscribe((e) => this.get());
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      
    });
    await modal.present();
    await modal.onDidDismiss().then(() => {
      this.eventos = this.get();
  });
  }

  async edit(eventId) {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: {
        typeView:'edit',
        eventId: eventId
      }
    });
    await modal.present();
    await modal.onDidDismiss().then(() => {
      this.eventos = this.get();
  });
  }

  async view(eventId) {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: {
        typeView:'view',
        eventId: eventId
      }});
    await modal.present();
  }
  private get() {
    this.service.getEvento().subscribe((obj) => (this.eventos = obj));
  }
}
