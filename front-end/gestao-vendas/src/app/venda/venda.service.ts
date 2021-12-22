import { IClienteVendas } from './IClienteVenda';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  private readonly API = `${environment.API}/venda`;

  constructor(private httpCliente: HttpClient) { }

  getVendaCliente(codigoCliente: number){
    return this.httpCliente.get<IClienteVendas>(`${this.API}/cliente/${codigoCliente}`);
  }

}
