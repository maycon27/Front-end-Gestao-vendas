import { ICategoria } from './ICategoria';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { environment} from 'src/environments/environment'
import { tap, delay, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class CategoriaService {

  private readonly API = `${environment.API}/categoria`;


  constructor(private httpCliente: HttpClient) { }

  getTodasCategorias(){

    //const header = new HttpHeaders().set('Authorization',`Bearer ${(localStorage.getItem('token') || '')}`);

    return this.httpCliente.get<ICategoria[]>(this.API);
  }

  getCategoriaId(codigo: number){
    return this.httpCliente.get<ICategoria>(`${this.API}/${codigo}`);
  }

  adicionarCategoria(categoria: ICategoria){
    return this.httpCliente.post<ICategoria>(this.API,categoria).pipe(take(1));
  }

  atualizarCategoria(categoria: ICategoria){
    return this.httpCliente.put<ICategoria>(`${this.API}/${categoria.codigo}`,categoria).pipe(take(1));
  }

  deletarCategoria(codigo: number | undefined){
    return this.httpCliente.delete(`${this.API}/${codigo}`);
  }
}
