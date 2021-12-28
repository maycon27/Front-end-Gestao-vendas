import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { VendaComponent } from "./venda.component";
import { VendaRoutes } from "./venda.routing";
import { VendaFormularioComponent } from './venda-formulario/venda-formulario.component';
import { VendaListaComponent } from './venda-lista/venda-lista.component';
import { VendaService } from "./venda.service";
import { VendaDetalheComponent } from "./venda-detalhe/venda-detalhe.component";
import { VendaProdutoItemComponent } from './venda-produto-item/venda-produto-item.component';
import { VendaProdutoListaComponent } from './venda-produto-lista/venda-produto-lista.component';


@NgModule({
  imports: [
    CommonModule,
    VendaRoutes,
    ReactiveFormsModule
  ],
  exports: [],
  declarations: [
    VendaComponent,
    VendaFormularioComponent,
    VendaListaComponent,
    VendaDetalheComponent,
    VendaProdutoItemComponent,
    VendaProdutoListaComponent

  ],

  providers: [VendaService],
})

export class VendaModule{}
