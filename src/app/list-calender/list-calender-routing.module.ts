import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCalenderPage } from './list-calender.page';

const routes: Routes = [
  {
    path: '',
    component: ListCalenderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCalenderPageRoutingModule {}
