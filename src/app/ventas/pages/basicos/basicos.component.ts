import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'esteban';
  nombreUpper: string = 'ESTEBAN';
  nombreCompleto: string = 'eSteBaN CaLixTo';

  fecha: Date = new Date(); // Fecha actual.

}
