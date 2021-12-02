
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProdutoComponent } from './produto/produto.component';
import { CategoriaModule} from './categoria/categoria.module';

@NgModule({
  declarations: [
    AppComponent,
    //CategoriaComponent,
    ClienteComponent,
    ProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    CategoriaModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
