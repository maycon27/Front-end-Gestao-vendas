import { take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { ICliente } from './ICliente';
import { environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly API = `${environment.API}/cliente`;

  constructor(private httpCliente: HttpClient) { }

  getTodosClientes(){
    return this.httpCliente.get<ICliente[]>(this.API);
  }

  getClienteId(codigo: number){
    return this.httpCliente.get<ICliente>(`${this.API}/${codigo}`);
  }

  adicionarCliente(cliente: ICliente){
    return this.httpCliente.post<ICliente>(this.API,cliente).pipe(take(1));
  }

  atualizarCliente(cliente: ICliente){
    return this.httpCliente.put<ICliente>(`${this.API}/${cliente.codigo}`,cliente);
  }

  deletarCliente(codigo: number){
    return this.httpCliente.delete(`${this.API}/${codigo}`);
  }
}
