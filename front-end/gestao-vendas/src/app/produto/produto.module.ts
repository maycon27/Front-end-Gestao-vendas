import { ProdutoRoutes } from './produto.routing';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ProdutoListaComponent } from "./produto-lista/produto-lista.component";
import { ProdutoComponent } from "./produto.component";
import { ProdutoService } from "./produto.service";
import { ProdutoFormularioComponent } from './produto-formulario/produto-formulario.component';

@NgModule({
  imports: [
    CommonModule,
    ProdutoRoutes,
    ReactiveFormsModule
  ],
  exports: [],
  declarations: [
    ProdutoComponent,
    ProdutoListaComponent,
    ProdutoFormularioComponent
  ],

  providers: [ProdutoService],
})

export class ProdutoModule{}
