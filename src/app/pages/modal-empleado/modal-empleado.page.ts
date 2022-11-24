import { ServicioService } from 'src/app/servicios/servicio.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-empleado',
  templateUrl: './modal-empleado.page.html',
  styleUrls: ['./modal-empleado.page.scss'],
})
export class ModalEmpleadoPage implements OnInit {

  newEmployee: any = []

  constructor(private modalController:ModalController, private service:ServicioService) { }

  ngOnInit() {
  }

  register() {
    // console.log('Registrar desde modal empleado')
    this.service.addEmployee(this.newEmployee)
    // console.log('Data enviada',this.newEmployee)
    this.close()
  }

  close() {
    this.modalController.dismiss()
  }
}
