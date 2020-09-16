import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const newLocal = './pages/imc/imc.module';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'button',
    loadChildren: () => import('./pages/button/button.module').then( m => m.ButtonPageModule)
  },
  {
    path: 'navegacao1',
    loadChildren: () => import('./pages/navegacao1/navegacao1.module').then( m => m.Navegacao1PageModule)
  },
  {
    path: 'navegacao2',
    loadChildren: () => import('./pages/navegacao2/navegacao2.module').then( m => m.Navegacao2PageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./pages/grid/grid.module').then( m => m.GridPageModule)
  },
  {
    path: 'imc',
    loadChildren: () => import('./pages/imc/imc.module').then( m => m.ImcPageModule)
  },
  {
    path: 'cep',
    loadChildren: () => import('./pages/cep/cep.module').then( m => m.CepPageModule)
  },
  {
    path: 'diretive',
    loadChildren: () => import('./calculo.directive').then( m => m.CalculoDirective)
  },
  {
    path: 'interacao',
    loadChildren: () => import('./pages/interacao/interacao.module').then( m => m.InteracaoPageModule)
  }
 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
