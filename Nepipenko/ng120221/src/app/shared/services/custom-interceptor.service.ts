import {Inject, Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BASE_URL_TOKEN} from '../../config';
import {filter, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CustomInterceptorService implements HttpInterceptor{

  constructor(@Inject(BASE_URL_TOKEN) private baseUrl: string) {}
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const headers: HttpHeaders = req.headers.append('Content-Type', 'application/json');
    const jsonReq = req.clone({
  url: `${this.baseUrl}${req.url}`,
      headers
});
    return next.handle(jsonReq)
      .pipe(filter(this._isHttpResponse),
      map((res) => {
        return res.clone({body: res.body?.data});
      }));
          // catchError(() => {
          //   return EMPTY;
         // }));
    }
    private _isHttpResponse(event: HttpEvent<any>): event is HttpResponse<any> {
  return event instanceof HttpResponse;
}
}
