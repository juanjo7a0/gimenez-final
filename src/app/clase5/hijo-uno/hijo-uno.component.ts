import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno';

@Component({
  selector: 'app-hijo-uno',
  templateUrl: './hijo-uno.component.html',
  styleUrls: ['./hijo-uno.component.css']
})
export class HijoUnoComponent implements OnInit {

  @Input() alumno: Alumno;

  contructor() { }

  ngOnInit (): void {
  }

}
