import { IProduto } from './IProduto';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { take } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  private readonly API = `${environment.API}`;

  constructor(private httpCliente: HttpClient) { }

  getTodosProdutos(produto: IProduto){
    return this.httpCliente.get<IProduto[]>(`${this.API}/categoria/${produto.categoria.codigo}/produto`);
  }

  getProdutoId(codigo: number){
    return this.httpCliente.get<IProduto>(`${this.API}/${codigo}`);
  }

  adicionarProduto(produto: IProduto){
    return this.httpCliente.post<IProduto>(this.API,produto).pipe(take(1));
  }

  atualizarProduto(produto: IProduto){
    return this.httpCliente.put<IProduto>(`${this.API}/${produto.codigo}`,produto);
  }

  deletarProduto(codigo: number){
    return this.httpCliente.delete(`${this.API}/${codigo}`);
  }
}
