import { Component } from '@angular/core';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent {


  public fecha = new Date();

  constructor(
    private servicio: MisDatosService
  ) { }

  ngOnInit(): void {
    this.servicio.getAlumnos().subscribe(valores => {
      console.log(valores);
    }    
    }),


    this.servicio.getFecha().subscribe(valor => {
      this.fecha = valor;
    })

  }
