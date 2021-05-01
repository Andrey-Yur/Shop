import { NgModule } from '@angular/core';
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {SharedModule} from '../../shared/shared.module';
import { UserValidatorDirective } from './user-validator.directive';
import {HttpClient} from '@angular/common/http';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';



@NgModule({
  declarations: [LoginComponent, UserValidatorDirective],
  imports: [
    SharedModule,
    LoginRoutingModule
  ]
})
export class LoginModule {
  constructor(private http: HttpClient) {
      }
  public login({value: username}: FormControl): Observable<any>  {
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="AIzaSyAbePb7M0t6Fun8pJIy05dkEhNJ09rn7Es"`, {username});
  }
}
