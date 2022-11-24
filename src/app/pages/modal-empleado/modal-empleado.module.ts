import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEmpleadoPageRoutingModule } from './modal-empleado-routing.module';

import { ModalEmpleadoPage } from './modal-empleado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEmpleadoPageRoutingModule
  ],
  declarations: [ModalEmpleadoPage]
})
export class ModalEmpleadoPageModule {}
