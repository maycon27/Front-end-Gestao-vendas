import { IProduto } from './IProduto';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { take } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  private readonly API = `${environment.API}/produtos`;

  constructor(private httpCliente: HttpClient) { }

  getTodosProdutos(){
    return this.httpCliente.get<IProduto[]>(this.API);
  }

  getProdutoId(codigoProduto: number){
    return this.httpCliente.get<IProduto>(`${this.API}/${codigoProduto}`);
  }

  adicionarProduto( produto: IProduto){
    return this.httpCliente.post<IProduto>(this.API,produto).pipe(take(1));
  }

  atualizarProduto( produto: IProduto){
    return this.httpCliente.put<IProduto>(`${this.API}/${produto.codigo}`,produto);
  }

  deletarProduto(codigoProduto: number){
    return this.httpCliente.delete(`${this.API}/${codigoProduto}`);
  }
}
