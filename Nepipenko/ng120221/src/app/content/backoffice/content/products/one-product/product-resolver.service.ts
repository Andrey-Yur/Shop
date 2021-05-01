import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {IProduct} from '../products.service';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<IProduct | null>{

  constructor(private  http: HttpClient,
              private  router: Router) { }
  public  resolve(activatedRouteSnapshot: ActivatedRouteSnapshot,
                  // tslint:disable-next-line:variable-name
                  _state: RouterStateSnapshot): Observable<IProduct | null> {
    const id = activatedRouteSnapshot.paramMap.get('id');
    return this.http.get<IProduct>(`/product/${id}`)
        .pipe(
            map((product: IProduct | null) => {
            if (!product) {
                this.router.navigate(['/backoffice']);
              }
            return product;
            }),
            catchError(() => {
              this.router.navigate(['/backoffice']);
              return of(null);
            })
        );
  }
}
