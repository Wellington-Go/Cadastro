import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InteracaoPage } from './interacao.page';

const routes: Routes = [
  {
    path: '',
    component: InteracaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InteracaoPageRoutingModule {}
