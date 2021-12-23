import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VendaDetalheComponent } from "./venda-detalhe/venda-detalhe.component";
import { VendaListaComponent } from "./venda-lista/venda-lista.component";
import { VendaFormularioComponent } from './venda-formulario/venda-formulario.component';


const routes: Routes = [
  { path: 'venda', component: VendaListaComponent},
  { path: 'venda/formulario', component: VendaFormularioComponent},
  { path: 'venda/detalhe/:codigo', component: VendaDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class VendaRoutes{}
