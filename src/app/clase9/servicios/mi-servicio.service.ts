import { Injectable } from '@angular/core';
import { Alumno } from 'src/app/clase5/alumno';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  constructor() { }

  public obtenerAlumnos(): Alumno [] {
    return [
      {
        nombre: 'Juan',
        calificacion: 10
      }

    ];
  }
}
