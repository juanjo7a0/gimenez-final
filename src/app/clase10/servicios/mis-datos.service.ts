import { Injectable } from '@angular/core';
import { interval, map, Observable, of } from 'rxjs';
import { Alumno } from 'src/app/clase5/alumno';

@Injectable({
  providedIn: 'root'
})
export class MisDatosService {

  constructor() { }

  public getAlumnos(): Observable<Alumno[]> {
    return of([
      {nombre:'Juan', calificacion:'50'}
    ]);
  }
  public getFecha(): Observable<number> {
    return interval(1000).pipe(take(5), map(_ => new Date()));
  }

}
