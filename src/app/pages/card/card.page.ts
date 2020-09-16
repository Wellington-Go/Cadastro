import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  public cards = [   {img : 'vilarejo.jpg',  sub: ' viagens',  tit:'cidade',
  cont:'No mês de julho de 2019 visitamos a ilha. Depos de 985 km de estrada.'  }
,  {img : 'vilarejo-suiça.jpg',  sub: 'Meu sonho',  tit:'Vilarejo-Suiça', 
 cont:'No ano de 2032 visitar suiça. Depois o mundo'  }  ]
  constructor() { }

  ngOnInit() {
  }

}
