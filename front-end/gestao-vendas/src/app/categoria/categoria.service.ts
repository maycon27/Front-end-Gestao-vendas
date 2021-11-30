import { ICategoria } from './ICategoria';
import { API_PATH } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private httpCliente: HttpClient) { }

  getTodasCategorias(){
    return this.httpCliente.get<ICategoria[]>(`${API_PATH}categoria`);
  }

  getTodasCategorias2(){
    return this.httpCliente.get<ICategoria[]>(`${API_PATH}categoria`).toPromise;
  }

  getCategoriaId(codigo: number){
    return this.httpCliente.get<ICategoria>(`${API_PATH}categoria/${codigo}`).toPromise();
  }

  adicionarCategoria(categoria: ICategoria){
    return this.httpCliente.post<ICategoria>(`${API_PATH}categoria`,categoria).toPromise();
  }

  atualizarCategoria(categoria: ICategoria){
    return this.httpCliente.put<ICategoria>(`${API_PATH}categoria/${categoria.codigo}`,categoria).toPromise();
  }

  deletarCategoria(codigo: number){
    return this.httpCliente.delete(`${API_PATH}categoria/${codigo}`).toPromise();
  }
}
