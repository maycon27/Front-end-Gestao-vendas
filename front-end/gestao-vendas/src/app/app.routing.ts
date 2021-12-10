
import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProdutoComponent } from './produto/produto.component';


const APP_ROUTES: Routes = [
  {path: 'categoria', component: CategoriaComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: 'produto', component: ProdutoComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
