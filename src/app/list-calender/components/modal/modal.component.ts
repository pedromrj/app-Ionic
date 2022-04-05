import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  @Input() modal: any;

  constructor(private modalCtr: ModalController) { }

  ngOnInit() {}

  cancelModal() {
    this.modalCtr.dismiss();
  }
  
  createCalendar() {
    this.modalCtr.dismiss();
  }

}
