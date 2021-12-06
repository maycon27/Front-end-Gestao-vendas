import { ICliente, enderecoDto } from './../ICliente';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Resolve, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ClienteService } from '../cliente.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteResolverGuard implements Resolve<ICliente> {
  constructor(private service: ClienteService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICliente> {
    if (route.params && route.params['codigo']) {
      return this.service.getClienteId(route.params['codigo']);
    }

   /* return of({
      nome: '',
      telefone: '',
      ativo: true,
      enderecoDto:
    });
*/
  }
}
