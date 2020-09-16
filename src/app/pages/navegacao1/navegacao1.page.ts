import { Component, OnInit } from '@angular/core';
import  {NavController} from '@ionic/angular';
@Component({
  selector: 'app-navegacao1',
  templateUrl: './navegacao1.page.html',
  styleUrls: ['./navegacao1.page.scss'],
})
export class Navegacao1Page implements OnInit {

  constructor(private navControl:NavController) { }

  ngOnInit() {
  }
  showNav2(){
    this.navControl.navigateForward('navegacao2');
  }
}
