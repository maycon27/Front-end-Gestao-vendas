import { VendedorModule } from './vendedor/vendedor.module';
import { ProdutoModule } from './produto/produto.module';
import { ClienteModule } from './cliente/cliente.module';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaModule} from './categoria/categoria.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { VendaModule } from './venda/venda.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    CategoriaModule,
    ClienteModule,
    ProdutoModule,
    TooltipModule.forRoot(),
    VendedorModule,
    VendaModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
