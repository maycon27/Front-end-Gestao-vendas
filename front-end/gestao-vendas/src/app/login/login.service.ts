import { IUsuario } from './IUsuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private currentUserSubject!: BehaviorSubject<IUsuario>;
  public currentUser!: Observable<IUsuario>;

  private readonly API = `${environment.API}/login`;

  constructor(private httpCliente: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<IUsuario>(JSON.parse(localStorage.getItem('currentUser')|| ''));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   public get currentUserValue(): IUsuario {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.httpCliente.post<IUsuario>(this.API, { username, password })
    .pipe(map(usuario => {

      if(usuario && usuario.token){

        localStorage.setItem('currentUser', JSON.stringify(usuario));
        this.currentUserSubject.next(usuario)
      }

      return usuario;
    }));
  }
}
