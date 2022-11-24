import { IEmpleado } from './../../interfaces/interfaces';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalCargoPage } from '../modal-cargo/modal-cargo.page';
import { ModalEmpleadoPage } from '../modal-empleado/modal-empleado.page';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})

export class RegistrarPage implements OnInit {

  objEmpleado={}
  objCargo={}
  listaEmpleados!:IEmpleado[]

  constructor(private modalController:ModalController, private service:ServicioService) { }

  ngOnInit() {
    this.listaEmpleados = this.service.getEmployee()
    // console.log('Desde registrar, recibida desde service para mostrar', this.listaEmpleados)
  }

  async registerEmployee() {
    // console.log('Registrar empleado')
    const modal = await this.modalController.create({
      component: ModalEmpleadoPage,
      componentProps:{
        empleados:this.objCargo,
      },
      
      showBackdrop:true,
      backdropDismiss:false
    })
    
    await modal.present()
  }

  async registerPosition() {
    const modal = await this.modalController.create({
      component: ModalCargoPage,
      componentProps:{
        empleados:this.objCargo,
      },
      
      showBackdrop:true,
      backdropDismiss:false
    })
    
    await modal.present()
  }

}
