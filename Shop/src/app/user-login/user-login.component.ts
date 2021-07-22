import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
('@angular/material/core');

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  public value = '';
  public validators = [Validators.required];
  public signupForm = this.fb.group({
    workorder: ['', this.validators],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  public login(formValue: any): void {
    console.log(formValue);
  }
  public equalValidator(control: FormGroup): ValidationErrors | null {
    const [password, cpassword] = Object.values(control.value);
    return password === cpassword
      ? null
      : {
          nonEqual: 'Passwords are not equal',
        };
  }
}
