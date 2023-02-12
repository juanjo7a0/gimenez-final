import { Component } from '@angular/core';
import { MiServicioService } from './mi-servicio.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {

  constructor (
    private servicio: MiServicioService
  ) { }

  ngOnInit(): void {
console.log(this.servicio.obtenerAlumnos());
  }

}
