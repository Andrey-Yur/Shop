// import {IProduct} from './data';
// import {catchError, pluck} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {BASE_URL_TOKEN} from '../../../../config';

export interface IProduct {
    id: number;
    name: string;
    last_name: string;
    email: string;
    gender: string;
    ip_address: string;
    isFavorite: boolean;
}
@Injectable()
export class ProductsService{
    // public timestamp = Date.now();
    constructor(private http: HttpClient,
                @Inject(BASE_URL_TOKEN) protected baseUrl: string ) {
        console.log(this.http);
    }
public getProducts(): Observable<IProduct[]> {
    return this.http.get<any>(`/unknown`);
}
}
