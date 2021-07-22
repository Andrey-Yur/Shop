import { Component, OnInit } from '@angular/core';
// import {Router} from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public value = '';
  public validators = [Validators.required];
  public signupForm = this.fb.group({
username: ['', this.validators, this.uniqUserName.bind(this)],
email: ['', this.validators],
password: this.fb.group({
  password: ['', this.validators],
  cpassword: ['', this.validators]
}, {validators: [this.equalValidator]})
});
constructor(private fb: FormBuilder, private http: HttpClient) {
}
  ngOnInit(): void {
    // setTimeout(() => {
    //   this.location.back();
    // }, 5000);
  }
  public signup(formValue: any): void{
    console.log(formValue);
  }
  public equalValidator(control: FormGroup): ValidationErrors | null {
  const [password, cpassword] = Object.values(control.value);
  return  password === cpassword ? null : {
    'nonEqual': 'Passwords are not equal'
  };
  }
public uniqUserName(control: FormControl): Observable<ValidationErrors | null> {
    return this.http.post(`/register`, {'email': control.value, 'password': 'pistol'}); }
}
