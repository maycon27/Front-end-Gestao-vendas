import { ICategoria } from 'src/app/categoria/ICategoria';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CategoriaService } from '../categoria.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaResolverGuard implements Resolve<ICategoria> {
  constructor(private service: CategoriaService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICategoria> {
    if (route.params && route.params['codigo']) {
      return this.service.getCategoriaId(route.params['codigo']);
    }

    return of({
      nome: ''
    });

  }
}
