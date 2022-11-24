import { IMenu } from './../../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  listaMenu!: Observable<IMenu[]>

  constructor(private service: ServicioService) { }

  ngOnInit() {
    this.listaMenu = this.service.getMenu()
  }

}
