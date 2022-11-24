import { IEmpleado } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMenu } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private listEmployee:IEmpleado[] = []

  constructor(private httpClient: HttpClient, private toastController:ToastController) { }

  getMenu() {
    const url = "../../assets/data/Menu.json"
    return this.httpClient.get<IMenu[]>(url)
  }

  addEmployee(employee: any){
    // console.log('Data recibida service',employee)
    this.listEmployee.push(employee);
    // console.log('Seteado en service', this.listEmployee)
  }

  getEmployee() {
    return this.listEmployee
  }

  addCargo(cedula:string, cargo:string) {
    let flags = -1

    if(this.listEmployee.length === 0) {
      return flags = 0
    }

    this.listEmployee.filter(empleado => {
     if(empleado.cedula === cedula) {
        let id = new Date().getTime()

        let obj = {id:id, nombre:cargo}

        if(empleado.cargos === undefined) {
          empleado.cargos = []
        }

        empleado.cargos.push(obj)
        flags = 1
      }
      return
    })

    return flags
  }


  async message(msg: string, miColor:string) {
    const toast = await this.toastController.create({
      message:msg,
      color:miColor,
      duration:2300
    })

    toast.present()
  }

}
