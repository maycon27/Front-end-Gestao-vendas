import { AuthGuard } from './login/AuthGuard.guard';

import { VendedorComponent } from './vendedor/vendedor.component';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProdutoComponent } from './produto/produto.component';
import { VendaComponent } from './venda/venda.component';
import { LoginComponent } from './login/login.component';


const APP_ROUTES: Routes = [
  {path: 'categoria', component: CategoriaComponent, canActivate: [AuthGuard]},
  {path: 'cliente', component: ClienteComponent, canActivate: [AuthGuard]},
  {path: 'produto', component: ProdutoComponent , canActivate: [AuthGuard]},
  {path: 'vendedor', component: VendedorComponent , canActivate: [AuthGuard]},
  {path: 'venda', component: VendaComponent , canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
