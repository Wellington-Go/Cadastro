
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-interacao',
  templateUrl: './interacao.page.html',
  styleUrls: ['./interacao.page.scss'],
})
export class InteracaoPage implements OnInit {
Auto: any[]=[]
  constructor() { }
  cliente = {nome:'wellington', sobrenome:'Gomes'};
  ngOnInit() {
  }
add(){
this.Auto.push(this.cliente);
}
}
