import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public error$: Subject<string> = new Subject<string>();
  public error1$: Subject<string> = new Subject<string>();
  constructor(private http: HttpClient) {}

  login(User) {
    return this.http
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`,
        User
      )
      .pipe(tap(this.setToken), catchError(this.handleError.bind(this)));
  }

  private setToken(response) {
    if (response) {
      const expData = new Date(
        new Date().getTime() + response.expiresIn * 1000
      );
      localStorage.setItem('fbTokenExp', expData.toString());
      localStorage.setItem('fbToken', response.idToken);
    } else {
      localStorage.clear();
    }
  }

  get token() {
    const expData = new Date(localStorage.getItem('fbTokenExp'));
    if (new Date() > expData) {
      this.logout();
      return null;
    }
    return localStorage.getItem('fbToken');
  }

  logout() {
    this.setToken(null);
  }

  isAuthenticated() {
    return !!this.token;
  }

  private handleError(error: HttpErrorResponse) {
    const { message } = error.error.error;
    //console.log(message);
    switch (message) {
      case 'INVALID_EMAIL':
        this.error1$.next('Invalid email');
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.':
        this.error1$.next(
          'Access to this account has been temporarily disabled due to many failed login attempts'
        );
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('Invalid password');
        break;
      case 'EMAIL_NOT_FOUND':
        this.error1$.next('Email not registred');
        break;
    }
    return throwError(error);
  }
}
