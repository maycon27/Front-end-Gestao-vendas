import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { ICliente } from './ICliente';
import { environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly API = `${environment.API}cliente`;

  constructor(private httpCliente: HttpClient) { }

  getTodosClientes(){
    return this.httpCliente.get<ICliente[]>(this.API);
  }

  getClienteId(codigo: number){
    return this.httpCliente.get<ICliente>(`${this.API}/${codigo}`).toPromise();
  }

  adicionarCliente(categoria: ICliente){
    return this.httpCliente.post<ICliente>(this.API,categoria).toPromise();
  }

  atualizarCliente(categoria: ICliente){
    return this.httpCliente.put<ICliente>(`${this.API}/${categoria.codigo}`,categoria).toPromise();
  }

  deletarCliente(codigo: number){
    return this.httpCliente.delete(`${this.API}/${codigo}`).toPromise();
  }
}
