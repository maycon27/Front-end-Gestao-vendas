import { IUsuario } from './IUsuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private readonly API = `${environment.API}/login`;

  constructor(private httpCliente: HttpClient) { }

  login(usuario: IUsuario){

    return this.httpCliente.post(this.API, JSON.stringify(usuario)).subscribe(
      dado =>{
        var token = JSON.parse(JSON.stringify(dado)).token

        localStorage.setItem("token", token);
        console.log(token)
      },

      erro => {
        console.error("erro ao fazer o login");
      }
      )

  }
}
