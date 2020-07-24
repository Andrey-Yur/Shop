import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(User) {
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, User)
      .pipe(
        tap(this.setToken)
      )
  }

  private setToken(response) {
    if (response) {
      const expData = new Date(new Date().getTime() + response.expiresIn * 1000);
      localStorage.setItem('fbTokenExp', expData.toString());
      localStorage.setItem('fbToken', response.idToken);
    } else {
      localStorage.clear();
    }
  }

  get token() {
    const expData = new Date(localStorage.getItem('fbTokenExp'));
    if (new Date > expData) {
      this.logout();
      return null;
    }
    return localStorage.getItem('fbToken');
  }

  logout() {
    this.setToken(null)
  }

  isAuthenticated() {
    return !!this.token
  }

}
