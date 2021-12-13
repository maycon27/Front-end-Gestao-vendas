import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { VendedorComponent } from "./vendedor.component";
import { VendedorRoutes } from "./vendedor.routing";
import { VendedorService } from "./vendedor.service";
import { VendedorListaComponent } from './vendedor-lista/vendedor-lista.component';
import { VendedorFormularioComponent } from './vendedor-formulario/vendedor-formulario.component';


@NgModule({
  imports: [
    CommonModule,
    VendedorRoutes,
    ReactiveFormsModule
  ],
  exports: [],
  declarations: [
    VendedorComponent,
    VendedorListaComponent,
    VendedorFormularioComponent,
  ],

  providers: [VendedorService],
})

export class VendedorModule{}
