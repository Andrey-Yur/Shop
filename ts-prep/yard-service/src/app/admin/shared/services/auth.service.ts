import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FbAuthResponse, User } from 'src/app/shared/components/interfaces';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public error$: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) {}

  get token(): string {
    const expDate = new Date(localStorage.getItem('fb-token-exp'));
    if (new Date() > expDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('fb-token');
  }

  login(user: User): Observable<any> {
    user.returnSecureToken = true;
    return this.http
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`,

        user
      )
      .pipe(tap(this.setToken), catchError(this.handError.bind(this)));
  }

  logout() {
    this.setToken(null);
    localStorage.clear();
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private handError(error: HttpErrorResponse) {
    const { message } = error.error.error;
    switch (message) {
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Email did not registred');
        break;
      case 'INVALID_EMAIL':
        this.error$.next('Wrong email');
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('Wrong password');
        break;
    }
    return throwError(error);
  }

  private setToken(response: FbAuthResponse | null) {
    // console.log(response.registered);
    if (response) {
      const expDate = new Date(
        new Date().getTime() + +response.expiresIn * 1000
      );
      localStorage.setItem('fb-token', response.idToken);
      localStorage.setItem('fb-token-exp', expDate.toString());
    } else {
      localStorage.clear();
    }
  }

  private isReg(response: FbAuthResponse | null) {
    // if (response) {
    //   const regYes = response.registered;
    //   console.log(regYes);
    //   return regYes;
    // }
    console.log(response);
  }

  checkUsr(numTel: string = ''): Observable<any> {
    // console.log('PPPS');
    const user: User = {
      email: 'user@user.ca',
      password: '',
    };
    return this.http
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${environment.apiKey}`,
        { idToken: this.token }
      )
      .pipe(tap(this.isReg));
  }
}
