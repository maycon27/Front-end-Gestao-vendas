import { CategoriaFormularioComponent } from './categoria-formulario/categoria-formulario.component';
import { CategoriaListaComponent } from './categoria-lista/categoria-lista.component';
import { CategoriaComponent } from './categoria.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'categoria', component: CategoriaComponent, children:[
  { path: 'lista', component: CategoriaListaComponent},
  { path: 'formulario', component: CategoriaFormularioComponent},
 // { path: 'lista', component: CategoriaListaComponent}
  ] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})


export class CategoriaRoutes{}
