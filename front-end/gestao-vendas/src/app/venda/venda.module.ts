import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { VendaComponent } from "./venda.component";
import { VendaRoutes } from "./venda.routing";
import { VendaFormularioComponent } from './venda-formulario/venda-formulario.component';
import { VendaListaComponent } from './venda-lista/venda-lista.component';
import { VendaService } from "./venda.service";


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

  ],

  providers: [VendaService],
})

export class VendaModule{}
