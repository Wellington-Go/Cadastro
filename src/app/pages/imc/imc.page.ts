import { CalculoDirective } from './../../calculo.directive';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class ImcPage implements OnInit {
// tslint:disable-next-line: no-inferrable-types
imc: number = 0;
condicao: string;
// tslint:disable-next-line: no-inferrable-types
altura: number =  0;
// tslint:disable-next-line: no-inferrable-types
peso: number = 0;
  constructor() { }

  ngOnInit() {
  }
calcular(){
this.imc = CalculoDirective.calcularImc(this.altura,this.peso);
}
}
