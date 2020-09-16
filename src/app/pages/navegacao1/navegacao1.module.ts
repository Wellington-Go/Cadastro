import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Navegacao1PageRoutingModule } from './navegacao1-routing.module';

import { Navegacao1Page } from './navegacao1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Navegacao1PageRoutingModule
  ],
  declarations: [Navegacao1Page]
})
export class Navegacao1PageModule {}
