import { Observable } from 'rxjs';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { Component, OnInit } from '@angular/core';
import { IEmpleado } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})

export class ListarPage implements OnInit {

  listaEmpleados!: IEmpleado[]

  constructor(private service:ServicioService) { }

  ngOnInit() {
    this.listaEmpleados = this.service.getEmployee()
  }

}
