import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IVendas } from './IVendas';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  private readonly API = `${environment.API}/venda`;

  constructor(private httpCliente: HttpClient) { }

  getTodasVenda(){
    return this.httpCliente.get<IVendas[]>(this.API);
  }

  getVendaId(codigoVenda: number){
    return this.httpCliente.get<IVendas>(`${this.API}/${codigoVenda}`);
  }

  adicionarVenda(venda: IVendas){
    return this.httpCliente.post<IVendas>(this.API,venda).pipe(take(1));
  }

  deletarVenda(codigo: number){
    return this.httpCliente.delete(`${this.API}/${codigo}`);
  }

}
