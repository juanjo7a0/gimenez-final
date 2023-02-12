import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno';

@Component({
  selector: 'app-abuelo',
  templateUrl: './abuelo.component.html',
  styleUrls: ['./abuelo.component.css']
})
export class AbueloComponent implements OnInit{
  
  public alumnos: Alumno[] = [
    {nombre: 'Juan', calificacion: 100},
    {nombre: 'Jose', calificacion: 100},
    {nombre: 'Pedro', calificacion: 100},
    {nombre: 'Gimena', calificacion: 100},
    {nombre: 'Paula', calificacion: 100},
    {nombre: 'Eugenia', calificacion: 100}
  ]

  constructor() {}

  ngOnInit(): void {
    
  }

}

