import { Directive } from '@angular/core';
import {FormControl, ValidationErrors, NG_ASYNC_VALIDATORS, AsyncValidator} from '@angular/forms';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Directive({
  selector: '[appNameValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: NameValidatorDirective,
      // useValue: validateLogin,
      multi: true
    }
  ]
})
export class NameValidatorDirective  implements AsyncValidator{
  constructor(private http: HttpClient) {

  }
  public validate(control: FormControl): Observable<ValidationErrors | null> {
    return this.http.post(`/register`, {'email': control.value, 'password': 'pistol'});
  }
}
