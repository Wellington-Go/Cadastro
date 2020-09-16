import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Navegacao1Page } from './navegacao1.page';

const routes: Routes = [
  {
    path: '',
    component: Navegacao1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Navegacao1PageRoutingModule {}
