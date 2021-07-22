import { Directive } from '@angular/core';
import {FormControl, NG_VALIDATORS, ValidationErrors} from '@angular/forms';

@Directive({
  selector: '[appUserValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
    //  useExisting: UserValidatorDirective,
      useValue: validate,
      multi: true
    }
  ]
})
export class UserValidatorDirective {
  }
function validate(control: FormControl): ValidationErrors | null {
  const isValid: boolean = /^[a-zA-Z]*$/.test(control.value);
  return isValid ? null : {
    'onlyLetters': 'You must use only letters'
  };
}
