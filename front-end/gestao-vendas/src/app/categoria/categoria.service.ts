import { ICategoria } from './ICategoria';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { environment} from 'src/environments/environment'


@Injectable({
  providedIn: 'root'
})

export class CategoriaService {

  private readonly API = `${environment.API}/categoria`;


  constructor(private httpCliente: HttpClient) { }

  getTodasCategorias(){
    return this.httpCliente.get<ICategoria[]>(this.API);
  }

  getCategoriaId(codigo: number){
    return this.httpCliente.get<ICategoria>(`${this.API}/${codigo}`).toPromise();
  }

  adicionarCategoria(categoria: ICategoria){
    return this.httpCliente.post<ICategoria>(this.API,categoria).toPromise();
  }

  atualizarCategoria(categoria: ICategoria){
    return this.httpCliente.put<ICategoria>(`${this.API}${categoria.codigo}`,categoria).toPromise();
  }

  deletarCategoria(codigo: number){
    return this.httpCliente.delete(`${this.API}${codigo}`).toPromise();
  }
}
