import { Component, OnInit } from '@angular/core';
// import {Router} from '@angular/router';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
// import {environment} from '../../../environments/environment';
// import {Location} from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public validators = [Validators.required];
  public signupForm = this.fb.group({
username: ['', this.validators, this.uniqUserName.bind(this)],
email: this.fb.control('', this.validators),
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
public uniqUserName(): Observable<any | null> {
  // const user = {
  //   email: 'user@user.com',
  //   password: 'Samara163!',
  //   returnSecureToken: true // token 3600 sec по умолчанию
  // };
    return this.http.post(`/register`, {
    'email': 'eve.holt@reqres.in', 'password': 'pistol' }).
  pipe(map(res => {console.log(res); } ));
}
}
