import { IVendedor } from './IVendedor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  private readonly API = `${environment.API}/vendedor`;


  constructor(private httpCliente: HttpClient) { }

  getTodosVendedores(){
    return this.httpCliente.get<IVendedor[]>(this.API);
  }

  getVendedorId(codigo: number){
    return this.httpCliente.get<IVendedor>(`${this.API}/${codigo}`);
  }

  adicionarVendedor(vendedor: IVendedor){
    return this.httpCliente.post<IVendedor>(this.API,vendedor).pipe(take(1));
  }

  atualizarVendedor(vendedor: IVendedor){
    return this.httpCliente.put<IVendedor>(`${this.API}/${vendedor.codigo}`,vendedor).pipe(take(1));
  }

  deletarVendedor(codigo: number | undefined){
    return this.httpCliente.delete(`${this.API}/${codigo}`);
  }
}
