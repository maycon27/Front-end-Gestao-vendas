import { Injectable } from '@angular/core';
import { API_PATH } from './../../environments/environment';
import { HttpClient} from '@angular/common/http'
import { ICliente } from './ICliente';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpCliente: HttpClient) { }

  getTodosClientes(){
    return this.httpCliente.get<ICliente[]>(`/api/cliente`);
  }

  getClienteId(codigo: number){
    return this.httpCliente.get<ICliente>(`/api/cliente/${codigo}`).toPromise();
  }

  adicionarCliente(categoria: ICliente){
    return this.httpCliente.post<ICliente>(`/api/cliente`,categoria).toPromise();
  }

  atualizarCliente(categoria: ICliente){
    return this.httpCliente.put<ICliente>(`/api/cliente/${categoria.codigo}`,categoria).toPromise();
  }

  deletarCliente(codigo: number){
    return this.httpCliente.delete(`/api/cliente/${codigo}`).toPromise();
  }
}
