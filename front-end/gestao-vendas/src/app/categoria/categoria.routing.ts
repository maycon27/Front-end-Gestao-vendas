
import { CategoriaFormularioComponent } from './categoria-formulario/categoria-formulario.component';
import { CategoriaListaComponent } from './categoria-lista/categoria-lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'categoria', component: CategoriaListaComponent},
  { path: 'categoria/formulario', component: CategoriaFormularioComponent},
  { path: 'categoria/editar/:codigo', component: CategoriaFormularioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})


export class CategoriaRoutes{}
