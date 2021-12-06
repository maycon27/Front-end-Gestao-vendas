import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteFormularioComponent } from './cliente-formulario/cliente-formulario.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
const routes: Routes = [
  { path: 'cliente', component: ClienteListaComponent},
  { path: 'cliente/formulario', component: ClienteFormularioComponent},
  { path: 'cliente/editar/:codigo', component: ClienteFormularioComponent},
  { path: 'cleinte/detalhe/:codigo', component: ClienteDetalheComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})


export class ClienteRoutes{}
