import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VendedorFormularioComponent } from "./vendedor-formulario/vendedor-formulario.component";
import { VendedorListaComponent } from "./vendedor-lista/vendedor-lista.component";


const routes: Routes = [
  { path: 'vendedor', component: VendedorListaComponent},
  { path: 'vendedor/formulario', component: VendedorFormularioComponent},
  { path: 'vendedor/editar/:codigo', component: VendedorFormularioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class VendedorRoutes{}
