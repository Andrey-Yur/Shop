import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {
  }
  canActivate(
    _: ActivatedRouteSnapshot,
    {url}: RouterStateSnapshot): Observable<boolean>{
    return of(false)
        .pipe(
            switchMap((isLogged: boolean) => {
              if (!isLogged && (url === '/login' || url === '/signup')) {
                return of (true);
              }
              if (isLogged && (url === '/login' || url === '/signup')) {
                this.router.navigate(['/backoffice']);
                return of(false);
              }
              if (!isLogged) {
                this.router.navigate(['/login']);
              }
              return of(isLogged);
            })
        );
  }
}
