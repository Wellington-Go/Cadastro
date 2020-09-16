import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.scss'],
})
export class GridPage implements OnInit {
// tslint:disable-next-line: whitespace
siglas: string[]= ['SP', 'MG', 'PR', 'RJ','AL'];
// tslint:disable-next-line: whitespace
// tslint:disable-next-line: quotemark
// tslint:disable-next-line: whitespace
// tslint:disable-next-line: quotemark
numeros: string[] = ['20', '10', '15', '30', '45', '40'];
  constructor() { }

  ngOnInit() {
  }
sg: string = "";
onClick(){
  this.siglas.push(this.sg);
  console.log(this.siglas);
}

}
