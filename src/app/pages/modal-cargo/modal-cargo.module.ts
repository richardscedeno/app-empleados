import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCargoPageRoutingModule } from './modal-cargo-routing.module';

import { ModalCargoPage } from './modal-cargo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCargoPageRoutingModule
  ],
  declarations: [ModalCargoPage]
})
export class ModalCargoPageModule {}
