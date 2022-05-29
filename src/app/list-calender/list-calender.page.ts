import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from './components/modal/modal.component';
import { CalenderService } from '../services/calender/calender.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from '../modals/Evento';

@Component({
  selector: 'app-list-calender',
  templateUrl: './list-calender.page.html',
  styleUrls: ['./list-calender.page.scss'],
})
export class ListCalenderPage implements OnInit {
  eventos;

  constructor(
    private service: CalenderService,
    private modalCtrl: ModalController,
    private router: Router,
    private actrouter: ActivatedRoute,
    public activerouter: ActivatedRoute
  ) {
    this.get();
  }

  ngOnInit(): void {}

  goToRegistrionData() {
    this.router.navigate([
      '/registrion-data',
      this.actrouter.snapshot.paramMap.get('id'),
    ]);
  }

  delete(eventoId: any) {
    this.service.deleteEvento(eventoId);
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: {
        idUser: this.activerouter.snapshot.paramMap.get('id'),
      },
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
        typeView: 'edit',
        eventId: eventId,
        idUser: this.activerouter.snapshot.paramMap.get('id'),
      },
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
        typeView: 'view',
        eventId: eventId,
        idUser: this.activerouter.snapshot.paramMap.get('id'),
      },
    });
    await modal.present();
  }
  private get() {
    let eventoList = this.service.getEvento();
    eventoList.snapshotChanges().subscribe((res) => {
      this.eventos = [];
      res.forEach((item) => {
        let payload = item.payload.toJSON();
        if (payload['userID'] === this.activerouter.snapshot.paramMap.get('id')) {
          payload['$key'] = item.key;
          this.eventos.push(payload as Evento);
        }
      });
    });
  }
}
