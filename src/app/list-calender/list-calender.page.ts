import { Component, OnInit } from "@angular/core";
import { ModalController } from '@ionic/angular';
import { ModalComponent } from './components/modal/modal.component';
import { CalenderService } from "../services/calender/calender.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Evento } from "../modals/Evento";

@Component({
  selector: "app-list-calender",
  templateUrl: "./list-calender.page.html",
  styleUrls: ["./list-calender.page.scss"],
})
export class ListCalenderPage implements OnInit {
  eventos;
  
  constructor(private service:CalenderService , private modalCtrl: ModalController, private router: Router, private actrouter: ActivatedRoute) {
    this.get();
  }

  ngOnInit(): void {}

  goToRegistrionData() {
    this.router.navigate(["/registrion-data", this.actrouter.snapshot.paramMap.get("id")])
  }

  delete(eventoId: any) {
    this.service.deleteEvento(this.actrouter.snapshot.paramMap.get("id"));
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
    let eventoList = this.service.getEvento();
    eventoList.snapshotChanges().subscribe(res => {
      this.eventos = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a["$key"] = item.key;
        this.eventos.push(a as Evento);
      })
    })
  }
}
