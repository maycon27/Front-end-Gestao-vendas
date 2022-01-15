import { IUsuario } from './IUsuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private currentUserSubject?: BehaviorSubject<IUsuario>;
  public currentUser?: Observable<IUsuario>;
  mostrarMenuemitter = new EventEmitter<boolean>();

  private readonly API = `${environment.API}/login`;

  constructor(private httpCliente: HttpClient) {

    this.initUser();
   }

   public get currentUserValue(): IUsuario | undefined {
    return this.currentUserSubject?.value;
  }

  login(username: string, password: string){
    return this.httpCliente.post<IUsuario>(this.API, { username, password })
    .pipe(map(usuario => {

      if(usuario && usuario.token){

        localStorage.setItem('currentUser', JSON.stringify(usuario));
        this.currentUserSubject?.next(usuario)
        this.mostrarMenuemitter.emit(true);
      } else {
        this.mostrarMenuemitter.emit(false);
      }

      return usuario;
    }));
  }

  private initUser(){

    const userLocal = localStorage.getItem('currentUser');

      if(userLocal){
        this.currentUserSubject = new BehaviorSubject<IUsuario>(JSON.parse(userLocal));
        this.currentUser = this.currentUserSubject.asObservable();
      }
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject?.next(null!);
}

}
