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
    return this.httpCliente.get<ICategoria[]>(`/api/categoria`);
  }

  getCategoriaId(codigo: number){
    return this.httpCliente.get<ICategoria>(`/api/categoria/${codigo}`).toPromise();
  }

  adicionarCategoria(categoria: ICategoria){
    return this.httpCliente.post<ICategoria>(`/api/categoria`,categoria).toPromise();
  }

  atualizarCategoria(categoria: ICategoria){
    return this.httpCliente.put<ICategoria>(`/api/categoria/${categoria.codigo}`,categoria).toPromise();
  }

  deletarCategoria(codigo: number){
    return this.httpCliente.delete(`/api/categoria/${codigo}`).toPromise();
  }
}
