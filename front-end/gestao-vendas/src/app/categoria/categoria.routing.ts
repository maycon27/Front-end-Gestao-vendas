import { CategoriaResolverGuard } from './guards/categoria-resolver.guard';
import { CategoriaFormularioComponent } from './categoria-formulario/categoria-formulario.component';
import { CategoriaListaComponent } from './categoria-lista/categoria-lista.component';
import { CategoriaComponent } from './categoria.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve } from '@angular/router';

const routes: Routes = [
  { path: 'categoria', component: CategoriaListaComponent},
  { path: 'categoria/formulario', component: CategoriaFormularioComponent,
  resolve:{
    categoria: CategoriaResolverGuard
  }},
  { path: 'categoria/editar/:codigo', component: CategoriaFormularioComponent,
  resolve:{
    categoria: CategoriaResolverGuard
  }}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})


export class CategoriaRoutes{}
