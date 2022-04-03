import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrionDataPageRoutingModule } from './registrion-data-routing.module';

import { RegistrionDataPage } from './registrion-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrionDataPageRoutingModule
  ],
  declarations: [RegistrionDataPage]
})
export class RegistrionDataPageModule {}
