import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCargoPage } from './modal-cargo.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCargoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCargoPageRoutingModule {}
