import { ModalComponent } from './components/modal/modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCalenderPageRoutingModule } from './list-calender-routing.module';

import { ListCalenderPage } from './list-calender.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCalenderPageRoutingModule
  ],
  declarations: [ListCalenderPage,ModalComponent]
})
export class ListCalenderPageModule {}
