import { ProdutoFormularioComponent } from './produto-formulario/produto-formulario.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProdutoListaComponent } from "./produto-lista/produto-lista.component";


const routes: Routes = [
  { path: 'produto', component: ProdutoListaComponent},
  { path: 'produto/formulario', component: ProdutoFormularioComponent},
  { path: 'produto/editar/:codigo', component: ProdutoFormularioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})


export class ProdutoRoutes{}
