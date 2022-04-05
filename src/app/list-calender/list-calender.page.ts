import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-list-calender',
  templateUrl: './list-calender.page.html',
  styleUrls: ['./list-calender.page.scss'],
})
export class ListCalenderPage implements OnInit { 

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      
    });
    await modal.present();

  }

}
