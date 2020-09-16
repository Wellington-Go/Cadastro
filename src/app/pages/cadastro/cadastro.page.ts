import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  public cadastro = [
    { modelo: 'Troca do olho', val: true },
    { modelo: 'Revisão', val: false },
    { modelo: 'Manutenção', val: false }
  ];
  constructor() { }

  ngOnInit() {
  }
  Exibir(){
    this.cadastro = this.cadastro.filter(a => true == a.val);
    console.log(this.cadastro);
  }
  
}
