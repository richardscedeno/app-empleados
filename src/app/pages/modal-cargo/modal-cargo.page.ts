import { ServicioService } from 'src/app/servicios/servicio.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-cargo',
  templateUrl: './modal-cargo.page.html',
  styleUrls: ['./modal-cargo.page.scss'],
})

export class ModalCargoPage implements OnInit {

  cedula: string = ''
  cargo: string = ''

  constructor(private modalController:ModalController, private service:ServicioService) { }

  ngOnInit() {
  }

  register(){
    const response = this.service.addCargo(this.cedula, this.cargo)

    if(response === 0) {
      this.service.message('No existen empleados. Registre primero los empleados','danger')
    }

    if(response === -1) {
      this.service.message('No existe empleado con ese CI.','warning')
    }

    if(response === 1) {
      this.service.message('Cargo añadido satisfactoriamente.','success')
    }

    this.close()
  }

  close() {
    this.modalController.dismiss()
  }
}
