import { LoginService } from './login.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable()
export class JwtInterceptor implements HttpInterceptor{

  constructor(private loginService: LoginService){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

    const currentUser = this.loginService.currentUserValue;
    console.log(this.loginService.currentUserValue)
    const isLoggedId = !!(currentUser && (currentUser?.token?? false));
    const isApiUrl = request.url.startsWith(`${environment.API}`);

    if(isLoggedId && isApiUrl){
      request = request.clone({
        setHeaders:{
          Authorization: `Bearer ${currentUser?.token}`
        }
      })
    }
    return next.handle(request);
  }
}
