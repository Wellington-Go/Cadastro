import { Directive } from '@angular/core';

@Directive({
  selector: '[appCalculo]'
})
export class CalculoDirective {
  static calcularImc(altura: number, peso: number): number {
    throw new Error('Method not implemented.');
  }

  constructor() { }

}
