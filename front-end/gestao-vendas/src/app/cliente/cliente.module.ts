import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ClienteDetalheComponent } from "./cliente-detalhe/cliente-detalhe.component";
import { ClienteFormularioComponent } from "./cliente-formulario/cliente-formulario.component";
import { ClienteListaComponent } from "./cliente-lista/cliente-lista.component";
import { ClienteComponent } from "./cliente.component";
import { ClienteRoutes } from "./cliente.routing";
import { ClienteService } from "./cliente.service";

@NgModule({
  imports: [
    CommonModule,
    ClienteRoutes,
    ReactiveFormsModule
  ],
  exports: [],
  declarations: [
    ClienteComponent,
    ClienteListaComponent,
    ClienteFormularioComponent,
    ClienteDetalheComponent],

  providers: [ClienteService],
})

export class ClienteModule{}
