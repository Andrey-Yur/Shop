
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


export class AuthInterceptor implements HttpInterceptor {
   
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Intercept request', req)

        const cloned = req.clone({
            headers: req.headers.append('auth', 'SOME_RANDOM_TOKEN')
        })
        return next.handle(cloned).pipe(
            tap(event => {
                if (event.type == HttpEventType.Response) {
                    console.log('Interceptor Response', event)
                }
            })
        )
    }
}