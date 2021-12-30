
import { VendedorComponent } from './vendedor/vendedor.component';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProdutoComponent } from './produto/produto.component';
import { VendaComponent } from './venda/venda.component';
import { LoginComponent } from './login/login.component';


const APP_ROUTES: Routes = [
  {path: 'categoria', component: CategoriaComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: 'produto', component: ProdutoComponent},
  {path: 'vendedor', component: VendedorComponent},
  {path: 'venda', component: VendaComponent},
  {path: 'login', component: LoginComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
