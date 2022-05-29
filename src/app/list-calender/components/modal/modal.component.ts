import { ActivatedRoute } from '@angular/router';
import { CalenderService } from './../../../services/calender/calender.service';
import { ModalController, ToastController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { Evento } from 'src/app/modals/Evento';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() typeView: any;
  @Input() eventId: any;
  @Input() idUser: any;

  name: string;
  description: string;
  type: string;
  format: string;
  date: string;
  hour: string;

  constructor(
    private service: CalenderService,
    private modalCtr: ModalController,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    if (this.typeView === 'view' || this.typeView === 'edit') {
      this.getEventById();
    }
  }

  cancelModal() {
    this.modalCtr.dismiss();
  }

  createUpdateCalendar() {
    try {
      if (this.typeView == 'edit') {
        let dateFormat;
        let splitDate = this.date.split('-');
        dateFormat = splitDate[2] + '/' + splitDate[1];

        this.service.update(this.eventId, {
          name: this.name,
          description: this.description,
          type: this.type,
          format: this.format,
          date: dateFormat,
          year: splitDate[0],
          hours: this.hour,
          userID: this.idUser,
        });
      } else {
        let dateFormat;
        let splitDate = this.date.split('-');
        dateFormat = splitDate[2] + '/' + splitDate[1];
        this.service.creteEvent(
          new Evento(
            this.hour,
            dateFormat,
            this.name,
            this.description,
            this.type,
            this.format,
            splitDate[0],
            this.idUser
          )
        );

        this.modalCtr.dismiss();
      }
      this.modalCtr.dismiss();
    } catch (e) {
      console.log(e);
      this.presentToast('Algum campo obrigatorio está preenchido errado');
    }
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1000,
      color: 'danger',
    });
    toast.present();
  }

  disabledInput() {
    return this.typeView == 'view';
  }

  private getEventById() {
    let event = this.service.getEventById(this.eventId);
    event.snapshotChanges().subscribe((res) => {
      let eve = res.payload.toJSON() as Evento;
      let dateSplit = eve.date.split('/');
      let dateFormat = eve.year + '-' + dateSplit[1] + '-' + dateSplit[0];
      this.name = eve.name;
      this.description = eve.description;
      this.type = eve.type;
      this.format = eve.format;
      this.date = dateFormat;
      this.hour = eve.hours;
    });
  }
}
