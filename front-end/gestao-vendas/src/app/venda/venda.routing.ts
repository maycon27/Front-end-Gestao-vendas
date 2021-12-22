import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VendaListaComponent } from "./venda-lista/venda-lista.component";
import { VendaComponent } from "./venda.component";


const routes: Routes = [
  { path: 'venda', component: VendaComponent},
  { path: 'venda/cliente/:codigo', component: VendaListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})


export class VendaRoutes{}
