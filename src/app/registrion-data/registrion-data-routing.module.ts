import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrionDataPage } from './registrion-data.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrionDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrionDataPageRoutingModule {}
