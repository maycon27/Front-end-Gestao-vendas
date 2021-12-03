import { CategoriaService } from './categoria.service';
import { CategoriaListaComponent } from './categoria-lista/categoria-lista.component';
import { CategoriaComponent } from './categoria.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoriaRoutes } from './categoria.routing';
import { CategoriaFormularioComponent } from './categoria-formulario/categoria-formulario.component';
import { CategoriaDetalheComponent } from './categoria-detalhe/categoria-detalhe.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    CategoriaRoutes,
    ReactiveFormsModule
  ],
  exports: [],
  declarations: [
    CategoriaComponent,
    CategoriaListaComponent,
    CategoriaFormularioComponent,
    CategoriaDetalheComponent],

  providers: [CategoriaService],
})

export class CategoriaModule{}
