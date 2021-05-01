import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ResultService {
  constructor(private http: HttpClient) {}
  public create(order) {
    return this.http.post(`${environment.fbDbUrl}/orders.json`, order);
  }
}
